import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Profile } from "@/types/user";
import { ProfileFormData, profileSchema } from "@/schemas/profileSchema";

import TextInput from "@/components/ui/TextInput";
import Checkbox from "@/components/ui/Checkbox";
import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

interface ProfileFormProps {
  onSubmit: (profileData: ProfileFormData) => void;
  onCancel: () => void;
  isPending: boolean;
  error: Error | null;
  profile: Profile;
}

export default function ProfileForm({
  onSubmit,
  onCancel,
  isPending,
  error,
  profile,
}: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      ...profile,
      avatar: {
        ...profile.avatar,
        alt: `Avatar for ${profile.name}`,
      },
      banner: {
        ...profile.banner,
        alt: `Banner for ${profile.name}`,
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold capitalize">Edit profile</h2>

      {error && <Alert type="error" message={error.message} />}

      <TextInput
        id="avatarUrl"
        type="url"
        label="Avatar URL"
        placeholder="https://example.com/avatar.jpg"
        maxLength={300}
        register={register("avatar.url")}
        error={errors.avatar?.url}
      />

      <TextInput
        id="bannerUrl"
        type="url"
        label="Banner URL"
        placeholder="https://example.com/banner.jpg"
        maxLength={300}
        register={register("banner.url")}
        error={errors.banner?.url}
      />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-m font-medium capitalize">Venue manager</span>
          <Tooltip text="Allows you to create and manage rental venues." />
        </div>

        <Checkbox
          id="venueManager"
          label="Venue Manager Role"
          register={register("venueManager")}
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>

        <Button variant="primary" type="submit" isLoading={isPending}>
          Save
        </Button>
      </div>
    </form>
  );
}
