import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenuesResponse } from "@/types/venue";

interface UseVenuesParams {
  query?: string;
  sort: string;
  sortOrder: string;
  page: number;
  limit: number;
}

export const useVenues = ({ query, sort, sortOrder, page, limit }: UseVenuesParams) => {
  const queryKey = ["venues", { query, sort, sortOrder, page, limit }];

  const queryFn = async (): Promise<VenuesResponse> => {
    const endpoint = query ? "/holidaze/venues/search" : "/holidaze/venues";
    const queryParams = { q: query, sort, sortOrder, page, limit };
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(queryParams)) {
      if (value) params.append(key, value.toString());
    }

    return apiRequest(`${endpoint}?${params.toString()}`, "GET");
  };

  const { data, isFetching, isError } = useQuery<VenuesResponse, Error>({
    queryKey,
    queryFn,
  });

  return { venues: data?.data || [], meta: data?.meta, isLoading: isFetching, isError };
};
