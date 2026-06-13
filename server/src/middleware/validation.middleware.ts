import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { HTTP_STATUS } from "../constant/httpRequest";

export function validateData(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: "Validation failed",
          details: errorMessages,
        });
      } else {
        res
          .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
          .json({ success: false, error: "Internal Server Error" });
      }
    }
  };
}
