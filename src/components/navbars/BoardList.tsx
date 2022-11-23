import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
  boardNames: string[];
  visible: string;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default function BoardList({ boardNames, visible, setVisible }: Props) {
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
      <button
        className="new-board"
        onClick={() => {
          console.log(boardNames?.boardNames);
        }}
      >
        + Create New Board
      </button>
    </div>
  );
}
