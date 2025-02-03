import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { BookingsResponse } from "@/types/booking";

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
