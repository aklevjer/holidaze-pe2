import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { ProfileResponse } from "@/types/user";
import { ProfileFormData } from "@/schemas/profileSchema";

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
