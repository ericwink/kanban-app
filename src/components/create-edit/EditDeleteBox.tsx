import { useState, useContext } from "react";
import menu from "../../assets/icon-vertical-ellipsis.svg";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

export default function EditDeleteBox({ setDeleteModal, setEditModal, type }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const themeContext = useContext(ThemeContext);

  return (
    <div id="edit-delete-box" className="options-wrapper">
      <button
        className="edit-delete"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <img src={menu} alt="menu" />
      </button>
      {showMenu ? (
        <div className={`edit-delete-wrapper ${themeContext?.theme}`}>
          <button onClick={() => setEditModal(true)} className="edit-task body-m">
            {`Edit ${type}`}
          </button>
          <button
            onClick={() => {
              setDeleteModal(true);
            }}
            className="delete-task body-m"
          >
            {`Delete ${type}`}
          </button>
        </div>
      ) : null}
    </div>
  );
}