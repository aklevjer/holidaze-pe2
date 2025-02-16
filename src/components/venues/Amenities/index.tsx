import { BiWifi, BiCar, BiRestaurant, BiBone } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { VenueMeta } from "@/types/venue";

/**
 * Amenities component that displays a list of venue amenities.
 * Unavailable amenities are visually indicated with a strikethrough and dimmed text.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.amenities - An object containing the venue's amenities availability.
 *
 * @returns JSX element representing the amenities.
 */
export default function Amenities({ amenities }: { amenities: VenueMeta }) {
  const { wifi, parking, breakfast, pets } = amenities;

  const amenityList = [
    {
      icon: BiWifi,
      label: "Free Wifi",
      available: wifi,
    },
    {
      icon: BiCar,
      label: "Free Parking",
      available: parking,
    },
    {
      icon: BiRestaurant,
      label: "Breakfast",
      available: breakfast,
    },
    {
      icon: BiBone,
      label: "Pets Allowed",
      available: pets,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Amenities</h2>
      <ul className="grid grid-cols-2 gap-4">
        {amenityList.map(({ icon: Icon, label, available }) => (
          <li
            key={label}
            className={twMerge(
              "flex items-center gap-2",
              !available && "text-neutral-500 line-through",
            )}
          >
            <Icon size={20} className="flex-shrink-0" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
