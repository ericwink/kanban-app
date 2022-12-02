import { Board } from "../../utilities/interface";
import Column from "./Column";
import { BoardData, Tasks } from "../../utilities/interface";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { addColumn } from "../../utilities/immerFunctions";
import TaskModal from "../create-edit/TaskModal";
import { addTask } from "../../utilities/immerFunctions";

type Props = {
  board: Board;
  sidebar: boolean;
  boardIndex: number;
  setBoardData: React.Dispatch<React.SetStateAction<BoardData>>;
  boardData: BoardData;
  showAddTask: boolean;
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Boardview({ board, sidebar, boardIndex, setBoardData, boardData, showAddTask, setShowAddTask }: Props) {
  //collect an array of column names for status selection component
  const colNames = board.columns?.map(col => col.name);
  const themeContext = useContext(ThemeContext);

  let newColumn = () => {
    let result = addColumn(boardData, 0, "Test Column");
    setBoardData(result);
  };

  let addNewTask = (newTask: Tasks) => {
    let result = addTask(boardData, boardIndex, newTask);
    setBoardData(result);
  };

  return (
    <div id="board-view" data-sidebar={sidebar ? "show" : "hidden"}>
      {board.columns?.map((col, index) => {
        return <Column boardIndex={boardIndex} columnIndex={index} column={col} key={col.name} colNames={colNames} setBoardData={setBoardData} boardData={boardData} />;
      })}
      <button onClick={newColumn} className={`heading-xl ${themeContext?.theme}`}>
        + New column
      </button>
      {showAddTask ? <TaskModal showAddTask={showAddTask} setShowAddTask={setShowAddTask} colNames={colNames} addNewTask={addNewTask} /> : null}
    </div>
  );
}
