import { BiSolidUser } from "react-icons/bi";
import { UseFormRegisterReturn } from "react-hook-form";

interface GuestSelectorProps {
  maxGuests: number;
  register?: UseFormRegisterReturn;
}

/**
 * GuestSelector component that allows users to select the number of guests from a dropdown.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.maxGuests - The maximum number of guests that can be selected.
 * @param [props.register] - Optional `react-hook-form` register object to bind the selector to form state.
 *
 * @returns JSX element representing the guest selector.
 */
export default function GuestSelector({ maxGuests, register }: GuestSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="guests" className="text-m font-medium">
        Guests <span className="text-sm text-neutral-600">(Max {maxGuests})</span>
      </label>

      <div className="relative">
        <select
          id="guests"
          {...register}
          className="w-full rounded-md border-r-8 border-r-transparent py-2.5 pl-8 pr-2 text-m ring-1 ring-slate-500"
        >
          {Array.from({ length: maxGuests }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <BiSolidUser size={20} className="absolute left-2 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
