import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/links";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";

/**
 * Footer component that displays navigation links, social media icons, and copyright information.
 *
 * @component
 * @returns JSX element representing the footer.
 */
export default function Footer() {
  return (
    <footer className="bg-teal-900 text-neutral-100">
      <div className="container grid place-items-center gap-5 py-6 md:grid-cols-2 md:place-items-start">
        <Logo />

        <nav>
          <ul className="flex flex-col items-center gap-4 md:flex-row">
            {NAV_LINKS.MAIN.map(({ path, label }) => (
              <li key={label}>
                <NavLink to={path}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-4 md:justify-self-end md:[grid-area:1/2]">
          {SOCIAL_LINKS.map(({ label, footerIcon: Icon }) => (
            <li key={label}>
              <a href="#" aria-label={label} className="transition-colors hover:text-amber-400">
                <Icon size={30} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center md:justify-self-end">
          &copy; {new Date().getFullYear()} Holidaze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
