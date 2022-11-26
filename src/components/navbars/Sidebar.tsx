import logodark from "../../assets/logo-dark.svg";
import logolight from "../../assets/logo-light.svg";
import { useContext, useRef } from "react";
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
  const ref = useRef(null);

  let hideSidebar = () => {
    gsap.to("#sidebar", { x: "-261px" });
    gsap.to("#board-view", { x: "-261px" });
  };
  let showSidebar = () => {
    gsap.to("#sidebar", { x: "0px" });
    gsap.to("#board-view", { x: "0px" });
  };

  return (
    <>
      <div id="sidebar" className={themeContext?.theme} ref={ref}>
        <img src={themeContext?.theme === "light" ? logodark : logolight} alt="Kanban Logo" />
        <BoardList visible={visible} setVisible={setVisible} boardNames={boardNames} />
        <ThemeToggle />
        <button onClick={hideSidebar} className="hide-sidebar">
          Hide Sidebar
        </button>
      </div>
      <button className="show-sidebar" onClick={showSidebar}>
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
