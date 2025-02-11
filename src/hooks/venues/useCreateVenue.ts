import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenueResponse } from "@/types/venue";
import { VenueFormData } from "@/schemas/venueSchema";

/**
 * Custom hook that creates a new venue via the API.
 * Invalidates the venues query and navigates to the newly created venue on success.
 *
 * @returns An object containing:
 * - `createVenue`: The mutation function to trigger the venue creation.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
export const useCreateVenue = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation<VenueResponse, Error, VenueFormData>({
    mutationFn: (venueData) => apiRequest("/holidaze/venues", "POST", venueData),
    onSuccess: ({ data: venue }) => {
      queryClient.invalidateQueries({ queryKey: ["venues"] });
      navigate(`/venue/${venue.id}`);
    },
  });

  return { createVenue: mutate, isPending, error };
};
