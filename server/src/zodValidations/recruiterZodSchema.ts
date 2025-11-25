import { z } from "zod";
export const objectId = z.string()
.regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");
export const RecruiterZodSchema = z.object({
  user: objectId,
  company: objectId,
  position: z.string().optional(),
  permissions: z.array(z.string()).default(["post_job", "manage_applications"]),
});

export type RecruiterZodSchemaType = z.infer<typeof RecruiterZodSchema>;
