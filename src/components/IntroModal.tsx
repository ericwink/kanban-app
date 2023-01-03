import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";

export default function IntroModal() {
  const theme = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(true);

  if (!showModal) return null;

  return (
    <>
      <div id="modal-background"></div>
      <div id="intro-modal" className={`modal ${theme?.theme}`}>
        <h1 className="heading-l">Kanban Demo</h1>
        <p className="body-m">This project's current state is to demonstrate functionality. There is no back-end, and local storage is not used, so changes will not persist between sessions.</p>
        <button className="btn-l btn-secondary" onClick={() => setShowModal(false)}>
          Okay, let me test!
        </button>
      </div>
    </>
  );
}
