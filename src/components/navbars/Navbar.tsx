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
};

export default function Navbar({ visible, boardNames, setVisible }: Props) {
  const [menu, showMenu] = useState(false);
  const themeContext = useContext(ThemeContext);

  return (
    <div id="navbar" className={themeContext?.theme}>
      <img src={smallLogo} alt="Kanban Logo" className="mobile-logo" />
      <button
        className="heading-l menu"
        onClick={() => {
          showMenu(!menu);
        }}
      >
        {visible ? visible : "Select a board"}
      </button>
      <button className="add"></button>
      <button className="burger">
        <img src={burger} alt="burger-menu" />
      </button>

      {!menu ? null : (
        <>
          <div className={`floating-menu ${themeContext?.theme}`}>
            <BoardList boardNames={boardNames} visible={visible} setVisible={setVisible} />
            <ThemeToggle />
          </div>
          <div id="modal-background" className="navbar" onClick={() => showMenu(!menu)}></div>
        </>
      )}
    </div>
  );
}

//zindex
//.modal 999
//modal-background 99
//navbar 2
//navbar floating menu 999
//sidebar 3
//.showsidebar 2
