import { Subtask, BoardData } from "../../utilities/interface";
import { updateSubtask } from "../../utilities/immerFunctions";

type Props = {
  subtask: Subtask;
  boardIndex: number;
  taskIndex: number;
  columnIndex: number;
  subtaskIndex: number;
  boardData: BoardData;
  setBoardData: React.Dispatch<React.SetStateAction<BoardData>>;
};

export default function SubtaskItem({ subtask, boardIndex, taskIndex, columnIndex, boardData, setBoardData, subtaskIndex }: Props) {
  let changeSubtask = () => {
    let result = updateSubtask(boardData, boardIndex, columnIndex, taskIndex, subtaskIndex);
    setBoardData(result);
  };

  return (
    <div onClick={changeSubtask} className="subtask">
      <input type="checkbox" name="subtask" checked={subtask.isCompleted ? true : false} />
      <label className="body-b" htmlFor="subtask">
        {subtask.title}
      </label>
    </div>
  );
}
