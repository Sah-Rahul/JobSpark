import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode: number = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || null,
    ...(process.env.NODE_ENV === "development" && {
      stack: formatStack(err.stack),
    }),
  });
};

export default errorMiddleware;

export const formatStack = (stack: string = "") => {
  return stack
    .split("\n")
    .map((line) =>
      line.replace(process.cwd(), "").replace("    at ", "").trim()
    )
    .filter((line) => line.length > 0);
};
