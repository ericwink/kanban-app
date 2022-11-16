import { Columns } from "../utilities/interface";
import TaskPreviewCard from "./TaskPreviewCard";

type Props = {
  column: Columns;
};

export default function Column({ column }: Props) {
  return (
    <>
      <h1>{column.name}</h1>
      {column.tasks.map(task => {
        return <TaskPreviewCard task={task} key={task.title} />;
      })}
    </>
  );
}
