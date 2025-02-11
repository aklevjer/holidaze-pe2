import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";

/**
 * Custom hook that deletes a booking via the API.
 * Invalidates the profile bookings query on success to refresh the data.
 *
 * @param profileName - The name of the user's profile used to invalidate the bookings query.
 * @returns An object containing:
 * - `deleteBooking`: The mutation function to trigger the deletion of a booking.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
export const useDeleteBooking = (profileName: string) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation<void, Error, string>({
    mutationFn: (bookingId: string) => apiRequest(`/holidaze/bookings/${bookingId}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profileBookings", profileName] });
    },
  });

  return { deleteBooking: mutate, isPending, error };
};
