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

/**
 * ProfileModal component that displays a form for updating the user's profile details.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.modalOpen - Whether the modal is currently open.
 * @param props.closeModal - Function to close the modal when invoked.
 * @param props.onSubmit - Function to handle form submission with profile data.
 * @param props.isPending - Whether the update request is in progress.
 * @param props.error - An error object if the update request fails, otherwise `null`.
 * @param props.profile - The user's profile data, used to prefill the form.
 *
 * @returns JSX element representing the profile modal.
 */
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
