import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { VenueLocation } from "@/types/venue";
import { NominatimResponse } from "@/types/geocoding";

/**
 * Custom hook that fetches geolocation data for a venue using city and/or country via the Nominatim API.
 *
 * @param VenueLocation - The location data of the venue.
 * @returns An object containing:
 * - `geoLocation`: The geolocation data (or `null` if not found).
 * - `isLoading`: Indicating whether the request is in progress.
 * - `isError`: Indicating whether the request failed.
 */
export const useVenueLocation = (location: VenueLocation) => {
  const queryKey = ["geolocation", location.city, location.country];

  const queryFn = async (): Promise<NominatimResponse[]> => {
    const response = await axios.get<NominatimResponse[]>(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          city: location.city,
          country: location.country,
          format: "json",
          limit: 1,
        },
      },
    );

    return response.data;
  };

  const { data, isLoading, isError } = useQuery<NominatimResponse[], Error>({
    queryKey,
    queryFn,
    enabled: !(location.lat || location.lng) && Boolean(location.city || location.country),
  });

  return { geoLocation: data?.[0] || null, isLoading, isError };
};
