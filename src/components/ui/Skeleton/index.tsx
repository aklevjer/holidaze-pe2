import { twMerge } from "tailwind-merge";

export default function Skeleton({ className }: { className: string }) {
  const base = "animate-shimmer rounded-md bg-skeleton";
  const classes = twMerge(base, className);

  return <div className={classes}></div>;
}
