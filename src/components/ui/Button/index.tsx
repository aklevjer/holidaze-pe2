import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  type?: "button" | "submit";
  path?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ variant, children, type, path, onClick, className }: ButtonProps) {
  const base = "rounded-md px-4 py-2 font-medium capitalize text-neutral-100 transition-colors";

  const variants = {
    primary: "bg-teal-700 hover:bg-teal-900",
    secondary: "bg-slate-500 hover:bg-slate-700",
  };

  const classes = twMerge(base, variants[variant], className);

  if (path) {
    return (
      <Link to={path} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
