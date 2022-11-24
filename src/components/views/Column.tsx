import { Columns } from "../../utilities/interface";
import TaskPreviewCard from "./TaskPreviewCard";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

type Props = {
  column: Columns;
  colNames: string[];
};

export default function Column({ column, colNames }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div id="column-view">
      <h1 className={`column-title ${theme?.theme}`}>{`${column.name} (${column.tasks.length})`}</h1>
      {column.tasks.map(task => {
        return <TaskPreviewCard task={task} key={task.title} colNames={colNames} />;
      })}
    </div>
  );
}
