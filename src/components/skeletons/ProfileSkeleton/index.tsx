import Skeleton from "@/components/ui/Skeleton";

/**
 * ProfileSkeleton component that displays a loading skeleton for a profile page.
 * Includes placeholders for a banner, avatar, and username, with optional actions for owners.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.isOwner - Whether the logged-in user is the owner of the profile.
 *
 * @returns JSX element representing the profile skeleton.
 */
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
