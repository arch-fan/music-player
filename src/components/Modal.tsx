import type { FunctionalComponent } from "preact";
import type { HTMLAttributes } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";

interface Props extends HTMLAttributes<HTMLDialogElement> {
  openModal: boolean;
  closeModal: () => void;
}

const Modal: FunctionalComponent<Props> = ({
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
