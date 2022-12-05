import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

type Props = {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: string;
  title: string;
  removeTask: () => void;
};

export default function DeleteModal({ setDeleteModal, item, title, removeTask }: Props) {
  const theme = useContext(ThemeContext);

  return (
    // add 'modal' to class list
    <>
      <div id="modal-background" onClick={() => setDeleteModal(false)}></div>
      <div id="delete-modal" className={`modal ${theme}`}>
        <h1 className="heading-l">{`Delete this ${item}?`}</h1>
        <p className="body-m">{`Are you sure you want to delete the '${title}' ${item}? This action will remove all ${item === "task" ? "task data and subtasks" : "columns and tasks"} and cannot be reversed`}</p>
        <button className="btn-l btn-destructive" onClick={removeTask}>
          Delete
        </button>
        <button className="btn-l btn-secondary" onClick={() => setDeleteModal(false)}>
          Cancel
        </button>
      </div>
    </>
  );
}

//heading to be dynamic based on what we are deleting
//information in body should update
//background to cancel
//cancel button will cancel
//delete button proceeds with action

//primary function should return true/false to delete function to proceed with operation
