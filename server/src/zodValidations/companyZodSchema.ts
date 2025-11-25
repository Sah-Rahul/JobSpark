import { z } from "zod";

export const CompanyZodSchema = z.object({
  companyName: z.string(),
  logo: z.string().optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  website: z.string().optional(),
  companySize: z.string().optional(),
});

export type CompanyZodSchemaType = z.infer<typeof CompanyZodSchema>;
