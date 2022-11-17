import { Board } from "../../utilities/interface";
import Column from "./Column";

type Props = {
  board: Board;
};

export default function Boardview({ board }: Props) {
  //collect an array of column names for status selection component
  const colNames = board.columns.map(col => col.name);
  return (
    <div id="board-view">
      {board.columns.map(col => {
        return <Column column={col} key={col.name} colNames={colNames} />;
      })}
      <button>+ New column</button>
    </div>
  );
}
