import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { BiLoaderAlt } from "react-icons/bi";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  type?: "button" | "submit";
  path?: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

export default function Button({
  variant,
  children,
  type,
  path,
  onClick,
  isLoading,
  className,
}: ButtonProps) {
  const base =
    "relative rounded-md px-4 py-2 font-medium capitalize text-neutral-100 transition-colors";

  const variants = {
    primary: "bg-teal-700 hover:bg-teal-900",
    secondary: "bg-slate-500 hover:bg-slate-700",
  };

  const classes = twMerge(base, variants[variant], className);

  if (path) {
    return (
      <Link to={path} className={classes}>
        {isLoading && <BiLoaderAlt size={24} className="absolute inset-0 m-auto animate-spin" />}
        <span className={twMerge(isLoading && "invisible")}>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={isLoading} className={classes}>
      {isLoading && <BiLoaderAlt size={24} className="absolute inset-0 m-auto animate-spin" />}
      <span className={twMerge(isLoading && "invisible")}>{children}</span>
    </button>
  );
}
