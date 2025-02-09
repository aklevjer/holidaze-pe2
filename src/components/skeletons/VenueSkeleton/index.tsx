import Skeleton from "@/components/ui/Skeleton";

export default function VenueSkeleton() {
  return (
    <>
      <Skeleton className="aspect-3/2 rounded-none md:aspect-5/2 md:rounded-md" />
      <div className="grid gap-10 px-4 md:grid-cols-venue md:justify-between md:px-0">
        <div className="space-y-10">
          <div>
            <Skeleton className="mb-2 h-9" />
            <Skeleton className="mb-2 h-6 w-1/3" />
            <Skeleton className="mb-4 h-6 w-1/5" />
            <Skeleton className="h-20" />
          </div>
          <Skeleton className="h-28 w-4/5" />
          <Skeleton className="h-72" />
        </div>

        <div className="space-y-6">
          <Skeleton className="h-20" />
          <Skeleton className="h-72" />
        </div>
      </div>
    </>
  );
}
