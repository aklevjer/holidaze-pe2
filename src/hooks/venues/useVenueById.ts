import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenueResponse } from "@/types/venue";

/**
 * Custom hook that retrieves a single venue from the API.
 *
 * @param venueId - The ID of the venue to retrieve.
 * @returns An object containing:
 * - `venue`: The venue data (or `undefined` if not found).
 * - `isLoading`: Indicating whether the request is in progress.
 * - `isError`: Indicating whether the request failed.
 */
export const useVenueById = (venueId: string) => {
  const { data, isLoading, isError } = useQuery<VenueResponse, Error>({
    queryKey: ["venue", venueId],
    queryFn: () => apiRequest(`/holidaze/venues/${venueId}?_owner=true&_bookings=true`, "GET"),
  });

  return { venue: data?.data, isLoading, isError };
};
