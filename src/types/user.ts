import { Media } from "@/types/media";
import { Venue } from "@/types/venue";
import { Booking } from "@/types/booking";
import { ApiResponse } from "@/types/api";

export interface User {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
  venueManager?: boolean;
  accessToken?: string;
}

export interface Profile extends Omit<User, "accessToken"> {
  venues?: Venue[];
  bookings?: Booking[];
}

export type AuthResponse = ApiResponse<User>;
export type ProfileResponse = ApiResponse<Profile>;
