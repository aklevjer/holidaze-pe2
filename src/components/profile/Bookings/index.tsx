import { useState } from "react";
import { Link } from "react-router-dom";
import { useProfileBookings } from "@/hooks/profile/useProfileBookings";
import { useDeleteBooking } from "@/hooks/bookings/useDeleteBooking";
import { filterUpcomingBookings } from "@/utils/bookings/filterBookings";
import { formatDateNumeric } from "@/utils/bookings/formatDate";

import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import DeleteModal from "@/components/modals/DeleteModal";

export default function Bookings({ profileName }: { profileName: string }) {
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);
  const { bookings, isLoading, isError } = useProfileBookings(profileName);
  const { deleteBooking, isPending } = useDeleteBooking(profileName);

  const filteredBookings = filterUpcomingBookings(bookings);

  const handleDeleteBooking = () => {
    if (selectedBooking) {
      deleteBooking(selectedBooking);
      setSelectedBooking(null);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return <Alert type="error" message="Oops! Failed to load bookings. Please try again later." />;
  }

  if (filteredBookings.length === 0) {
    return <Alert type="info" message="You don't have any upcoming bookings." />;
  }

  return (
    <>
      <table className="w-full text-left">
        <thead className="sr-only md:not-sr-only">
          <tr className="border-b border-neutral-300 md:grid md:grid-cols-table">
            <th className="p-2 font-semibold">Dates</th>
            <th className="p-2 font-semibold">Venue</th>
            <th className="p-2 font-semibold">Guests</th>
            <th className="p-2 font-semibold">Actions</th>
          </tr>
        </thead>

        <tbody className="space-y-6 md:space-y-0">
          {filteredBookings.map(({ id, dateFrom, dateTo, guests, venue }) => (
            <tr
              key={id}
              className="block divide-y divide-neutral-300 border-y border-neutral-300 odd:bg-neutral-50 md:grid md:grid-cols-table md:items-center md:divide-none md:border-t-0"
            >
              <td
                data-label="Dates"
                className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
              >
                {formatDateNumeric(dateFrom)} - {formatDateNumeric(dateTo)}
              </td>

              <td
                data-label="Venue"
                className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
              >
                <Link to={`/venue/${venue?.id}`} className="max-w-52 truncate hover:underline">
                  {venue?.name}
                </Link>
              </td>

              <td
                data-label="Guests"
                className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
              >
                {guests}
              </td>

              <td
                data-label="Actions"
                className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
              >
                <Button variant="danger" onClick={() => setSelectedBooking(id)} className="text-sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteModal
        modalOpen={!!selectedBooking}
        closeModal={() => setSelectedBooking(null)}
        onDelete={handleDeleteBooking}
        isPending={isPending}
        deleteType="booking"
      />
    </>
  );
}
