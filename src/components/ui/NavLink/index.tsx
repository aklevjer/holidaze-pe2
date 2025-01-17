import { NavLink as RouterNavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  asDark?: boolean;
  className?: string;
}

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
