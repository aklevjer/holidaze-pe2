import { BiCheckCircle } from "react-icons/bi";
import { Booking } from "@/types/booking";
import { formatDateNumeric } from "@/utils/bookings/formatDate";
import { getTotalPrice } from "@/utils/bookings/getTotalPrice";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

interface SuccessModalProps {
  modalOpen: boolean;
  closeModal: () => void;
  booking: Booking | null;
}

/**
 * SuccessModal component that displays a success message and booking details when a booking is completed.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.modalOpen - Whether the modal is currently open.
 * @param props.closeModal - Function to close the modal when invoked.
 * @param props.booking - The booking details to display in the success message, or `null` when no data is being displayed.
 *
 * @returns JSX element representing the success modal.
 */
export default function SuccessModal({ modalOpen, closeModal, booking }: SuccessModalProps) {
  return (
    <Modal modalOpen={modalOpen} closeModal={closeModal} className="max-w-md text-center md:px-8">
      <BiCheckCircle size={64} className="mx-auto mb-2 text-green-700" />
      <h2 className="mb-2 text-xl font-semibold capitalize">Booking confirmed</h2>
      <p className="mb-4">Thank you for booking with Holidaze!</p>

      {booking && (
        <dl className="mb-6 rounded-md border border-neutral-300 p-4 text-left">
          <div className="flex gap-1">
            <dt className="font-semibold capitalize">Venue:</dt>
            <dd className="line-clamp-1 overflow-wrap-anywhere">{booking.venue?.name}</dd>
          </div>

          <div className="flex gap-1">
            <dt className="font-semibold capitalize">Check-in:</dt>
            <dd>{formatDateNumeric(booking.dateFrom)}</dd>
          </div>

          <div className="flex gap-1">
            <dt className="font-semibold capitalize">Check-out:</dt>
            <dd>{formatDateNumeric(booking.dateTo)}</dd>
          </div>

          <div className="flex gap-1">
            <dt className="font-semibold capitalize">Guests:</dt>
            <dd>{booking.guests}</dd>
          </div>

          <div className="flex gap-1">
            <dt className="font-semibold capitalize">Total price:</dt>
            <dd>${getTotalPrice(booking.dateFrom, booking.dateTo, booking.venue?.price ?? 0)}</dd>
          </div>
        </dl>
      )}

      <Button variant="primary" onClick={closeModal}>
        Done
      </Button>
    </Modal>
  );
}
