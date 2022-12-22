import smallLogo from "../../assets/logo-mobile.svg";
import burger from "../../assets/icon-vertical-ellipsis.svg";
import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
  visible: string;
  boardNames: string[];
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  sidebar: boolean;
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoard: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ visible, boardNames, setVisible, sidebar, setShowAddTask, setShowAddBoard }: Props) {
  const [menu, showMenu] = useState(false);
  const themeContext = useContext(ThemeContext);

  return (
    <div id="navbar" data-sidebar={sidebar ? "show" : "hidden"} className={themeContext?.theme}>
      <img src={smallLogo} alt="Kanban Logo" className="mobile-logo" />
      <button
        className="heading-l menu"
        onClick={() => {
          showMenu(!menu);
        }}
      >
        {visible ? visible : "Select a board"}
      </button>
      <button
        onClick={() => {
          setShowAddTask(true);
        }}
        className="add"
      ></button>
      <button className="burger">
        <img src={burger} alt="burger-menu" />
      </button>

      {!menu ? null : (
        <>
          <div className={`floating-menu ${themeContext?.theme}`}>
            <BoardList boardNames={boardNames} visible={visible} setVisible={setVisible} setShowAddBoard={setShowAddBoard} />
            <ThemeToggle />
          </div>
          <div id="modal-background" className="navbar" onClick={() => showMenu(!menu)}></div>
        </>
      )}
    </div>
  );
}
