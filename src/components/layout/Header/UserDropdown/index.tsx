import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { BiChevronDown, BiUser, BiPlus, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { User } from "@/types/user";
import { DEFAULT_AVATAR_IMG } from "@/constants/images";

export default function UserDropdown({ user }: { user: User }) {
  const logout = useAuthStore((state) => state.logout);
  const { name, avatar, venueManager } = user;

  return (
    <Popover>
      <PopoverButton
        aria-label="User menu"
        className="group flex items-center gap-1 outline-none data-[focus]:rounded data-[focus]:outline-1 data-[focus]:outline-black md:data-[focus]:outline-white"
      >
        <img
          src={avatar?.url || DEFAULT_AVATAR_IMG}
          alt={avatar?.alt || `Avatar for ${name}`}
          onError={(e) => (e.currentTarget.src = DEFAULT_AVATAR_IMG)}
          className="size-9 rounded-full object-cover"
        />
        <BiChevronDown
          size={28}
          className="transition duration-100 group-hover:text-slate-500 group-data-[open]:rotate-180 md:text-neutral-100 md:group-hover:text-amber-400"
        />
      </PopoverButton>

      <PopoverPanel
        as="ul"
        anchor="bottom end"
        transition
        className="mt-1 w-48 rounded-md border border-neutral-300 bg-white shadow-elevated transition duration-100 ease-in-out data-[closed]:opacity-0"
      >
        {({ close }) => (
          <>
            <li>
              <Link
                to="/profile"
                onClick={() => close()}
                className="flex w-full items-center gap-2 p-3 leading-none text-neutral-600 outline-none transition-colors hover:bg-neutral-200 hover:text-teal-900 focus-visible:rounded focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-teal-900"
              >
                <BiUser />
                <span className="text-sm font-medium capitalize">Profile</span>
              </Link>
            </li>

            {venueManager && (
              <li>
                <Link
                  to="/venue/add"
                  onClick={() => close()}
                  className="flex w-full items-center gap-2 p-3 leading-none text-neutral-600 outline-none transition-colors hover:bg-neutral-200 hover:text-teal-900 focus-visible:rounded focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-teal-900"
                >
                  <BiPlus />
                  <span className="text-sm font-medium capitalize">Add venue</span>
                </Link>
              </li>
            )}

            <li>
              <button
                onClick={() => {
                  close();
                  logout();
                }}
                className="flex w-full items-center gap-2 p-3 leading-none text-neutral-600 outline-none transition-colors hover:bg-neutral-200 hover:text-teal-900 focus-visible:rounded focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-teal-900"
              >
                <BiLogOut />
                <span className="text-sm font-medium capitalize">Logout</span>
              </button>
            </li>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
}
