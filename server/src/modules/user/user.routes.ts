import { Router } from "express";
import * as userController from "./user.controller";
import { validateData } from "../../middleware/validation.middleware";

const userRoutes = Router();

import { isAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { updateUserProfileSchema } from "./user.validation";
import { upload } from "../../config/multer.config";

userRoutes.post(
  "/update-profile",
  isAuthenticated,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "cvResumes", maxCount: 8 },
  ]),
  validateData(updateUserProfileSchema),
  userController.updateUserProfile,
);

userRoutes.delete(
  "/resume",
  isAuthenticated,
  userController.deleteUserResume,
);

userRoutes.delete(
  "/social-link/:linkId",
  isAuthenticated,
  userController.deleteSocialLink
);

export default userRoutes;
