import { useState } from "react";
import Modal from "../components/modal/Modal";

function ModalPage() {
  const [toggleModal, setToggleModal] = useState(false);

  const closeModal = () => {
    setToggleModal(false);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {toggleModal && (
        <div
          className="fixed inset-0 bg-transparent flex justify-center items-center z-10"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Modal closeModal={closeModal} />
          </div>
        </div>
      )}
      <button onClick={() => setToggleModal(true)}>Open Modal</button>
    </div>
  );
}
export default ModalPage;
