import { Router } from "express";
import * as authController from "./auth.controller";
import { validateData } from "../../middleware/validation.middleware";
import { registerSchema } from "./auth.validation";


const authRoutes = Router();

authRoutes.post("/register", validateData(registerSchema),authController.registerUser)

export default authRoutes;
