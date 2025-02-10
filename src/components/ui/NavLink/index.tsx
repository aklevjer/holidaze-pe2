import { NavLink as RouterNavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  asDark?: boolean;
  className?: string;
}

/**
 * NavLink component that renders a navigation link with customizable styles.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.to - The URL to navigate to.
 * @param props.children - The content (text or elements) to display inside the nav link.
 * @param [props.onClick] - The function to call when the nav link is clicked (optional).
 * @param [props.asDark] - Whether to display a dark version of the nav link (optional).
 * @param [props.className] - Additional CSS classes to style the nav link (optional).
 *
 * @returns JSX element representing the nav link.
 */
export default function NavLink({ to, children, onClick, asDark, className }: NavLinkProps) {
  const base = "font-medium transition-colors";

  const color = asDark
    ? "text-teal-900 hover:text-slate-500"
    : "text-neutral-100 hover:text-amber-400";

  const classes = twMerge(base, color, className);

  return (
    <RouterNavLink to={to} onClick={onClick} className={classes}>
      {children}
    </RouterNavLink>
  );
}
