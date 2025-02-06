import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { ProfileResponse } from "@/types/user";

export const useProfileByName = (profileName: string) => {
  const { data, isLoading, isError } = useQuery<ProfileResponse, Error>({
    queryKey: ["profile", profileName],
    queryFn: () => apiRequest(`/holidaze/profiles/${profileName}`, "GET"),
  });

  return { profile: data?.data, isLoading, isError };
};
