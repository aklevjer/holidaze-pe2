import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenueResponse } from "@/types/venue";
import { VenueFormData } from "@/schemas/venueSchema";

/**
 * Custom hook that updates a venue via the API.
 * Invalidates the venue query and navigates to the updated venue on success.
 *
 * @param venueId - The ID of the venue to update.
 * @returns An object containing:
 * - `updateVenue`: The mutation function to trigger the venue update.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
export const useUpdateVenue = (venueId: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation<VenueResponse, Error, VenueFormData>({
    mutationFn: (venueData) => apiRequest(`/holidaze/venues/${venueId}`, "PUT", venueData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["venue", venueId] });
      navigate(`/venue/${venueId}`);
    },
  });

  return { updateVenue: mutate, isPending, error };
};
