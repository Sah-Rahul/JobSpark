import { z } from "zod";

export const CompanySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  description: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url("Invalid website URL").optional(),
  companySize: z.string().optional(),
  logo: z.string().optional(),
  banner: z.string().optional(),
  companyBenefits: z.string().optional(),
  companyVision: z.string().optional(),
  organizationType: z.string().optional(),
  phoneNumber: z.string().optional(),
});

export type CompanyInput = z.infer<typeof CompanySchema>;
