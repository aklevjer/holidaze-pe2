import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { ProfileResponse } from "@/types/user";

/**
 * Custom hook that retrieves a profile's data from the API.
 *
 * @param profileName - The name of the profile to fetch.
 * @returns An object containing:
 * - `profile`: The profile data (or `undefined` if not found).
 * - `isLoading`: Indicates if the request is in progress.
 * - `isError`: Indicates if the request failed.
 */
export const useProfileByName = (profileName: string) => {
  const { data, isLoading, isError } = useQuery<ProfileResponse, Error>({
    queryKey: ["profile", profileName],
    queryFn: () => apiRequest(`/holidaze/profiles/${profileName}`, "GET"),
  });

  return { profile: data?.data, isLoading, isError };
};
