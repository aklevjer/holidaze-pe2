import Skeleton from "@/components/ui/Skeleton";

export default function ProfileSkeleton({ isOwner }: { isOwner: boolean }) {
  return (
    <div>
      <Skeleton className="h-52" />
      <div className="flex flex-col items-center sm:ml-6 sm:flex-row sm:items-start">
        <Skeleton className="-mt-10 size-28 flex-shrink-0 rounded-full border-2 border-white" />

        <div className="m-4 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <Skeleton className="h-9 w-1/2 sm:w-1/4" />
          {isOwner && <Skeleton className="h-10 w-1/2 sm:w-1/4" />}
        </div>
      </div>
    </div>
  );
}
