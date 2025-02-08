import { twMerge } from "tailwind-merge";

interface SkeletonProps {
  className: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  const base = "animate-shimmer rounded-md bg-skeleton";
  const classes = twMerge(base, className);

  return <div className={classes}></div>;
}
