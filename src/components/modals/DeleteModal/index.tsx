import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

interface DeleteModalProps {
  modalOpen: boolean;
  closeModal: () => void;
  onDelete: () => void;
  isPending: boolean;
  deleteType: "booking" | "venue";
}

/**
 * DeleteModal component that prompts the user to confirm the deletion of a booking or venue.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.modalOpen - Whether the modal is currently open.
 * @param props.closeModal - Function to close the modal when invoked.
 * @param props.onDelete - Callback function to perform the delete action (either for booking or venue).
 * @param props.isPending - Whether the delete request is in progress.
 * @param props.deleteType - The type of item being deleted, either "booking" or "venue".
 *
 * @returns JSX element representing the delete modal.
 */
export default function DeleteModal({
  modalOpen,
  closeModal,
  onDelete,
  isPending,
  deleteType,
}: DeleteModalProps) {
  return (
    <Modal modalOpen={modalOpen} closeModal={closeModal} className="max-w-md md:px-6">
      <h2 className="mb-2 text-xl font-semibold capitalize">Delete {deleteType}</h2>
      <p className="mb-4">
        Are you sure you want to delete this {deleteType}? This action cannot be undone.
      </p>

      <div className="flex justify-end gap-4">
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>

        <Button variant="danger" onClick={onDelete} isLoading={isPending}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
