import { Link } from "react-router-dom";
import { Venue } from "@/types/venue";
import { formatDateNumeric } from "@/utils/bookings/formatDate";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

interface BookingsModalProps {
  modalOpen: boolean;
  closeModal: () => void;
  venue: Venue | null;
}

/**
 * BookingsModal component that displays bookings for a venue a user owns.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.modalOpen - Whether the modal is currently open.
 * @param props.closeModal - Function to close the modal when invoked.
 * @param props.venue - The venue to display bookings for, or `null` when no data is being displayed.
 *
 * @returns JSX element representing the bookings modal.
 */
export default function BookingsModal({ modalOpen, closeModal, venue }: BookingsModalProps) {
  return (
    <Modal modalOpen={modalOpen} closeModal={closeModal} className="max-w-2xl md:px-8">
      <h2 className="mr-12 text-xl font-semibold">
        Bookings For: <span className="inline-block">{venue?.name}</span>
      </h2>

      {venue?.bookings && venue.bookings.length > 0 ? (
        <table className="my-6 w-full">
          <thead className="sr-only md:not-sr-only">
            <tr className="border-b border-neutral-300 text-left md:grid md:grid-cols-table-sm">
              <th className="p-2 font-semibold">Dates</th>
              <th className="p-2 font-semibold">Customer</th>
              <th className="p-2 font-semibold">Guests</th>
            </tr>
          </thead>

          <tbody className="space-y-6 md:space-y-0">
            {venue.bookings.map(({ id, dateFrom, dateTo, guests, customer }) => (
              <tr
                key={id}
                className="block divide-y divide-neutral-300 border-y border-neutral-300 odd:bg-neutral-50 md:grid md:grid-cols-table-sm md:divide-none md:border-t-0"
              >
                <td
                  data-label="Dates"
                  className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
                >
                  {formatDateNumeric(dateFrom)} - {formatDateNumeric(dateTo)}
                </td>

                <td
                  data-label="Customer"
                  className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
                >
                  <Link
                    to={`/profile/${customer?.name}`}
                    onClick={closeModal}
                    className="max-w-36 truncate hover:underline md:max-w-none"
                  >
                    {customer?.name}
                  </Link>
                </td>

                <td
                  data-label="Guests"
                  className="flex items-center justify-between p-2 before:font-semibold before:[content:attr(data-label)] md:py-4 md:before:content-none"
                >
                  {guests}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Alert type="info" message="This venue has no upcoming bookings." className="my-4" />
      )}

      <Button variant="secondary" onClick={closeModal} className="ml-auto block">
        Close
      </Button>
    </Modal>
  );
}
