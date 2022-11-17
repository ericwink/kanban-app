import { Columns } from "../../utilities/interface";
import TaskPreviewCard from "./TaskPreviewCard";

type Props = {
  column: Columns;
  colNames: string[];
};

export default function Column({ column, colNames }: Props) {
  return (
    <div id="column-view">
      <h1 className="column-title">{`${column.name} (${column.tasks.length})`}</h1>
      {column.tasks.map(task => {
        return <TaskPreviewCard task={task} key={task.title} colNames={colNames} />;
      })}
    </div>
  );
}
