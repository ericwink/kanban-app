import { useState } from "react";
import { Columns, Board } from "../../utilities/interface";
import produce from "immer";

let useMakeBoard = (boardData: Board | undefined) => {
  //state for the board name
  const [boardName, setBoardName] = useState(boardData?.name || "");

  //state for the columns[]
  const [columns, setColumns] = useState<Columns[]>(boardData?.columns || []);

  //column[] push object {name: 'name', tasks: []}
  let addColumn = () => {
    let copy = [...columns, { name: "", tasks: [] }];
    setColumns(copy);
  };

  let removeColumn = (index: number) => {
    let copy = [...columns];
    copy.splice(index, 1);
    setColumns(copy);
  };

  let updateColName = (index: number, name: string) => {
    let copy = produce(columns, draft => {
      draft[index].name = name;
    });
    setColumns(copy);
  };

  return { boardName, setBoardName, columns, updateColName, removeColumn, addColumn };
};

export default useMakeBoard;
