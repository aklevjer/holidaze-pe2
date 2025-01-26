import { Media } from "@/types/media";
import { Booking } from "@/types/booking";
import { ApiResponse } from "@/types/api";

export interface VenueMeta {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
}

export interface VenueLocation {
  address: string | null;
  city: string | null;
  zip: string | null;
  country: string | null;
  continent: string | null;
  lat: number | null;
  lng: number | null;
}

export interface VenueOwner {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
}

export interface Venue {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta: VenueMeta;
  location: VenueLocation;
  owner?: VenueOwner;
  bookings?: Booking[];
}

export type VenuesResponse = ApiResponse<Venue[]>;
export type VenueResponse = ApiResponse<Venue>;
