import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { BookingResponse } from "@/types/booking";
import { BookingFormData } from "@/schemas/bookingSchema";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation<BookingResponse, Error, BookingFormData>({
    mutationFn: (bookingData) => apiRequest("/holidaze/bookings", "POST", bookingData),
    onSuccess: (_, { venueId }) => {
      queryClient.invalidateQueries({ queryKey: ["venue", venueId] });
    },
  });

  return { createBooking: mutate, isPending, error };
};
