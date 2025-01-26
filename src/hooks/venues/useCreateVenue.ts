import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { VenueResponse } from "@/types/venue";
import { VenueFormData } from "@/schemas/venueSchema";

export const useCreateVenue = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation<VenueResponse, Error, VenueFormData>({
    mutationFn: (venueData) => apiRequest("/holidaze/venues", "POST", venueData),
    onSuccess: ({ data: venue }) => {
      queryClient.invalidateQueries({ queryKey: ["venues"] });
      navigate(`/venue/${venue.id}`);
    },
  });

  return { createVenue: mutate, isPending, isError };
};
