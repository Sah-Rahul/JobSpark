import { Request, Response, NextFunction } from "express";
import asyncHandler from "../../utils/AsyncHandler";
import * as authService from "./auth.service";
import { HTTP_STATUS } from "../../constant/httpRequest";
import { ApiResponse } from "../../utils/ApiResponse";

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authService.registerService(req.body);

    return res
      .status(HTTP_STATUS.CREATED)
      .json(new ApiResponse(HTTP_STATUS.CREATED, result.user, result.message));
  },
);
