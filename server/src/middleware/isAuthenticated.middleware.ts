import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/AsyncHandler";
import UserModel from "../modules/user/user.model";
import { ApiError } from "../utils/ApiError";
import { HTTP_STATUS } from "../constant/httpRequest";

export const isAuthenticated = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : req.cookies?.accessToken;

    if (!token) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Access token missing");
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid or expired token");
    }

    const user = await UserModel.findById(decoded.userId);
    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "User not found");
    }

    req.user = {
      userId: String(user._id),
      role: user.role,
    };

    next();
  },
);
