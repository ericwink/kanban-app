import { useState, createContext } from "react";
import data from "./data.json";
import TaskPreviewCard from "./components/TaskPreviewCard";
import TaskViewCard from "./components/TaskViewCard";
import { ThemeContext } from "./context/ThemeContext";
import AddTask from "./components/TaskModal";
import AddBoard from "./components/BoardModal";
import DeleteModal from "./components/DeleteModal";
import Column from "./components/Column";
import { Board, Columns, Tasks, Subtask } from "./utilities/interface";
import BoardModal from "./components/BoardModal";
import Boardview from "./components/Boardview";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={theme}>
        Main App Page
        {/* <TaskPreviewCard />
        <TaskViewCard />
        <AddTask />
        <AddBoard />
        <DeleteModal /> */}
        {data.boards.map(board => {
          return <Boardview board={board} key={board.name} />;
        })}
        <button className="btn-s btn-secondary" onClick={toggleTheme}>
          Change Theme
        </button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
