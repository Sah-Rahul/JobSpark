import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import TryCacthError from "../utils/TryCacth";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

export const isAuthenticated = TryCacthError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
      throw new ApiError(401, "Unauthorized User");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);

    req.user = decoded;

    next();
  }
);
