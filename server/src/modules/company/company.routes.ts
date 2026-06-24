import { Router } from "express";
import { validateData } from "../../middleware/validation.middleware";
import { companySchema, updateCompanySchema } from "./company.validations";
import * as companyController from "./comapny.controller";
import { isAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { upload } from "../../config/multer.config";

const companyRoutes = Router();

companyRoutes.get("/", companyController.getAllCompanies);
companyRoutes.get("/:slug", companyController.getCompanyBySlug);

companyRoutes.use(isAuthenticated);

companyRoutes.post(
  "/create",
  upload.fields([
    { name: "logoImage", maxCount: 1 },
    { name: "bannerImage", maxCount: 1 },
  ]),
  validateData(companySchema),
  companyController.registerCompany,
);

companyRoutes.put(
  "/:slug",
  upload.fields([
    { name: "logoImage", maxCount: 1 },
    { name: "bannerImage", maxCount: 1 },
  ]),
  validateData(updateCompanySchema),
  companyController.updateCompany,
);

companyRoutes.delete("/:slug", companyController.deleteCompany);

export default companyRoutes;
