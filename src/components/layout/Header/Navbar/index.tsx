import { User } from "@/types/auth";
import { NAV_LINKS } from "@/constants/links";

import NavLink from "@/components/ui/NavLink";
import UserDropdown from "@/components/layout/Header/UserDropdown";

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
