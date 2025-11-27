import { Request, Response } from "express";
import JobModel from "../models/job.model";
import { ApiError } from "../utils/ApiError";
import TryCacthError from "../utils/TryCacth";
import {
  createJobSchema,
  updateJobSchema,
  UpdateJobType,
} from "../zodValidations/jobZodSchema";
import JobApplicationModel from "../models/application.model";

export interface CustomRequest<T = any> extends Request {
  user?: {
    id: string;
    role: "user" | "recruiter";
  };
  body: T;
}

export const createJob = TryCacthError(
  async (req: CustomRequest<typeof createJobSchema._input>, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;

    if (!userId || !role) {
      throw new ApiError(401, "Unauthorized user.");
    }

    if (role !== "recruiter") {
      throw new ApiError(403, "Only recruiters can post jobs.");
    }

    const parsed = createJobSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map(
        (i) => `${i.path.join(".")}: ${i.message}`
      );
      throw new ApiError(400, "Invalid input", errors);
    }

    const {
      Category,
      Degree,
      Experience,
      jobDescription,
      jobTitle,
      jobType,
      status,
      experienceRequired,
      skillsRequired,
      salaryRange,
      location,
      ProfessionalSkills,
      KeyResponsibilities,
    } = parsed.data;

    const createdJob = await JobModel.create({
      recruiter: userId,
      jobTitle,
      jobDescription,
      jobType,
      status,
      experienceRequired,
      skillsRequired,
      salaryRange,
      location,
      ProfessionalSkills,
      KeyResponsibilities,
      Degree,
      Category,
    });

    return res.status(201).json({
      success: true,
      message: "Job created successfully.",
      data: createdJob,
    });
  }
);

export const updateJob = TryCacthError(
  async (req: CustomRequest<UpdateJobType>, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;
    const jobId = req.params.jobId;

    if (!userId || !role) {
      throw new ApiError(401, "Unauthorized user.");
    }

    if (role !== "recruiter") {
      throw new ApiError(403, "Only recruiters can update jobs.");
    }

    const parsed = updateJobSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map(
        (i) => `${i.path.join(".")}: ${i.message}`
      );
      throw new ApiError(400, "Invalid input", errors);
    }

    const job = await JobModel.findById(jobId);
    if (!job) {
      throw new ApiError(404, "Job not found.");
    }

    if (job.recruiter.toString() !== userId) {
      throw new ApiError(403, "You are not allowed to update this job.");
    }

    const updatedJob = await JobModel.findByIdAndUpdate(jobId, parsed.data, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Job updated successfully.",
      data: updatedJob,
    });
  }
);

export const deleteJob = TryCacthError(
  async (req: CustomRequest<UpdateJobType>, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;
    const jobId = req.params.jobId;

    if (!userId || !role) {
      throw new ApiError(401, "Unauthorized user.");
    }

    if (role !== "recruiter") {
      throw new ApiError(403, "Only recruiters can update jobs.");
    }

    const job = await JobModel.findById(jobId);
    if (!job) {
      throw new ApiError(404, "Job not found.");
    }

    if (job.recruiter.toString() !== userId) {
      throw new ApiError(403, "You are not allowed to update this job.");
    }

    const deletedJob = await JobModel.findByIdAndDelete(job);

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully.",
      data: deletedJob,
    });
  }
);

export const getAllJobs = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const jobs = await JobModel.find();
    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully.",
      data: jobs,
    });
  }
);

export const getJobDetails = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const jobId = req.params.jobId;

    const job = await JobModel.findById(jobId);
    if (!job) {
      throw new ApiError(404, "Job not found.");
    }

    return res.status(200).json({
      success: true,
      message: "Job details fetched successfully.",
      data: job,
    });
  }
);

export const applyJob = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;
    const jobId = req.params.jobId;

    if (!userId || !role) {
      throw new ApiError(403, "You are not allowed to apply to jobs.");
    }

    const allowedRoles = ["employee"];
    if (!allowedRoles.includes(role)) {
      throw new ApiError(403, "You are not allowed to apply to jobs.");
    }

    const job = await JobModel.findById(jobId);
    if (!job) {
      throw new ApiError(404, "Job not found.");
    }

    const alreadyApplied = await JobApplicationModel.findOne({
      job: jobId,
      user: userId,
    });
    if (alreadyApplied) {
      throw new ApiError(400, "You have already applied to this job.");
    }

    await JobApplicationModel.create({
      job: jobId,
      user: userId,
      resumeUsed: req.body?.resumeUsed || "",
    });

    job.appliedUsers = job.appliedUsers || [];
    job.appliedUsers.push(userId as any);
    await job.save();

    return res.status(200).json({
      success: true,
      message: "Job applied successfully.",
    });
  }
);

export const getMyJobs = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;

    if (!userId || !role) {
      throw new ApiError(401, "Unauthorized user.");
    }

    const jobs = await JobModel.find({ recruiter: userId });

    return res.status(200).json({
      success: true,
      message: "My jobs fetched successfully.",
      data: jobs,
    });
  }
);
