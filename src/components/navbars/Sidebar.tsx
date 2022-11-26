import logodark from "../../assets/logo-dark.svg";
import logolight from "../../assets/logo-light.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";

type Props = {
  boardNames: string[];
  visible: string;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default function Sidebar({ boardNames, visible, setVisible }: Props) {
  const themeContext = useContext(ThemeContext);
  const [sidebar, setSidebar] = useState("show");

  let sidebarToggle = () => {
    setSidebar(sidebar === "show" ? "hide" : "show");
  };

  return (
    <>
      <div id="sidebar" className={`${themeContext?.theme} ${sidebar}`}>
        <img src={themeContext?.theme === "light" ? logodark : logolight} alt="Kanban Logo" />
        <BoardList visible={visible} setVisible={setVisible} boardNames={boardNames} />
        <ThemeToggle />
        <button onClick={sidebarToggle}>Hide Sidebar</button>
      </div>
      <button className="show-sidebar" onClick={sidebarToggle}>
        SHOW SIDEBAR
      </button>
    </>

    //board listing
    //click each to reveal
    //create new board button at bottom of list

    //toggle theme at bottom of navbar
    //hide sidebar
    //when hidden/ show tab
  );
}
