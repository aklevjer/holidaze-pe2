import { useParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useProfileByName } from "@/hooks/profile/useProfileByName";

import Page from "@/components/layout/Page";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import Overview from "@/components/profile/Overview";
import Tabs from "@/components/profile/Tabs";
import Alert from "@/components/ui/Alert";

/**
 * Profile component that renders the Profile page, displaying user details and related information.
 * Fetches profile data and adapts based on whether it's the logged-in user's or another user's profile.
 *
 * @component
 * @returns JSX element representing the Profile page.
 */
export default function Profile() {
  const { name } = useParams();
  const user = useAuthStore((state) => state.user);

  const profileName = String(name || user?.name);
  const isOwner = profileName === user?.name;

  const { profile, isLoading, isError } = useProfileByName(profileName);

  return (
    <Page
      title={profileName}
      description="Explore Holidaze profiles, view venues, bookings, and more."
    >
      <section className="container mb-20 mt-12 space-y-10 overflow-wrap-anywhere">
        {isLoading && <ProfileSkeleton isOwner={isOwner} />}

        {isError && (
          <Alert type="error" message="Oops! Failed to load profile. Please try again later." />
        )}

        {profile && (
          <>
            <Overview profile={profile} isOwner={isOwner} />

            {isOwner || profile.venueManager ? (
              <Tabs profile={profile} isOwner={isOwner} />
            ) : (
              <Alert type="info" message="This user is not a venue manager." />
            )}
          </>
        )}
      </section>
    </Page>
  );
}
