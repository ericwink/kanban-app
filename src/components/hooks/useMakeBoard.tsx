import { useState } from "react";
import { Columns } from "../../utilities/interface";

let useMakeBoard = () => {
  //state for the board name
  const [boardName, setBoardName] = useState("");

  //state for the columns[]
  const [columns, setColumns] = useState<Columns[]>([]);

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
    let copy = [...columns];
    copy[index].name = name;
    setColumns(copy);
  };

  return { boardName, setBoardName, columns, updateColName, removeColumn, addColumn };
};

export default useMakeBoard;
