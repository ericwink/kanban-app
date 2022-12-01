import { Board } from "../../utilities/interface";
import Column from "./Column";
import { BoardData } from "../../utilities/interface";

type Props = {
  board: Board;
  sidebar: boolean;
  boardIndex: number;
  setBoardData: React.Dispatch<React.SetStateAction<BoardData>>;
  boardData: BoardData;
};

export default function Boardview({ board, sidebar, boardIndex, setBoardData, boardData }: Props) {
  //collect an array of column names for status selection component
  const colNames = board.columns?.map(col => col.name);

  return (
    <div id="board-view" data-sidebar={sidebar ? "show" : "hidden"}>
      {board.columns?.map((col, index) => {
        return <Column boardIndex={boardIndex} columnIndex={index} column={col} key={col.name} colNames={colNames} setBoardData={setBoardData} boardData={boardData} />;
      })}
      <button>+ New column</button>
    </div>
  );
}
