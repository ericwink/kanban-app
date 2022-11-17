import { useState } from "react";
import data from "./data.json";
import { ThemeContext } from "./context/ThemeContext";
import Boardview from "./components/views/Boardview";

function App() {
  const [theme, setTheme] = useState("light");
  const [visible, setVisible] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={theme}>
        <button className="btn-s btn-secondary" onClick={toggleTheme}>
          Change Theme
        </button>{" "}
        {data.boards.map(board => {
          return (
            <>
              <h1 onClick={() => setVisible(board.name)}>{board.name}</h1>
              {visible === board.name ? <Boardview board={board} key={board.name} /> : null}
            </>
          );
        })}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
