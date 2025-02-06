import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";

export const useDeleteVenue = (profileName: string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation<void, Error, string>({
    mutationFn: (venueId: string) => apiRequest(`/holidaze/venues/${venueId}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profileVenues", profileName] });
    },
  });

  return { deleteVenue: mutate, isPending, error };
};
