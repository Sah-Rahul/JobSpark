import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import TryCacthError from "../utils/TryCacth";

interface CustomRequest extends Request {
  user?: { id: string; role: string };
}

export const isRecruiter = TryCacthError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new ApiError(401, "Unauthorized user.");
    }

    if (req.user.role !== "recruiter") {
      throw new ApiError(
        403,
        "Only recruiters are allowed to perform this action."
      );
    }

    next();
  }
);
