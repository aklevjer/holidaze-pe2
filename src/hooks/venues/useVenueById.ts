import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenueResponse } from "@/types/venue";

export const useVenueById = (venueId: string) => {
  const { data, isLoading, isError } = useQuery<VenueResponse, Error>({
    queryKey: ["venue", venueId],
    queryFn: () => apiRequest(`/holidaze/venues/${venueId}?_owner=true&_bookings=true`, "GET"),
  });

  return { venue: data?.data, isLoading, isError };
};
