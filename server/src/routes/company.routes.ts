import { Router } from "express";
import { isAuthenticated } from "../middleware/auth.middleware";
import { upload } from "../middleware/multer.middleware";
import {
  createCompany,
  deleteCompany,
  getAllCompanies,
  getCompanyDetails,
  UpdateCompany,
} from "../controller/company.controller";
import { isRecruiter } from "../middleware/recruiter.middleware";

const companyRouter = Router();

companyRouter.post(
  "/create",
  isAuthenticated,
  isRecruiter,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  createCompany
);
companyRouter.put(
  "/update/:companyId",
  isAuthenticated,
  isRecruiter,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  UpdateCompany
);
companyRouter.delete(
  "/delete/:companyId",
  isAuthenticated,
  isRecruiter,
  deleteCompany
);

companyRouter.get("/get-companyById/:companyId", isAuthenticated, getCompanyDetails);
companyRouter.get("/get-all-company", isAuthenticated, getAllCompanies);

export default companyRouter;
