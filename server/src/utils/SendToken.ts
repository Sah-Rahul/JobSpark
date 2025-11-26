import dotenv from "dotenv";
dotenv.config();
import { Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";

interface UserPayload {
  id: string;
  name?: string;
  email?: string;
  role: "employee" | "recruiter";
  [key: string]: any;
}

interface SendTokenOptions {
  user: UserPayload;
  statusCode: number;
  res: Response;
  message?: string;
}

export const sendToken = ({
  user,
  statusCode,
  res,
  message = "Logged in successfully",
}: SendTokenOptions): void => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) throw new Error("JWT_SECRET_KEY is missing");

  const payload = {
    id: user.id,
    role: user.role,
  };

  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || "5d") as unknown as any,
  };

  const token = jwt.sign(payload, secret, options);

  const cookieExpiry = Number(process.env.COOKIES_EXPIRES_IN) || 7;

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(Date.now() + cookieExpiry * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
