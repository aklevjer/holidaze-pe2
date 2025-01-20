import { Media } from "@/types/media";

export interface User {
  name: string;
  email: string;
  bio?: string;
  avatar?: Media;
  banner?: Media;
  venueManager?: boolean;
  accessToken?: string;
}
