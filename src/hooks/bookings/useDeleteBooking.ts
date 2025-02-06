import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";

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
