import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { HTTP_STATUS } from "../constant/httpRequest";

export function validateData(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.socialLinks && typeof req.body.socialLinks === "string") {
        try {
          req.body.socialLinks = JSON.parse(req.body.socialLinks);
        } catch (parseError) {
          req.body.socialLinks = [];
        }
      }

      if (req.body.data && typeof req.body.data === "string") {
        try {
          const parsedData = JSON.parse(req.body.data);
          req.body = { ...req.body, ...parsedData };
        } catch (e) {}
      }

      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        return res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: "Validation failed",
          details: errorMessages,
        });
      }

      return res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Internal Server Error" });
    }
  };
}
