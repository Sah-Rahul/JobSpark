import { produceVerificationEmail } from "../../queues/producers/email.producer";
import { ApiError } from "../../utils/ApiError";
import UserModel from "../user/user.model";
import { AUTH_MESSAGES } from "./auth.constant";
import { RegisterDTO } from "./auth.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerService = async (data: RegisterDTO) => {
  const { fullName, email, password } = data;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, AUTH_MESSAGES.EMAIL_EXISTS);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    fullName,
    email,
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
    message: AUTH_MESSAGES.REGISTER_SUCCESS,
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      status: user.status,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt,
    },
  };
};
