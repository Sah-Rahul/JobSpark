import { z } from "zod";

export const JobSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),

  jobType: z.string().min(1, "Job type is required"),

  experienceRequired: z.string().min(1, "Experience is required"),

  location: z.string().min(1, "Location is required"),

  salaryRange: z.object({
    min: z
      .number()
      .min(0, "Minimum salary required"),
    max: z
      .number()
      .min(0, "Maximum salary required"),
  }).refine((d) => d.max >= d.min, {
    message: "Salary max must be >= min",
    path: ["max"],
  }),

  Degree: z.string().min(1, "Degree is required"),

  Category: z.string().min(1, "Category is required"),

  jobDescription: z.string().min(10, "Description must be at least 10 characters"),

  skillsRequired: z
    .array(z.string().min(1))
    .nonempty("At least one skill is required"),

  KeyResponsibilities: z
    .array(z.string().min(1))
    .nonempty("At least one responsibility is required"),
});

export type JobInput = z.infer<typeof JobSchema>;
