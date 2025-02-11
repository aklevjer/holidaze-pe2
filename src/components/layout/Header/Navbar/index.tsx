import { User } from "@/types/user";
import { NAV_LINKS } from "@/constants/links";

import NavLink from "@/components/ui/NavLink";
import UserDropdown from "@/components/layout/Header/UserDropdown";

/**
 * Navbar component that displays the main navigation and user dropdown if logged in.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.user - The currently logged-in user or `null` if not logged in.
 *
 * @returns JSX element representing the navbar.
 */
export default function Navbar({ user }: { user: User | null }) {
  return (
    <div className="hidden bg-teal-900 md:block">
      <nav className="container flex h-14 items-center justify-between">
        <ul className="flex gap-6">
          {NAV_LINKS.MAIN.map(({ path, label }) => (
            <li key={label}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
        </ul>

        {user ? (
          <UserDropdown user={user} />
        ) : (
          <ul className="flex gap-6">
            {NAV_LINKS.AUTH.map(({ path, label }) => (
              <li key={label}>
                <NavLink to={path}>{label}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
