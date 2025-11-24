import TryCacthError from "../utils/TryCacth";
import { Request, Response } from "express";
import {
  ForgotPasswordSchema,
  LoginSchema,
  ResetPasswordSchema,
  SignupSchema,
  VerifyOtpSchema,
} from "../zodValidations/userZodSchema";
import { ZodError } from "zod";
import { ApiError } from "../utils/ApiError";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import { ApiResponse } from "../utils/ApiResponse";
import { OtpModel } from "../models/otp.model";
import crypto from "crypto";
import { sendToken } from "../utils/SendToken";
import { sendEmail } from "../services/sendEmail";
import { verifyEmail } from "../services/verifyEmail";
import { forgotPasswordEmailTemplate } from "../services/forgotPassword";

interface AuthRequest extends Request {
  user?: any;
}

export const userRegister = TryCacthError(
  async (req: Request, res: Response) => {
    const parsed = SignupSchema.safeParse(req.body);

    if (!parsed.success) {
      const zodError: ZodError = parsed.error;
      const formattedErrors = zodError.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`
      );
      throw new ApiError(400, "Invalid input", formattedErrors);
    }

    const { fullName, userName, role, email, password } = parsed.data;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new ApiError(400, "User with this email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      fullName,
      userName,
      role,
      email,
      password: hashedPassword,
      isVerified: false,
    });

    const otp = crypto.randomInt(100000, 999999).toString();

    await OtpModel.create({
      userId: newUser._id,
      otp,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    });

    const verificationUrl = `${process.env.FRONTEND_URL}/verify-email/${newUser._id}`;

    const verificationEmailHtml = verifyEmail({
      userName: newUser.fullName,
      verificationUrl,
      verificationCode: otp,
    });

    await sendEmail({
      email: newUser.email,
      subject: "Verify Your Email - TalentHub",
      html: verificationEmailHtml,
    });

    sendToken({
      user: {
        id: newUser._id.toString(),
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
        profile: newUser.profile,
      },
      statusCode: 201,
      res,
      message:
        "User registered successfully. Please check your email to verify your account.",
    });

    return res.status(201).json(
      new ApiResponse(
        201,
        {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          role: newUser.role,
          isVerified: newUser.isVerified,
        },
        "User registered successfully. Please check your email to verify your account."
      )
    );
  }
);

export const verifyEmails = TryCacthError(
  async (req: Request, res: Response) => {
    const parsed = VerifyOtpSchema.safeParse(req.body);

    if (!parsed.success) {
      const zodError: ZodError = parsed.error;
      const formattedErrors = zodError.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`
      );
      throw new ApiError(400, "Invalid input", formattedErrors);
    }

    const { userId, otp } = parsed.data;

    const otpRecord = await OtpModel.findOne({ userId, otp });
    if (!otpRecord) {
      throw new ApiError(400, "Invalid OTP");
    }

    if (otpRecord.expiresAt < new Date()) {
      await OtpModel.deleteOne({ _id: otpRecord._id });
      throw new ApiError(400, "OTP has expired. Please request a new one.");
    }

    const user = await UserModel.findByIdAndUpdate(
      userId,
      { isVerified: true },
      { new: true }
    );

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    await OtpModel.deleteOne({ _id: otpRecord._id });

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
        },
        "Email verified successfully."
      )
    );
  }
);

export const userLogin = TryCacthError(async (req: Request, res: Response) => {
  const parsed = LoginSchema.safeParse(req.body);

  if (!parsed.success) {
    const zodError: ZodError = parsed.error;
    const formattedErrors = zodError.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`
    );
    throw new ApiError(400, "Invalid input", formattedErrors);
  }

  const { email, password } = parsed.data;

  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User doesn't exist with this email.");
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw new ApiError(400, "Invalid credentials.");
  }

  return sendToken({
    user: {
      id: user._id.toString(),
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      role: user.role,
      profile: user.profile,
    },
    statusCode: 200,
    res,
    message: `Welcome back ${user.fullName}`,
  });
});

export const forgotPassword = TryCacthError(
  async (req: Request, res: Response) => {
    const parsed = ForgotPasswordSchema.safeParse(req.body);
    if (!parsed.success) {
      const zodError = parsed.error;
      const formattedErrors = zodError.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`
      );
      throw new ApiError(400, "Invalid input", formattedErrors);
    }

    const { email } = parsed.data;

    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new ApiError(400, "User doesn't exist with this email.");
    }

    const otp = crypto.randomInt(100000, 999999).toString();

    const hashedOtp = await bcrypt.hash(otp, 10);

    user.resetPasswordToken = hashedOtp;
    user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${otp}`;

    await sendEmail({
      email: user.email,
      subject: "Reset Your Password - Nexonic",
      html: forgotPasswordEmailTemplate({ resetPasswordUrl: resetUrl }),
    });

    return res.status(200).json({
      success: true,
      message: "Password reset link sent to your email.",
    });
  }
);

export const logoutUser = TryCacthError(async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

export const resendOtp = TryCacthError(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Unauthorized");
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    if (user.isVerified) {
      throw new ApiError(400, "Email is already verified");
    }

    await OtpModel.deleteMany({ userId: user._id });

    const otp = crypto.randomInt(100000, 999999).toString();

    await OtpModel.create({
      userId: user._id,
      otp,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
    });

    const verificationEmailHtml = verifyEmail({
      userName: user.fullName,
      verificationUrl: `${process.env.FRONTEND_URL}/verify-email/${user._id}`,
      verificationCode: otp,
    });

    await sendEmail({
      email: user.email,
      subject: "Verify Your Email - Talenthub",
      html: verificationEmailHtml,
    });

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          {},
          "Verification code has been resent to your email"
        )
      );
  }
);
