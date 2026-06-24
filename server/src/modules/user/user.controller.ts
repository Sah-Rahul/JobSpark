import { Request, Response, NextFunction } from "express";
import asyncHandler from "../../utils/AsyncHandler";
import * as userService from "./user.service";
import { HTTP_STATUS } from "../../constant/httpRequest";
import { ApiResponse } from "../../utils/ApiResponse";
import { getParam } from "../../utils/getParams";
import { ApiError } from "../../utils/ApiError";

export const updateUserProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = getParam(req.user?.userId);

    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const avatarFile = files?.avatar?.[0];
    const resumeFile = files?.cvResumes?.[0];

    const result = await userService.updateUserProfileService(
      userId,
      req.body,
      avatarFile ? avatarFile.buffer : undefined,
      resumeFile
        ? {
            buffer: resumeFile.buffer,
            originalname: resumeFile.originalname,
            size: `${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB`,
          }
        : undefined,
    );

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(HTTP_STATUS.OK, result, "Profile updated successfully"),
      );
  },
);

export const deleteUserResume = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = getParam(req.user?.userId);

    const publicId = req.query.publicId as string;

    if (!publicId) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, "publicId is required");
    }

    const result = await userService.deleteUserResumeService(userId, publicId);

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(HTTP_STATUS.OK, result, "Resume deleted successfully"),
      );
  },
);

export const deleteSocialLink = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = getParam(req.user?.userId);
    const linkId = getParam(req.params.linkId);

    if (!linkId) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Link ID is required");
    }

    const result = await userService.deleteSocialLinkService(userId, linkId);

    return res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(
          HTTP_STATUS.OK,
          result,
          "Social link deleted successfully",
        ),
      );
  },
);
