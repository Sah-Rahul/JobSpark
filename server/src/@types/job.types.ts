import { Document, Types } from "mongoose";
import { JobRole, JobType, JobLevel, SalaryType, JobStatus } from "../enum/job.enum";

export interface IJob extends Document {
  jobTitle: string;
  jobTags: string[];
  jobRole: JobRole;

  company: Types.ObjectId;
  createdBy: Types.ObjectId;

  minSalary: number;
  maxSalary: number;
  salaryType: SalaryType;

  education?: string;
  experience: number;
  jobType: JobType;
  jobLevel: JobLevel;

  vacancy: number;
  expirationDate: Date;
  slug: string;

  jobDescription: string;
  jobResponsibilities: string;

  status: JobStatus;

  createdAt: Date;
  updatedAt: Date;
}