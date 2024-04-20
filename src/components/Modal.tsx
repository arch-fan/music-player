import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";

interface Props extends HTMLAttributes<HTMLDialogElement> {
  openModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({
  openModal,
  closeModal,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </dialog>
  );
};

export default Modal;
