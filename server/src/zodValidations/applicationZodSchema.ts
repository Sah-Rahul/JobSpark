import { z } from "zod";

export const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const ApplicationZodSchema = z.object({
  job: objectId,
  user: objectId,

  resumeUsed: z.string().optional(),

  status: z.enum(["Applied", "Shortlisted", "Rejected", "Selected"]).default("Applied"),
});

export type ApplicationZodSchemaType = z.infer<typeof ApplicationZodSchema>;
