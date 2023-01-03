import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import { Board } from "../../utilities/interface";
import deleteCol from "../../assets/icon-cross.svg";
import useMakeBoard from "../hooks/useMakeBoard";

type Props = {
  setShowAddBoard: React.Dispatch<React.SetStateAction<boolean>>;
  addBoard: (newBoard: Board) => void;
  boardData?: Board;
  boardNames: string[];
};

export default function BoardModal({ setShowAddBoard, addBoard, boardData, boardNames }: Props) {
  const theme = useContext(ThemeContext);
  const [error, setError] = useState("");
  const [colError, setColError] = useState("");

  let { boardName, setBoardName, columns, updateColName, removeColumn, addColumn } = useMakeBoard(boardData);

  let sendBoard = () => {
    //combine our states into a board object
    let newBoard = { name: boardName, columns: columns };
    //send back to the addBoard function
    addBoard(newBoard);
    setShowAddBoard(false);
  };

  const checkName = () => {
    //check board name
    const check = boardNames.find(each => each === boardName);
    if (!boardName) return setError("Name Cannot Be Blank");
    if (!boardData && check) return setError("Name Already Exists");

    //check column names
    const checkCol = columns.find(each => each.name === "");
    if (checkCol) return setColError("Column name cannot be blank");
    sendBoard();
  };

  return (
    <>
      <div id="modal-background" onClick={() => setShowAddBoard(false)}></div>
      <div id="board-modal" className={`modal ${theme?.theme}`}>
        <h1 className="heading-l">{boardData ? "Edit Board" : "Add New Board"}</h1>
        <div className="container">
          <label htmlFor="title">
            Board Name <span className="error-alert">{error ? `-- ${error}` : null}</span>
          </label>
          <input onChange={e => setBoardName(e.target.value)} value={boardName} type="text" name="title" placeholder="e.g. Web Design" />
        </div>
        <div className="container">
          <label htmlFor="columns">
            Columns <span className="error-alert">{colError ? `-- ${colError}` : null}</span>
          </label>
          {columns.map((el, index) => {
            return (
              <div className="columns">
                <input onChange={e => updateColName(index, e.target.value)} value={el.name} type="text" name="columns" placeholder="e.g. Todo" />
                <button>
                  <img src={deleteCol} alt="delete column" onClick={() => removeColumn(index)} />
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={addColumn} className="btn-s btn-secondary">
          + Add New Column
        </button>
        <button onClick={checkName} className="btn-s btn-primary">
          {boardData ? "Edit Board" : "Create New Board"}
        </button>
      </div>
    </>
  );
}
