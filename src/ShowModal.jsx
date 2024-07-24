import { useEffect, useRef } from "react";
import "./App.css";
export default function ShowModal({ closeModal }) {
  const bodyRef = useRef(document.body);
  useEffect(() => {
    const bodyElement = bodyRef.current;
    bodyElement.style.overflowY = "hidden"; //when modal true background overflow hidden
    return () => {
      bodyElement.style.overflowY = "scroll"; //when modal false background overflow scroll
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h1>Heading</h1>
        <p>this is a modal , pls click close</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </>
  );
}
