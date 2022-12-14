import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { Board } from "../../utilities/interface";
import deleteCol from "../../assets/icon-cross.svg";
import useMakeBoard from "../hooks/useMakeBoard";

type Props = {
  setShowAddBoard: React.Dispatch<React.SetStateAction<boolean>>;
  addBoard: (newBoard: Board) => void;
};

export default function BoardModal({ setShowAddBoard, addBoard }: Props) {
  const theme = useContext(ThemeContext);

  let { boardName, setBoardName, columns, updateColName, removeColumn, addColumn } = useMakeBoard();

  let sendBoard = () => {
    //combine our states into a board object
    let newBoard = { name: boardName, columns: columns };
    //send back to the addBoard function
    addBoard(newBoard);
    setShowAddBoard(false);
  };

  return (
    <>
      <div id="modal-background" onClick={() => setShowAddBoard(false)}></div>
      <div id="board-modal" className={`modal ${theme?.theme}`}>
        <h1 className="heading-l">Add New Board</h1>
        <div className="container">
          <label htmlFor="title">Board Name</label>
          <input onChange={e => setBoardName(e.target.value)} value={boardName} type="text" name="title" placeholder="e.g. Web Design" />
        </div>
        <div className="container">
          <label htmlFor="columns">Columns</label>
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
        <button onClick={sendBoard} className="btn-s btn-primary">
          Create New Board
        </button>
      </div>
    </>
  );
}
