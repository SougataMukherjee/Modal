import { useState } from "react";
import Modal from "./ShowModal";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Click</button>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}
