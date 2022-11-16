import { Board } from "../utilities/interface";
import Column from "./Column";

type Props = {
  board: Board;
};

export default function Boardview({ board }: Props) {
  return (
    <>
      <h1>{board.name}</h1>
      {board.columns.map(col => {
        return <Column column={col} key={col.name} />;
      })}
    </>
  );
}
