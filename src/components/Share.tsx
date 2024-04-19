import { Share } from "./Icons";
import { useState } from "preact/hooks";
import { Facebook } from "./Icons";
import Modal from "./Modal";

export default () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <button onClick={() => setModalOpen(true)}>
      <Share className="h-8 w-auto text-white" />
      <Modal
        openModal={modalOpen}
        closeModal={() => setModalOpen(false)}
        className="p-4 rounded"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-brand font-bold">
            Comparte la estación!
          </h2>
          <div className="flex gap-2">
            <Facebook className="h-8 w-auto text-black" />
          </div>
        </div>
      </Modal>
    </button>
  );
};
