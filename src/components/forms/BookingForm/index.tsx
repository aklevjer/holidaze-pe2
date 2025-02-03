import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store/authStore";
import { Booking } from "@/types/booking";
import { BookingFormData, bookingSchema } from "@/schemas/bookingSchema";
import { formatDateToUTC } from "@/utils/bookings/formatDate";

import Alert from "@/components/ui/Alert";
import Calendar from "@/components/venues/Calendar";
import GuestSelector from "@/components/venues/GuestSelector";
import PriceSummary from "@/components/venues/PriceSummary";
import Button from "@/components/ui/Button";

interface BookingFormProps {
  onSubmit: (data: BookingFormData, resetCallback: () => void) => void;
  venueId: string;
  isPending: boolean;
  error: Error | null;
  bookings: Booking[];
  price: number;
  maxGuests: number;
}

export default function BookingForm({
  onSubmit,
  venueId,
  isPending,
  error,
  bookings,
  price,
  maxGuests,
}: BookingFormProps) {
  const user = useAuthStore((state) => state.user);
  const [dates, setDates] = useState<[Date | null, Date | null]>([null, null]);
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      venueId,
      dateFrom: "",
      dateTo: "",
    },
  });

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    const shouldValidate = !!start && !!end;

    setDates(dates);
    setValue("dateFrom", start ? formatDateToUTC(start) : "", { shouldValidate });
    setValue("dateTo", end ? formatDateToUTC(end) : "", { shouldValidate });
  };

  const handleBooking = (bookingData: BookingFormData) => {
    onSubmit(bookingData, () => {
      setDates([null, null]);
      reset();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleBooking)}
      className="space-y-4 rounded-md border border-neutral-300 p-6"
    >
      <h2 className="text-lg font-semibold capitalize">Book venue</h2>

      {error && <Alert type="error" message={error.message} />}

      <Calendar
        dateFrom={dates[0]}
        dateTo={dates[1]}
        onChange={handleDateChange}
        bookings={bookings}
        error={errors.dateFrom || errors.dateTo}
      />

      <GuestSelector maxGuests={maxGuests} register={register("guests")} />
      <PriceSummary price={price} dates={dates} />

      {user ? (
        <Button variant="primary" type="submit" isLoading={isPending} className="w-full">
          Book now
        </Button>
      ) : (
        <Button variant="primary" path="/login" className="inline-block w-full text-center">
          Login to book
        </Button>
      )}
    </form>
  );
}
