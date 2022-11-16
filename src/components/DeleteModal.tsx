import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function DeleteModal() {
  const theme = useContext(ThemeContext);

  return (
    // add 'modal' to class list
    <div id="delete-modal" className={`${theme}`}>
      <h1 className="heading-l">Delete this board?</h1>
      <p className="body-m">Are you sure you want to delete the 'Platform Launch' board? This action will remove all columns and tasks and cannot be reversed</p>
      <button className="btn-l btn-destructive">Delete</button>
      <button className="btn-l btn-secondary">Cancel</button>
    </div>
  );
}
