import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { BiDotsHorizontalRounded, BiEdit, BiTrash } from "react-icons/bi";

export default function VenueDropdown({ venueId }: { venueId: string }) {
  return (
    <Popover>
      <PopoverButton
        aria-label="Venue menu"
        className="grid size-9 place-items-center rounded-md outline-none transition-colors hover:bg-neutral-200 data-[focus]:outline-1 data-[focus]:outline-black"
      >
        <BiDotsHorizontalRounded size={24} />
      </PopoverButton>

      <PopoverPanel
        as="ul"
        anchor="bottom end"
        transition
        className="mt-1 w-44 rounded-md border border-neutral-300 bg-white shadow-elevated transition duration-100 ease-in-out data-[closed]:opacity-0"
      >
        {({ close }) => (
          <>
            <li>
              <Link
                to={`/venue/${venueId}/edit`}
                onClick={() => close()}
                className="flex w-full items-center gap-2 p-3 leading-none text-neutral-600 outline-none transition-colors hover:bg-neutral-200 hover:text-teal-900 focus-visible:rounded focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-teal-900"
              >
                <BiEdit />
                <span className="text-sm font-medium capitalize">Edit venue</span>
              </Link>
            </li>

            <li>
              <button
                onClick={() => close()}
                className="flex w-full items-center gap-2 p-3 leading-none text-neutral-600 outline-none transition-colors hover:bg-neutral-200 hover:text-teal-900 focus-visible:rounded focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-teal-900"
              >
                <BiTrash />
                <span className="text-sm font-medium capitalize">Delete venue</span>
              </button>
            </li>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
}
