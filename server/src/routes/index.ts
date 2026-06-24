import { Router } from "express"; 
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/user/user.routes";
import companyRoutes from "../modules/company/company.routes";

const appRoutes = Router();

appRoutes.use("/auth", authRoutes);
appRoutes.use("/user", userRoutes);
appRoutes.use("/company", companyRoutes)

export default appRoutes;