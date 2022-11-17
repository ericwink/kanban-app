import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import StatusSelect from "../views/StatusSelect";

export default function TaskModal() {
  const theme = useContext(ThemeContext);

  return (
    <div id="task-modal" className={theme}>
      <h1 className="heading-l">Add New Task</h1>
      <div className="container">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="e.g. Take coffee break" />
      </div>
      <div className="container">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="de scription" cols="30" rows="5" placeholder="e.g. It's always good to take a break. This 15 minutes break will recharge the batteries a little."></textarea>
      </div>
      <div className="container">
        <label htmlFor="subtask">Subtasks</label>
        <input type="text" name="subtask" placeholder="e.g. Make coffee" />
        <input type="text" name="subtask" placeholder="e.g. Drink coffee & smile" />
      </div>
      <button className="btn-s btn-secondary">+ Add New Subtask</button>
      <StatusSelect />
      {/* need to pass in colNames prop */}
      <button className="btn-s btn-primary">Create Task</button>
    </div>
  );
}
