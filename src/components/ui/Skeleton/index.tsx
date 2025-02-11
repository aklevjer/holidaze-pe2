import { twMerge } from "tailwind-merge";

/**
 * Skeleton component that displays a loading skeleton with a shimmer effect.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.className - Additional CSS classes to customize the skeleton's appearance.
 *
 * @returns JSX element representing the loading skeleton.
 */
export default function Skeleton({ className }: { className: string }) {
  const base = "animate-shimmer rounded-md bg-skeleton";
  const classes = twMerge(base, className);

  return <div className={classes}></div>;
}
