import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import menu from "../../assets/icon-vertical-ellipsis.svg";
import StatusSelect from "./StatusSelect";
import { Tasks, BoardData } from "../../utilities/interface";
import SubtaskItem from "./SubtaskItem";
import { updateTaskStatus } from "../../utilities/immerFunctions";

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
  const [showMenu, setShowMenu] = useState(false);

  let changeTaskStatus = (newStatus: string) => {
    let result = updateTaskStatus(boardData, boardIndex, columnIndex, taskIndex, newStatus);
    setBoardData(result);
  };

  return (
    <>
      <div id="modal-background" onClick={() => setVisible(!visible)}></div>
      <div id="task-view-card" className={`modal ${themeContext?.theme}`}>
        <div className="task-header">
          <h1 className="heading-l">{task.title}</h1>
          <div className="options-wrapper">
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
                <button className="edit-task body-m">Edit Task</button>
                <button className="delete-task body-m">Delete Task</button>
              </div>
            ) : null}
          </div>
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
    </>
  );
}
