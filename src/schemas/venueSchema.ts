import { z } from "zod";

export const venueSchema = z.object({
  name: z.string().min(1, "Please enter a venue name"),
  description: z.string().min(1, "Please enter a description"),
  price: z.coerce
    .number()
    .min(1, "Price must be at least 1")
    .max(10000, "Price cannot exceed 10000"),
  maxGuests: z.coerce
    .number()
    .min(1, "Guests must be at least 1")
    .max(100, "Guests cannot exceed 100"),
  rating: z.coerce
    .number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating cannot exceed 5")
    .default(0),
  meta: z.object({
    wifi: z.boolean(),
    parking: z.boolean(),
    breakfast: z.boolean(),
    pets: z.boolean(),
  }),
  location: z.object({
    address: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? null : val)),
    zip: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? null : val)),
    city: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? null : val)),
    country: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? null : val)),
    continent: z.string().nullable().optional(),
    lat: z.number().min(-90).max(90).nullable().optional(),
    lng: z.number().min(-180).max(180).nullable().optional(),
  }),
  media: z.array(
    z.object({
      url: z.string().url("Please enter a valid URL"),
      alt: z.string(),
    }),
  ),
});

export type VenueFormData = z.infer<typeof venueSchema>;
