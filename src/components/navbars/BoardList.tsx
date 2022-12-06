import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
  boardNames: string[];
  visible: string;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  setShowAddBoard: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BoardList({ boardNames, visible, setVisible, setShowAddBoard }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`sidebar-boardlist ${themeContext?.theme}`}>
      <h1 className="heading-s">ALL BOARDS ({boardNames.length})</h1>
      {boardNames.map(name => {
        return (
          <button className={visible === name ? "active" : undefined} onClick={() => setVisible(name)} key={name}>
            {name}
          </button>
        );
      })}
      <button onClick={() => setShowAddBoard(true)} className="new-board">
        + Create New Board
      </button>
    </div>
  );
}
