import { z } from "zod";

export const updateUserProfileSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").optional(),

  avatar: z.string().url("Invalid avatar URL").optional(),

  education: z.string().optional(),
  experience: z.string().optional(),

  title: z.string().optional(),

  nationality: z.string().optional(),
  biography: z.string().max(1000, "Biography must be under 1000 characters").optional(),

  socialLinks: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string().url("Invalid social link URL"),
      }),
    )
    .optional(),
});

export type UpdateUserProfileInput = z.infer<typeof updateUserProfileSchema>;