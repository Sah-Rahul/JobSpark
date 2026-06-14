import { Request, Response, NextFunction } from "express";
import asyncHandler from "../../utils/AsyncHandler";
import * as authService from "./auth.service";
import { HTTP_STATUS } from "../../constant/httpRequest";
import { ApiResponse } from "../../utils/ApiResponse";
import { AUTH_MESSAGES } from "./auth.constant";

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await authService.registerService(req.body);

    return res
      .status(HTTP_STATUS.CREATED)
      .json(
        new ApiResponse(
          HTTP_STATUS.CREATED,
          user,
          AUTH_MESSAGES.REGISTER_SUCCESS,
        ),
      );
  },
);

export const verifyEmail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await authService.verifyEmailService(req.body);

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(HTTP_STATUS.OK, null, AUTH_MESSAGES.EMAIL_VERIFIED),
      );
  },
);

export const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { accessToken, ...user } = await authService.loginService(req.body);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(HTTP_STATUS.OK)
      .json(new ApiResponse(HTTP_STATUS.OK, user, AUTH_MESSAGES.LOGIN_SUCCESS));
  },
);

export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, AUTH_MESSAGES.LOGOUT_SUCCESS));
});

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    await authService.forgotPasswordService(req.body);

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(
          HTTP_STATUS.OK,
          null,
          AUTH_MESSAGES.PASSWORD_RESET_SENT,
        ),
      );
  },
);

export const resetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    await authService.resetPasswordService(req.body);

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(
          HTTP_STATUS.OK,
          null,
          AUTH_MESSAGES.PASSWORD_RESET_SUCCESS,
        ),
      );
  },
);

export const changePassword = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;

    await authService.changePasswordService(userId, req.body);

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(HTTP_STATUS.OK, null, AUTH_MESSAGES.PASSWORD_CHANGED),
      );
  },
);
