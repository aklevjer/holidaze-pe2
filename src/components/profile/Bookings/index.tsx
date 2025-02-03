import { Link } from "react-router-dom";
import { useProfileBookings } from "@/hooks/profile/useProfileBookings";
import { filterUpcomingBookings } from "@/utils/bookings/filterBookings";
import { formatDateNumeric } from "@/utils/bookings/formatDate";

import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";

export default function Bookings({ profileName }: { profileName: string }) {
  const { bookings, isLoading, isError } = useProfileBookings(profileName);
  const filteredBookings = filterUpcomingBookings(bookings);

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return <Alert type="error" message="Oops! Failed to load bookings. Please try again later." />;
  }

  if (filteredBookings.length === 0) {
    return <Alert type="info" message="You don't have any bookings yet." />;
  }

  return (
    <table className="w-full text-left">
      <thead className="sr-only md:not-sr-only">
        <tr className="border-b border-neutral-300 py-2 md:grid md:grid-cols-table">
          <th className="font-semibold">Dates</th>
          <th className="font-semibold">Venue</th>
          <th className="font-semibold">Guests</th>
          <th className="font-semibold">Actions</th>
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
              <Button variant="danger" className="text-sm">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
