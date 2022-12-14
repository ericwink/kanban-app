import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import StatusSelect from "../views/StatusSelect";
import { Tasks } from "../../utilities/interface";
import deleteIcon from "../../assets/icon-cross.svg";
import useMakeTask from "../hooks/useMakeTask";

type Props = {
  showAddTask: boolean;
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  colNames: string[];
  addNewTask: (newTask: Tasks) => void;
};

export default function TaskModal({ showAddTask, setShowAddTask, colNames, addNewTask }: Props) {
  const theme = useContext(ThemeContext);
  let { newTask, newSubtask, editNewTask, editSubtask, removeSubtask, addSubtask, changeTaskStatus } = useMakeTask(colNames);

  // send subtask to immer function sheet to add to board
  let createTask = () => {
    let finalTask = { ...newTask };
    let finalSubtask = [...newSubtask];
    finalTask.subtasks = finalSubtask;
    addNewTask(finalTask);
    setShowAddTask(!showAddTask);
  };

  return (
    <>
      <div
        id="modal-background"
        onClick={() => {
          setShowAddTask(!showAddTask);
        }}
      ></div>
      <div id="task-modal" className={`modal ${theme?.theme}`}>
        <h1 className="heading-l">Add New Task</h1>
        <div className="container">
          <label htmlFor="title">Title</label>
          <input onChange={e => editNewTask(e)} value={newTask.title} type="text" name="title" placeholder="e.g. Take coffee break" />
        </div>
        <div className="container">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={e => editNewTask(e)}
            value={newTask.description}
            name="description"
            id="de scription"
            cols={30}
            rows={5}
            placeholder="e.g. It's always good to take a break. This 15 minutes break will recharge the batteries a little."
          ></textarea>
        </div>
        <div className="container">
          <label htmlFor="subtask">Subtasks</label>
          {newSubtask.map((each, index) => {
            return (
              <div className="new-subtask-wrapper">
                <input onChange={e => editSubtask(index, e.target.value)} value={each.title} type="text" name="subtask" placeholder="e.g. Make coffee" />
                <button onClick={() => removeSubtask(index)} className="delete-subtask">
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={addSubtask} className="btn-s btn-secondary">
          + Add New Subtask
        </button>
        <StatusSelect colNames={colNames} changeTaskStatus={changeTaskStatus} />
        <button onClick={createTask} className="btn-s btn-primary">
          Create Task
        </button>
      </div>
    </>
  );
}
