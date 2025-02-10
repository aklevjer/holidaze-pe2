import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { BiLoaderAlt } from "react-icons/bi";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  type?: "button" | "submit";
  path?: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

/**
 * Button component that can be rendered as a link or a regular button based on the provided props.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.variant - The variant of button (primary, secondary, danger).
 * @param props.children - The content (text or elements) to display inside the button.
 * @param [props.type] - The type of the button, either for a regular button or submit (optional).
 * @param [props.path] - If provided, renders the button as a link, navigating to the specified URL.
 * @param [props.onClick] - The function to call when the button is clicked (optional).
 * @param [props.isLoading] - If `true`, a loading spinner is displayed inside the button (optional).
 * @param [props.className] - Additional CSS classes to style the button (optional).
 *
 * @returns JSX element representing the button.
 */
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
    danger: "bg-red-700 hover:bg-red-800",
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
