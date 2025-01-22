import { Media } from "@/types/media";
import { Venue } from "@/types/venue";

export interface BookingCustomer {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
}

export interface Booking {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  venue?: Venue;
  customer?: BookingCustomer;
}
