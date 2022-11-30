import { Columns, BoardData } from "../../utilities/interface";
import TaskPreviewCard from "./TaskPreviewCard";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

type Props = {
  column: Columns;
  colNames: string[];
  boardIndex: number;
  columnIndex: number;
  setBoardData: React.Dispatch<React.SetStateAction<BoardData>>;
  boardData: BoardData;
};

export default function Column({ column, colNames, boardIndex, columnIndex, setBoardData, boardData }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div id="column-view">
      <h1 className={`column-title ${theme?.theme}`}>{`${column.name} (${column.tasks?.length})`}</h1>
      {column.tasks?.map((task, index) => {
        return <TaskPreviewCard task={task} key={task.title} colNames={colNames} boardIndex={boardIndex} columnIndex={columnIndex} taskIndex={index} setBoardData={setBoardData} boardData={boardData} />;
      })}
    </div>
  );
}
