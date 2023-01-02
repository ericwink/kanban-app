import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Boardview from "./components/views/Boardview";
import Sidebar from "./components/navbars/Sidebar";
import Navbar from "./components/navbars/Navbar";
import data from "./data.json";
import BoardModal from "./components/create-edit/BoardModal";
import { Board } from "../src/utilities/interface";
import { addNewBoard, deleteBoardImmer, editBoardImmer } from "../src/utilities/immerFunctions";

function App() {
  const themeContext = useContext(ThemeContext);
  const [visible, setVisible] = useState("");
  const [boardNames, setBoardNames] = useState([""]);
  const [sidebar, setSidebar] = useState(true);
  const [boardData, setBoardData] = useState(data);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddBoard, setShowAddBoard] = useState(false);

  useEffect(() => {
    const boardArray = boardData.boards.map(board => board.name);
    setBoardNames([...boardArray]);
  }, [boardData]);

  const addBoard = (newBoard: Board) => {
    let result = addNewBoard(boardData, newBoard);
    setBoardData(result);
  };

  const deleteBoard = (boardName: string) => {
    const result = deleteBoardImmer(boardData, boardName);
    setBoardData(result);
  };

  const editBoard = (newBoard: Board) => {
    const result = editBoardImmer(boardData, newBoard, visible);
    setBoardData(result);
  };

  return (
    <div className={`App ${themeContext?.theme}`}>
      {showAddBoard ? <BoardModal boardNames={boardNames} setShowAddBoard={setShowAddBoard} addBoard={addBoard} /> : null}

      <Sidebar setVisible={setVisible} visible={visible} boardNames={boardNames} sidebar={sidebar} setSidebar={setSidebar} setShowAddBoard={setShowAddBoard} />

      <Navbar boardData={boardData} visible={visible} boardNames={boardNames} setVisible={setVisible} sidebar={sidebar} setShowAddTask={setShowAddTask} setShowAddBoard={setShowAddBoard} deleteBoard={deleteBoard} editBoard={editBoard} />

      {boardData.boards.map((board, index) => {
        if (visible === board.name) {
          return <Boardview boardIndex={index} board={board} key={board.name} sidebar={sidebar} setBoardData={setBoardData} boardData={boardData} showAddTask={showAddTask} setShowAddTask={setShowAddTask} />;
        }
      })}
    </div>
  );
}

export default App;
