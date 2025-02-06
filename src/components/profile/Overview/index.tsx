import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useUpdateProfile } from "@/hooks/profile/useUpdateProfile";
import { Profile } from "@/types/user";
import { ProfileFormData } from "@/schemas/profileSchema";
import { DEFAULT_BANNER_IMG, DEFAULT_AVATAR_IMG } from "@/constants/images";

import Button from "@/components/ui/Button";
import ProfileModal from "@/components/modals/ProfileModal";

interface OverviewProps {
  profile: Profile;
  isOwner: boolean;
}

export default function Overview({ profile, isOwner }: OverviewProps) {
  const { name, avatar, banner, venueManager } = profile;
  const [modalOpen, setModalOpen] = useState(false);

  const { user, login } = useAuthStore();
  const { updateProfile, isPending, error } = useUpdateProfile(name);

  const handleUpdateProfile = (profileData: ProfileFormData) => {
    updateProfile(profileData, {
      onSuccess: () => {
        if (user) {
          login({
            ...user,
            avatar: profileData.avatar,
            banner: profileData.banner,
            venueManager: profileData.venueManager,
          });
        }
        setModalOpen(false);
      },
    });
  };

  return (
    <>
      <div>
        <img
          src={banner?.url || DEFAULT_BANNER_IMG}
          alt={banner?.alt || `Banner for ${name}`}
          className="h-52 w-full rounded-md object-cover"
        />

        <div className="flex flex-col flex-wrap items-center sm:ml-6 sm:flex-row sm:items-start">
          <img
            src={avatar?.url || DEFAULT_AVATAR_IMG}
            alt={avatar?.alt || `Avatar for ${name}`}
            className="-mt-10 size-28 rounded-full border-2 border-white object-cover"
          />

          <div className="mx-3 mt-2 text-center sm:text-left">
            <h1 className="text-3xl font-semibold leading-snug">{name}</h1>
            {venueManager && (
              <span className="inline-block rounded-full border border-sky-100 bg-sky-50 px-2 py-1 text-xs font-medium capitalize text-teal-700">
                Venue manager
              </span>
            )}
          </div>

          {isOwner && (
            <div className="mt-4 flex flex-wrap items-start justify-center gap-4 sm:ms-auto">
              {venueManager && (
                <Button variant="primary" path="/venue/add">
                  Add venue
                </Button>
              )}

              <Button variant="secondary" onClick={() => setModalOpen(true)}>
                Edit profile
              </Button>
            </div>
          )}
        </div>
      </div>

      <ProfileModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        onSubmit={handleUpdateProfile}
        profile={profile}
        isPending={isPending}
        error={error}
      />
    </>
  );
}
