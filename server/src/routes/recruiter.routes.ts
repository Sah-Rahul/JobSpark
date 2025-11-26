import { Router } from "express";
import {
  applyJob,
  createJob,
  deleteJob,
  getAllJobs,
  getJobDetails,
  updateJob,
} from "../controller/createJob.controller";
import { isAuthenticated } from "../middleware/auth.middleware";
import { isRecruiter } from "../middleware/recruiter.middleware";

const recruiterRouter = Router();

recruiterRouter.post("/create/job", isAuthenticated, isRecruiter, createJob);
recruiterRouter.put(
  "/update/job/:jobId",
  isAuthenticated,
  isRecruiter,
  updateJob
);
recruiterRouter.get("/", isAuthenticated, getAllJobs);
recruiterRouter.get("/get/job-details/:jobId", isAuthenticated, getJobDetails);
recruiterRouter.post("/apply/:jobId", isAuthenticated, applyJob);
recruiterRouter.delete("/:jobId", isAuthenticated, isRecruiter, deleteJob);

export default recruiterRouter;
