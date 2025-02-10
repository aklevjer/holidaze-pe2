import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenuesResponse } from "@/types/venue";

/**
 * Custom hook that retrieves a profile's venues from the API.
 *
 * @param profileName - The name of the profile to fetch venues for.
 * @returns An object containing:
 * - `venues`: An array of venues (empty if none are found).
 * - `isLoading`: Indicating whether the request is in progress.
 * - `isError`: Indicating whether the request failed.
 */
export const useProfileVenues = (profileName: string) => {
  const { data, isLoading, isError } = useQuery<VenuesResponse, Error>({
    queryKey: ["profileVenues", profileName],
    queryFn: () => apiRequest(`/holidaze/profiles/${profileName}/venues?_bookings=true`, "GET"),
  });

  return { venues: data?.data || [], isLoading, isError };
};
