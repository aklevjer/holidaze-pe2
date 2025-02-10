import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { BookingResponse } from "@/types/booking";
import { BookingFormData } from "@/schemas/bookingSchema";

/**
 * Custom hook that creates a new booking via the API.
 * Invalidates the venue query on success to refresh the data.
 *
 * @returns An object containing:
 * - `createBooking`: The mutation function to trigger the booking creation.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
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
