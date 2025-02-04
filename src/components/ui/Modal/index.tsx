import { Dialog, DialogBackdrop, DialogPanel, CloseButton } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { BiX } from "react-icons/bi";

interface ModalProps {
  modalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ modalOpen, closeModal, children, className }: ModalProps) {
  return (
    <Dialog open={modalOpen} onClose={closeModal}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/70 transition ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 grid place-items-center p-4">
        <DialogPanel
          as="section"
          transition
          className={twMerge(
            "relative w-full rounded-md bg-white px-4 py-6 transition ease-in-out data-[closed]:opacity-0",
            className,
          )}
        >
          <CloseButton className="absolute right-4 top-4">
            <BiX size={30} />
          </CloseButton>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
