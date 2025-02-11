import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";

/**
 * Custom hook that deletes a venue via the API.
 * Invalidates the profile venues query on success to refresh the data.
 *
 * @param profileName - The name of the user's profile used to invalidate the venues query.
 * @returns An object containing:
 * - `deleteVenue`: The mutation function to trigger venue deletion.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
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
