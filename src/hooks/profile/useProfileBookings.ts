import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { BookingsResponse } from "@/types/booking";

/**
 * Custom hook that retrieves a profile's bookings from the API.
 *
 * @param profileName - The name of the profile to fetch bookings for.
 * @returns An object containing:
 * - `bookings`: An array of bookings (empty if none are found).
 * - `isLoading`: Indicating whether the request is in progress.
 * - `isError`: Indicating whether the request failed.
 */
export const useProfileBookings = (profileName: string) => {
  const { data, isLoading, isError } = useQuery<BookingsResponse, Error>({
    queryKey: ["profileBookings", profileName],
    queryFn: () =>
      apiRequest(
        `/holidaze/profiles/${profileName}/bookings?_venue=true&sort=dateFrom&sortOrder=asc`,
        "GET",
      ),
  });

  return { bookings: data?.data || [], isLoading, isError };
};
