import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState, ChangeEvent } from "react";
import StatusSelect from "../views/StatusSelect";
import { Tasks, Subtask, BoardData } from "../../utilities/interface";
import deleteIcon from "../../assets/icon-cross.svg";

type Props = {
  showAddTask: boolean;
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  colNames: string[];
  addNewTask: (newTask: Tasks) => void;
};

export default function TaskModal({ showAddTask, setShowAddTask, colNames, addNewTask }: Props) {
  const theme = useContext(ThemeContext);

  // edit new task data in modal
  const [newTask, setNewTask] = useState<Tasks>({
    title: "",
    description: "",
    status: colNames[0],
  });

  let editNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    let copy = { ...newTask, [name]: value };
    setNewTask(copy);
  };

  let changeTaskStatus = (newStatus: string) => {
    let copy = { ...newTask, status: newStatus };
    setNewTask(copy);
  };

  //edit subtask data in modal
  const [newSubtask, setNewSubtask] = useState<Subtask[]>([]);

  let addSubtask = () => {
    let subtaskCopy = [...newSubtask, { title: "", isCompleted: false }];
    console.log(subtaskCopy);
    setNewSubtask(subtaskCopy);
  };

  let removeSubtask = (index: number) => {
    let copy = [...newSubtask];
    copy.splice(index, 1);
    setNewSubtask(copy);
  };

  let editSubtask = (index: number, value: string) => {
    let copy = [...newSubtask];
    copy[index].title = value;
    setNewSubtask(copy);
  };

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
            cols="30"
            rows="5"
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
