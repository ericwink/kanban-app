import logodark from "../../assets/logo-dark.svg";
import logolight from "../../assets/logo-light.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";
import gsap from "gsap";

type Props = {
  boardNames: string[];
  visible: string;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default function Sidebar({ boardNames, visible, setVisible }: Props) {
  const themeContext = useContext(ThemeContext);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div id="sidebar" data-hidden={!sidebar ? "hidden" : "show"} className={themeContext?.theme}>
        <img src={themeContext?.theme === "light" ? logodark : logolight} alt="Kanban Logo" />
        <BoardList visible={visible} setVisible={setVisible} boardNames={boardNames} />
        <ThemeToggle />
        <button onClick={() => setSidebar(false)} className="hide-sidebar">
          Hide Sidebar
        </button>
      </div>
      <button className="show-sidebar" onClick={() => setSidebar(true)}></button>
    </>

    //board listing
    //click each to reveal
    //create new board button at bottom of list

    //toggle theme at bottom of navbar
    //hide sidebar
    //when hidden/ show tab
  );
}
