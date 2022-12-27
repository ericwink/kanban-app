import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

type Props = {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: string;
  title: string | undefined;
  removeItem: () => void;
};

export default function DeleteModal({ setDeleteModal, item, title, removeItem }: Props) {
  const theme = useContext(ThemeContext);

  const deleteAndClose = () => {
    removeItem();
    setDeleteModal(false);
  };

  return (
    <>
      <div id="modal-background" onClick={() => setDeleteModal(false)}></div>
      <div id="delete-modal" className={`modal ${theme}`}>
        <h1 className="heading-l">{`Delete this ${item}?`}</h1>
        <p className="body-m">{`Are you sure you want to delete the '${title}' ${item}? This action will remove all ${item === "task" ? "task data and subtasks" : "columns and tasks"} and cannot be reversed`}</p>
        <button className="btn-l btn-destructive" onClick={deleteAndClose}>
          Delete
        </button>
        <button className="btn-l btn-secondary" onClick={() => setDeleteModal(false)}>
          Cancel
        </button>
      </div>
    </>
  );
}
