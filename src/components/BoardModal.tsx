import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function BoardModal() {
  const theme = useContext(ThemeContext);

  return (
    <div id="board-modal" className={theme}>
      <h1 className="heading-l">Add New Board</h1>
      <div className="container">
        <label htmlFor="title">Board Name</label>
        <input type="text" name="title" placeholder="e.g. Web Design" />
      </div>
      <div className="container">
        <label htmlFor="subtask">Subtasks</label>
        <input type="text" name="subtask" placeholder="e.g. Todo" />
        <input type="text" name="subtask" placeholder="e.g. Doing" />
      </div>
      <button className="btn-s btn-secondary">+ Add New Column</button>
      <button className="btn-s btn-primary">Create New Board</button>
    </div>
  );
}
