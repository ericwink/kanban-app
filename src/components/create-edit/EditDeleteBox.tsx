import { useState, useContext } from "react";
import menu from "../../assets/icon-vertical-ellipsis.svg";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  active?: string;
}

export default function EditDeleteBox({ setDeleteModal, setEditModal, type, active = "true" }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const themeContext = useContext(ThemeContext);

  return (
    <div id="edit-delete-box" className="options-wrapper">
      <button
        className="edit-delete"
        onClick={() => {
          if (active) {
            setShowMenu(!showMenu);
          }
        }}
      >
        <img src={menu} alt="menu" />
      </button>
      {showMenu ? (
        <div className={`edit-delete-wrapper ${themeContext?.theme}`}>
          <button
            onClick={() => {
              setEditModal(true);
              setShowMenu(false);
            }}
            className="edit-task body-m"
          >
            {`Edit ${type}`}
          </button>
          <button
            onClick={() => {
              setDeleteModal(true);
              setShowMenu(false);
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
