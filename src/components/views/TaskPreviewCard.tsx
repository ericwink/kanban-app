import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import { Tasks, Subtask } from "../../utilities/interface";
import TaskViewCard from "./TaskViewCard";

type Props = {
  task: Tasks;
  colNames: string[];
};

export default function TaskPreviewCard({ task, colNames }: Props) {
  const theme = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const count = task.subtasks.length;

  //iterate through subtasks and return a count of total completed
  let completed = (subtask: Subtask[]) => {
    let count = 0;
    for (let each of subtask) {
      if (each.isCompleted) count++;
    }
    return count;
  };

  return (
    <>
      <div id="task-preview-card" className={theme} onClick={() => setVisible(!visible)}>
        <h1 className="heading-m">{task.title}</h1>
        <h2 className="heading-s">{`${completed(task.subtasks)} of ${count} subtasks`}</h2>
      </div>
      {visible ? <TaskViewCard task={task} completed={completed(task.subtasks)} count={count} visible={visible} setVisible={setVisible} colNames={colNames} /> : null}
    </>
  );
}
