import { z } from "zod";
import { OrganizationType, TeamSize } from "../../enum/company.enum";

export const companySchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be at most 100 characters"),

  companyAboutUs: z
    .string()
    .trim()
    .min(5, "About us must be at least 20 characters")
    .max(2000, "About us must be at most 2000 characters"),

  organizationType: z.enum(OrganizationType, {
    message: "Invalid organization type",
  }),

  industryType: z.string().trim().min(2, "Industry type is required"),

  teamSize: z.enum(TeamSize, {
    message: "Invalid team size",
  }),

  yearOfEstablishment: z.coerce
    .number()
    .int()
    .min(1800, "Year must be after 1800")
    .max(new Date().getFullYear(), "Year cannot be in the future"),

  companyWebsite: z
    .string()
    .trim()
    .url("Invalid website URL")
    .optional()
    .or(z.literal("")),

  companyVision: z
    .string()
    .trim()
    .max(1000, "Vision must be at most 1000 characters")
    .optional(),

  companySocialMedia: z
    .array(z.string().trim().url("Invalid social media URL"))
    .default([]),

  mapLocation: z.string().trim().optional(),

  phoneNumber: z
    .string()
    .trim()
    .min(7, "Invalid phone number")
    .max(15, "Invalid phone number")
    .regex(
      /^\+?[0-9\s-]+$/,
      "Phone number can only contain digits, spaces, + and -",
    ),

  email: z.string().trim().toLowerCase().email("Invalid email address"),
});

export const updateCompanySchema = companySchema.partial();

export type registerCompanyinput = z.infer<typeof companySchema>;
export type UpdateCompanyinput = z.infer<typeof updateCompanySchema>;
