import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import StatusSelect from "./StatusSelect";
import { Tasks, BoardData } from "../../utilities/interface";
import SubtaskItem from "./SubtaskItem";
import { updateTaskStatus, deleteTask } from "../../utilities/immerFunctions";
import DeleteModal from "../DeleteModal";
import TaskModal from "../create-edit/TaskModal";
import { editTaskImmer } from "../../utilities/immerFunctions";
import EditDeleteBox from "../create-edit/EditDeleteBox";

type Props = {
  task: Tasks;
  completed: number;
  count: number;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  colNames: string[];
  taskIndex: number;
  boardIndex: number;
  columnIndex: number;
  setBoardData: React.Dispatch<React.SetStateAction<BoardData>>;
  boardData: BoardData;
};

export default function TaskViewCard({ task, completed, count, visible, setVisible, colNames, taskIndex, boardIndex, columnIndex, setBoardData, boardData }: Props) {
  const themeContext = useContext(ThemeContext);

  let changeTaskStatus = (newStatus: string) => {
    let result = updateTaskStatus(boardData, boardIndex, columnIndex, taskIndex, newStatus);
    setBoardData(result);
  };

  let removeTask = () => {
    let result = deleteTask(boardData, boardIndex, columnIndex, taskIndex);
    setBoardData(result);
  };

  //delete board modal state and functions
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  //edit task function
  let editTask = (editedTask: Tasks) => {
    //compare new version of task to previous - status. True = unchanged
    const statusUnchanged = task.status === editedTask.status;
    let result = editTaskImmer(boardData, boardIndex, columnIndex, taskIndex, editedTask, statusUnchanged);
    setBoardData(result);
    // console.log(result);
  };

  return (
    <>
      <div id="modal-background" onClick={() => setVisible(!visible)}></div>
      <div id="task-view-card" className={`modal ${themeContext?.theme}`}>
        <div className="task-header">
          <h1 className="heading-l">{task.title}</h1>
          <EditDeleteBox setDeleteModal={setDeleteModal} setEditModal={setEditModal} type="Task" />
        </div>
        <h2 className="body-m">{task.description}</h2>
        <div className="subtasks-container">
          <h3 className="heading-s">{`Subtasks (${completed} of ${count})`}</h3>
          {task.subtasks?.map((subtask, index) => {
            return <SubtaskItem subtask={subtask} boardData={boardData} setBoardData={setBoardData} subtaskIndex={index} boardIndex={boardIndex} columnIndex={columnIndex} taskIndex={taskIndex} />;
          })}
        </div>
        <StatusSelect task={task} colNames={colNames} changeTaskStatus={changeTaskStatus} />
      </div>
      {deleteModal ? <DeleteModal setDeleteModal={setDeleteModal} item={"task"} title={task.title} removeItem={removeTask} /> : null}
      {editModal ? <TaskModal setShowModal={setEditModal} colNames={colNames} returnTask={editTask} task={task} /> : null}
    </>
  );
}
