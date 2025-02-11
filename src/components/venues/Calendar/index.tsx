import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { BiCalendar } from "react-icons/bi";
import DatePicker from "react-datepicker";

import { Booking } from "@/types/booking";
import { sortBookingsByDate } from "@/utils/bookings/sortBookings";
import { formatBookings } from "@/utils/bookings/formatBookings";
import { isDateAvailable } from "@/utils/bookings/isDateAvailable";

interface CalendarProps {
  dateFrom: Date | null;
  dateTo: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
  bookings: Booking[];
  error?: { message?: string };
}

/**
 * Calendar component that provides a date range picker using `react-datepicker`.
 * It allows users to select check-in and check-out dates while ensuring unavailable dates are disabled.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.dateFrom - The selected start date.
 * @param props.dateTo - The selected end date.
 * @param props.onChange - Callback function triggered when the date range changes.
 * @param props.bookings - List of existing bookings to determine unavailable dates.
 * @param [props.error] - Optional error object containing a message to display.
 *
 * @returns JSX element representing the date picker calendar.
 */
export default function Calendar({ dateFrom, dateTo, onChange, bookings, error }: CalendarProps) {
  const sortedBookings = useMemo(() => sortBookingsByDate(bookings), [bookings]);
  const formattedBookings = useMemo(() => formatBookings(sortedBookings), [sortedBookings]);

  return (
    <div className="space-y-2">
      <label htmlFor="dates" className="text-m font-medium">
        Dates
      </label>

      <div className="relative">
        <DatePicker
          id="dates"
          minDate={new Date()}
          startDate={dateFrom}
          endDate={dateTo}
          onChange={onChange}
          calendarStartDay={1}
          dateFormat="MMM dd, yyyy"
          placeholderText="Select Dates"
          autoComplete="off"
          selectsRange
          isClearable
          excludeDateIntervals={formattedBookings}
          filterDate={(date) => isDateAvailable(date, formattedBookings, dateFrom)}
          wrapperClassName="w-full"
          className={twMerge(
            "w-full cursor-pointer rounded-md border border-slate-500 p-2 pl-8 text-m caret-transparent outline-none placeholder:text-teal-900 focus:ring-1 focus:ring-teal-900",
            error && "border-red-700 focus:ring-red-700",
          )}
        />
        <BiCalendar size={20} className="absolute left-2 top-1/2 -translate-y-1/2" />
      </div>

      {error && (
        <p role="alert" className="text-m font-medium text-red-700">
          {error.message}
        </p>
      )}
    </div>
  );
}
