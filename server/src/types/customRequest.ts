import { Request } from "express";

export interface CustomUser {
  id: string;
  role: "user" | "recruiter";
  companyId?: string;
}

export interface CustomRequest<T = any> extends Request {
  user?: CustomUser;
  body: T;
}
