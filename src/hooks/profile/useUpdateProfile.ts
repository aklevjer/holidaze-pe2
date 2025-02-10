import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { ProfileResponse } from "@/types/user";
import { ProfileFormData } from "@/schemas/profileSchema";

/**
 * Custom hook that updates a profile via the API.
 * Invalidates the profile query on success to refresh the data.
 *
 * @param profileName - The name of the profile to update.
 * @returns An object containing:
 * - `updateProfile`: The mutation function to trigger the profile update.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
export const useUpdateProfile = (profileName: string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation<ProfileResponse, Error, ProfileFormData>({
    mutationFn: (profileData) =>
      apiRequest(`/holidaze/profiles/${profileName}`, "PUT", profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", profileName] });
    },
  });

  return { updateProfile: mutate, isPending, error };
};
