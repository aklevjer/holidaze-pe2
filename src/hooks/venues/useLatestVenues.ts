import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenuesResponse } from "@/types/venue";

export const useLatestVenues = () => {
  const { data, isLoading, isError } = useQuery<VenuesResponse, Error>({
    queryKey: ["latestVenues"],
    queryFn: () => apiRequest("/holidaze/venues?limit=4&sort=created&sortOrder=desc", "GET"),
  });

  return { venues: data?.data || [], isLoading, isError };
};
