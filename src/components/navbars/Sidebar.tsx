import logodark from "../../assets/logo-dark.svg";
import logolight from "../../assets/logo-light.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";

type Props = {
  boardNames: string[];
  visible: string;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoard: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ boardNames, visible, setVisible, sidebar, setSidebar, setShowAddBoard }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div id="sidebar" data-sidebar={!sidebar ? "hidden" : "show"} className={themeContext?.theme}>
        <div className="sidebar-inner-container">
          <img src={themeContext?.theme === "light" ? logodark : logolight} alt="Kanban Logo" />
          <BoardList visible={visible} setVisible={setVisible} boardNames={boardNames} setShowAddBoard={setShowAddBoard} />
        </div>
        <div className="sidebar-inner-container">
          <ThemeToggle />
          <button onClick={() => setSidebar(false)} className="hide-sidebar">
            Hide Sidebar
          </button>
        </div>
      </div>
      <button className="show-sidebar" onClick={() => setSidebar(true)}></button>
    </>
  );
}
