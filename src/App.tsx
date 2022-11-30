import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Boardview from "./components/views/Boardview";
import Sidebar from "./components/navbars/Sidebar";
import Navbar from "./components/navbars/Navbar";
import data from "./data.json";
import { updateTaskStatus } from "./utilities/immerFunctions";

function App() {
  const themeContext = useContext(ThemeContext);
  const [visible, setVisible] = useState("");
  const [boardNames, setBoardNames] = useState([""]);
  const [sidebar, setSidebar] = useState(true);
  const [boardData, setBoardData] = useState(data);

  useEffect(() => {
    const boardArray = boardData.boards.map(board => board.name);
    setBoardNames([...boardArray]);
  }, []);

  return (
    <div className={`App ${themeContext?.theme}`}>
      <Sidebar setVisible={setVisible} visible={visible} boardNames={boardNames} sidebar={sidebar} setSidebar={setSidebar} />
      <Navbar visible={visible} boardNames={boardNames} setVisible={setVisible} sidebar={sidebar} />
      {boardData.boards.map((board, index) => {
        return <>{visible === board.name ? <Boardview boardIndex={index} board={board} key={board.name} sidebar={sidebar} setBoardData={setBoardData} boardData={boardData} /> : null}</>;
      })}
    </div>
  );
}

export default App;
