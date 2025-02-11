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

/**
 * Custom hook that retrieves a list of venues with optional search, sorting, and pagination.
 *
 * @param params - The params passed to the hook.
 * @param params.query - The search query for filtering venues (optional).
 * @param params.sort - The field to sort the venues by.
 * @param params.sortOrder - The sort order (`asc` or `desc`).
 * @param params.page - The page number for pagination.
 * @param params.limit - The number of venues to retrieve per page.
 *
 * @returns An object containing:
 * - `venues`: A list of venues (empty if none found).
 * - `meta`: Pagination metadata (if available).
 * - `isLoading`: Indicates whether the request is in progress.
 * - `isError`: Indicates whether the request failed.
 */
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
