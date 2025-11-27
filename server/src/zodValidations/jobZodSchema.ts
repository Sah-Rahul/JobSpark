import { z } from "zod";
import { JobCategories } from "../config/constant";

const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const createJobSchema = z.object({
  jobTitle: z.string().trim().min(1),
  jobDescription: z.string().min(1),

  skillsRequired: z.array(z.string()).optional(),

  salaryRange: z
    .object({
      min: z.number().optional(),
      max: z.number().optional(),
    })
    .optional(),

  jobType: z
    .enum(["Full-time", "Part-time", "Remote", "Internship"])
    .default("Full-time"),

  experienceRequired: z.string().optional(),
  location: z.string().optional(),

  status: z.enum(["Active", "Closed"]).default("Active"),

  KeyResponsibilities: z.array(z.string()).default([]),
  ProfessionalSkills: z.array(z.string()).default([]),

  Degree: z.string().default(""),
  Experience: z.string().default(""),

  Category: z.enum(JobCategories).default("Other"),
});

export type JobType = z.infer<typeof createJobSchema>;

export const updateJobSchema = z.object({
  company: objectId.optional(),

  jobTitle: z.string().trim().min(1).optional(),
  jobDescription: z.string().min(1).optional(),

  skillsRequired: z.array(z.string()).optional(),

  salaryRange: z
    .object({
      min: z.number().optional(),
      max: z.number().optional(),
    })
    .optional(),

  jobType: z
    .enum(["Full-time", "Part-time", "Remote", "Internship"])
    .default("Full-time"),

  experienceRequired: z.string().optional(),
  location: z.string().optional(),

  status: z.enum(["Active", "Closed"]).default("Active"),

  KeyResponsibilities: z.array(z.string()).default([]),
  ProfessionalSkills: z.array(z.string()).default([]),

  Degree: z.string().default(""),
  Experience: z.string().default(""),

  Category: z.enum(JobCategories).default("Other"),
});

export type UpdateJobType = z.infer<typeof updateJobSchema>;
