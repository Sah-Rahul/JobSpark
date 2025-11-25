import { z } from "zod";

export const objectId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const SavedjobZodSchema = z.object({
  user: objectId,
  job: objectId,
});

export type SavedjobZodSchemaType = z.infer<typeof SavedjobZodSchema>;
