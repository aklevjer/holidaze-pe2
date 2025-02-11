import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

/**
 * Logo component that displays a logo with an icon and text, with an optional dark version.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param [props.asDark] - Whether to display a dark version of the logo (optional).
 *
 * @returns JSX element representing the logo.
 */
export default function Logo({ asDark }: { asDark?: boolean }) {
  const bgColor = asDark ? "fill-teal-900" : "fill-neutral-100";
  const iconColor = asDark ? "fill-neutral-100" : "fill-teal-900";
  const textColor = asDark ? "text-teal-900" : "text-neutral-100";

  return (
    <Link to="/" className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="3" className={bgColor} />
        <path
          d="M19 16.5H22L12 7.5L2 16.5H5L12 10.19L19 16.5ZM7 9.31V7.5H4V12L7 9.31Z"
          className={iconColor}
        />
      </svg>

      <span className={twMerge("text-lg font-bold", textColor)}>Holidaze</span>
    </Link>
  );
}
