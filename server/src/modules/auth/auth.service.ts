import { HTTP_STATUS } from "../../constant/httpRequest";
import {
  producePasswordResetEmail,
  produceVerificationEmail,
  produceWelcomeEmail,
} from "../../queues/producers/email.producer";
import { ApiError } from "../../utils/ApiError";
import UserModel from "../user/user.model";
import { AUTH_MESSAGES } from "./auth.constant";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  ChangePasswordInput,
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
  VerifyEmailInput,
} from "./auth.validation";
import { AccountStatus } from "../../enum/user.enum";
import { WelcomeEmailTemplate } from "../../emailTemplates/welcomeEmail";

export const registerService = async (data: RegisterInput) => {
  const { fullName, email, password } = data;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(HTTP_STATUS.CONFLICT, AUTH_MESSAGES.EMAIL_EXISTS);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    email,
    fullName,
    password: hashedPassword,
    isEmailVerified: false,
  });

  const emailVerificationToken = jwt.sign(
    { userId: user._id },
    process.env.EMAIL_VERIFICATION_SECRET!,
    { expiresIn: "15m" },
  );

  user.emailVerificationToken = emailVerificationToken;
  user.emailVerificationExpires = new Date(Date.now() + 15 * 60 * 1000);
  await user.save();

  await produceVerificationEmail({
    email: user.email,
    fullName: user.fullName,
    token: emailVerificationToken,
  });

  return {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    status: user.status,
    isEmailVerified: user.isEmailVerified,
    createdAt: user.createdAt,
  };
};

export const verifyEmailService = async (data: VerifyEmailInput) => {
  const { token } = data;

  if (!token) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      "Verification token is required",
    );
  }

  let decoded: any;
  try {
    decoded = jwt.verify(token, process.env.EMAIL_VERIFICATION_SECRET!);
  } catch (err) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.INVALID_TOKEN);
  }

  const user = await UserModel.findOne({
    _id: decoded.userId,
    emailVerificationToken: token,
    emailVerificationExpires: { $gt: new Date() },
  });

  if (!user) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.INVALID_TOKEN);
  }

  if (user.isEmailVerified) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.EMAIL_ALREADY_VERIFIED,
    );
  }

  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save();

  return null;
};

export const loginService = async (data: LoginInput) => {
  const { email, password } = data;

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.EMAIL_DOESNOT_EXISTS,
    );
  }

  if (!user.isEmailVerified) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      AUTH_MESSAGES.EMAIL_NOT_VERIFIED,
    );
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.INVALID_CREDENTIALS,
    );
  }

  if (!user.isWelcomeEmailSent) {
    await produceWelcomeEmail({
      email: user.email,
      fullName: user.fullName,
      dashboardURL: `${process.env.CLIENT}/job`,
    });
    user.isWelcomeEmailSent = true;
  }

  user.status = AccountStatus.ACTIVE;
  user.lastLogin = new Date();
  await user.save();

  const accessToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "3d" as const },
  );

  return {
    accessToken,
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    status: user.status,
    isEmailVerified: user.isEmailVerified,
  };
};

export const forgotPasswordService = async (data: ForgotPasswordInput) => {
  const { email } = data;

  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.EMAIL_DOESNOT_EXISTS,
    );
  }

  if (!user.isEmailVerified) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      AUTH_MESSAGES.EMAIL_NOT_VERIFIED,
    );
  }

  const resetToken = jwt.sign(
    { userId: user._id },
    process.env.PASSWORD_RESET_SECRET!,
    { expiresIn: "15min" },
  );

  user.passwordResetToken = resetToken;
  user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000);
  await user.save();

  await producePasswordResetEmail({
    email: user.email,
    fullName: user.fullName,
    token: resetToken,
  });

  return null;
};

export const resetPasswordService = async (data: ResetPasswordInput) => {
  const { token, newPassword } = data;

  let decoded: any;
  try {
    decoded = jwt.verify(token, process.env.PASSWORD_RESET_SECRET!);
  } catch {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.INVALID_TOKEN);
  }

  const user = await UserModel.findOne({
    _id: decoded.userId,
    passwordResetToken: token,
    passwordResetExpires: { $gt: new Date() },
  }).select("+password +passwordResetToken +passwordResetExpires");

  if (!user) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.INVALID_TOKEN);
  }

  const isSame = await bcrypt.compare(newPassword, user.password);
  if (isSame) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.SAME_PASSWORD);
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  return null;
};

export const changePasswordService = async (
  userId: string,
  data: ChangePasswordInput,
) => {
  const { currentPassword, newPassword } = data;

  const user = await UserModel.findById(userId).select("+password");
  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, AUTH_MESSAGES.USER_NOT_FOUND);
  }

  const isCorrect = await bcrypt.compare(currentPassword, user.password);
  if (!isCorrect) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.INCORRECT_PASSWORD,
    );
  }

  const isSame = await bcrypt.compare(newPassword, user.password);
  if (isSame) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.SAME_PASSWORD);
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  return null;
};
