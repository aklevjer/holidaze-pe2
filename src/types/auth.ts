import { Media } from "@/types/media";
import { ApiResponse } from "@/types/api";

export interface User {
  name: string;
  email: string;
  bio?: string;
  avatar?: Media;
  banner?: Media;
  venueManager?: boolean;
  accessToken?: string;
}

export type AuthResponse = ApiResponse<User>;
