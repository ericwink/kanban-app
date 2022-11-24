import { useContext, useEffect, useState } from "react";
import data from "./data.json";
import { ThemeContext } from "./context/ThemeContext";
import Boardview from "./components/views/Boardview";
import Sidebar from "./components/navbars/Sidebar";

function App() {
  const themeContext = useContext(ThemeContext);
  const [visible, setVisible] = useState("");
  const [boardNames, setBoardNames] = useState([""]);

  useEffect(() => {
    const boardArray = data.boards.map(board => board.name);
    setBoardNames([...boardArray]);
  }, []);

  return (
    <div className={`App ${themeContext?.theme}`}>
      <Sidebar setVisible={setVisible} visible={visible} boardNames={boardNames} />

      {data.boards.map(board => {
        return <>{visible === board.name ? <Boardview board={board} key={board.name} /> : null}</>;
      })}
    </div>
  );
}

export default App;
