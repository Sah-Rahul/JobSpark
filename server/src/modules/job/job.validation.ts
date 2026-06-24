import { z } from "zod";
import { JobType, JobLevel, SalaryType, JobStatus } from "../../enum/job.enum";

export const jobSchema = z
  .object({
    jobTitle: z
      .string()
      .trim()
      .min(3, "Job title must be at least 3 characters")
      .max(150, "Job title must be at most 150 characters"),

    jobTags: z.array(z.string().trim()).default([]),

    minSalary: z.number().min(0, "Minimum salary cannot be negative"),
    maxSalary: z.number().min(0, "Maximum salary cannot be negative"),

    salaryType: z.enum(SalaryType, {
      message: "Invalid salary type",
    }),

    education: z.string().trim().optional(),

    experience: z.number().min(0, "Experience cannot be negative"),

    jobType: z.enum(JobType, {
      message: "Invalid job type",
    }),

    jobLevel: z.enum(JobLevel, {
      message: "Invalid job level",
    }),

    vacancy: z.number().int().min(1, "At least 1 vacancy required"),

    expirationDate: z.coerce.date().refine((date) => date > new Date(), {
      message: "Expiration date must be in the future",
    }),

    jobDescription: z
      .string()
      .trim()
      .min(20, "Job description must be at least 20 characters"),

    jobResponsibilities: z
      .string()
      .trim()
      .min(20, "Job responsibilities must be at least 20 characters"),

    status: z.enum(JobStatus).default(JobStatus.DRAFT),
  })
  .refine((data) => data.maxSalary >= data.minSalary, {
    message: "Maximum salary must be greater than or equal to minimum salary",
    path: ["maxSalary"],
  });

export const updateJobSchema = jobSchema.partial();

export type JobSchemaType = z.infer<typeof jobSchema>;
export type UpdateJobSchemaType = z.infer<typeof updateJobSchema>;