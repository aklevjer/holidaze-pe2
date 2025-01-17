import NavLink from "@/components/ui/NavLink";
import { NAV_LINKS } from "@/constants/links";

export default function Navbar() {
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

        <ul className="flex gap-6">
          {NAV_LINKS.AUTH.map(({ path, label }) => (
            <li key={label}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
