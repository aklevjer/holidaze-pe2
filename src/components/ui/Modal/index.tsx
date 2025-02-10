import { Dialog, DialogBackdrop, DialogPanel, CloseButton } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { BiX } from "react-icons/bi";

interface ModalProps {
  modalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
}

/**
 * Modal component that displays a modal with content and close functionality.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.modalOpen - Whether the modal is currently open.
 * @param props.closeModal - Function to close the modal when invoked.
 * @param props.children - The content to be rendered inside the modal.
 * @param [props.className] - Additional CSS classes to style the modal (optional).
 *
 * @returns JSX element representing the modal.
 */
export default function Modal({ modalOpen, closeModal, children, className }: ModalProps) {
  return (
    <Dialog open={modalOpen} onClose={closeModal}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/70 transition ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 grid place-items-center overflow-y-auto p-4">
        <DialogPanel
          as="section"
          transition
          className={twMerge(
            "relative w-full rounded-md bg-white px-4 py-6 transition ease-in-out data-[closed]:opacity-0",
            className,
          )}
        >
          <CloseButton aria-label="Close modal" className="absolute right-4 top-4">
            <BiX size={30} />
          </CloseButton>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
