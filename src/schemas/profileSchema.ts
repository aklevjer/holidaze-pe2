import { z } from "zod";
import { isImgUrlValid } from "@/utils/common/validation";

export const profileSchema = z.object({
  avatar: z.object({
    url: z
      .string()
      .refine(async (url) => await isImgUrlValid(url), "URL must be a valid image URL"),
    alt: z.string(),
  }),
  banner: z.object({
    url: z
      .string()
      .refine(async (url) => await isImgUrlValid(url), "URL must be a valid image URL"),
    alt: z.string(),
  }),
  venueManager: z.boolean(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
