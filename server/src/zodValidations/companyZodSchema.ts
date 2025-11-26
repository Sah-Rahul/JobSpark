import { z } from "zod";

export const CompanyZodSchema = z.object({
  companyName: z.string().min(1, "Company name is required.").trim(),

  logo: z.string().optional(),
  banner: z.string().optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  website: z.string().optional(),
  companySize: z.string().optional(),
});

export type CompanyZodSchemaType = z.infer<typeof CompanyZodSchema>;
