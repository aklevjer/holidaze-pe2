import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenueResponse } from "@/types/venue";
import { VenueFormData } from "@/schemas/venueSchema";

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
