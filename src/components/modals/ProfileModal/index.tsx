import { Profile } from "@/types/user";
import { ProfileFormData } from "@/schemas/profileSchema";
import Modal from "@/components/ui/Modal";
import ProfileForm from "@/components/forms/ProfileForm";

interface ProfileModalProps {
  modalOpen: boolean;
  closeModal: () => void;
  onSubmit: (profileData: ProfileFormData) => void;
  isPending: boolean;
  error: Error | null;
  profile: Profile;
}

export default function ProfileModal({
  modalOpen,
  closeModal,
  onSubmit,
  isPending,
  error,
  profile,
}: ProfileModalProps) {
  return (
    <Modal modalOpen={modalOpen} closeModal={closeModal} className="max-w-xl md:px-8">
      <ProfileForm
        onSubmit={onSubmit}
        onCancel={closeModal}
        isPending={isPending}
        error={error}
        profile={profile}
      />
    </Modal>
  );
}
