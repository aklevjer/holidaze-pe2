import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenuesResponse } from "@/types/venue";

export const useProfileVenues = (profileName: string) => {
  const { data, isLoading, isError } = useQuery<VenuesResponse, Error>({
    queryKey: ["profileVenues", profileName],
    queryFn: () => apiRequest(`/holidaze/profiles/${profileName}/venues`, "GET"),
  });

  return { venues: data?.data || [], isLoading, isError };
};
