import { Router } from "express";
import * as authController from "./auth.controller";
import { validateData } from "../../middleware/validation.middleware";

const authRoutes = Router();

import {
  registerSchema,
  verifyEmailSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema,
} from "./auth.validation";
import { isAuthenticated } from "../../middleware/isAuthenticated.middleware";

authRoutes.post(
  "/register",
  validateData(registerSchema),
  authController.registerUser,
);

authRoutes.post(
  "/verify",
  validateData(verifyEmailSchema),
  authController.verifyEmail,
);

authRoutes.post("/login", validateData(loginSchema), authController.loginUser);

authRoutes.post("/logout", isAuthenticated, authController.logoutUser);

authRoutes.post(
  "/forgot-password",
  validateData(forgotPasswordSchema),
  authController.forgotPassword,
);

authRoutes.post(
  "/reset-password",
  validateData(resetPasswordSchema),
  authController.resetPassword,
);


authRoutes.post(
  "/change-password",
  isAuthenticated,
  validateData(changePasswordSchema),
  authController.changePassword,
);

export default authRoutes;
