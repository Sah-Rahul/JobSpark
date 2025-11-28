import { Router } from "express";
import {
  applyJob,
  createJob,
  deleteJob,
  getAllJobs,
  getJobDetails, 
  getMyJobs, 
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
recruiterRouter.get("/all/jobs",  getAllJobs);
recruiterRouter.get("/get/job-details/:jobId", getJobDetails);
recruiterRouter.post("/apply/:jobId", isAuthenticated, applyJob);
recruiterRouter.delete("/delete/job/:jobId", isAuthenticated, isRecruiter, deleteJob);
recruiterRouter.get("/me", isAuthenticated, isRecruiter, getMyJobs);

export default recruiterRouter;
