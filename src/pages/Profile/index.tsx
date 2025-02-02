import { useParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useProfileByName } from "@/hooks/profile/useProfileByName";

import Alert from "@/components/ui/Alert";
import Overview from "@/components/profile/Overview";

export default function Profile() {
  const { name } = useParams();
  const user = useAuthStore((state) => state.user);

  const profileName = name || user?.name;
  const isOwner = profileName === user?.name;

  const { profile, isLoading, isError } = useProfileByName(String(profileName));

  if (isLoading) return <p>Loading..</p>;

  return (
    <section className="container mb-20 mt-12 space-y-10 overflow-wrap-anywhere">
      {isError && (
        <Alert type="error" message="Oops! Failed to load profile. Please try again later." />
      )}
      {profile && <Overview profile={profile} isOwner={isOwner} />}
    </section>
  );
}
