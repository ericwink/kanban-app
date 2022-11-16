import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";
import { Tasks, Subtask } from "../utilities/interface";
import TaskViewCard from "./TaskViewCard";

type Props = {
  task: Tasks;
};

export default function TaskPreviewCard({ task }: Props) {
  const theme = useContext(ThemeContext);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const count = task.subtasks.length;

  //iterate through subtasks and return a count of total completed
  let completed = (subtask: Subtask[]) => {
    let count = 0;
    for (let each of subtask) {
      if (each.isCompleted === true) count++;
    }
    return count;
  };

  return (
    <>
      <div id="task-preview-card" className={theme} onClick={() => setDetailsVisible(!detailsVisible)}>
        <h1 className="heading-m">{task.title}</h1>
        <h2 className="heading-s">{`${completed(task.subtasks)} of ${count} subtasks`}</h2>
      </div>
      {detailsVisible ? <TaskViewCard task={task} completed={completed(task.subtasks)} count={count} /> : null}
    </>
  );
}
