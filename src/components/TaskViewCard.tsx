import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import menu from "../assets/icon-vertical-ellipsis.svg";
import StatusSelect from "./StatusSelect";
import { Tasks } from "../utilities/interface";
import SubtaskItem from "./SubtaskItem";

type Props = {
  task: Tasks;
  completed: number;
  count: number;
};

export default function TaskViewCard({ task, completed, count }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div id="task-view-card" className={theme}>
      <div className="task-header">
        <h1 className="heading-l">{task.title}</h1>
        <img src={menu} alt="menu" />
      </div>
      <h2 className="body-m">{task.description}</h2>
      <div className="subtasks-container">
        <h3 className="heading-s">{`Subtasks (${completed} of ${count})`}</h3>
        {task.subtasks.map(subtask => {
          return <SubtaskItem subtask={subtask} />;
        })}
      </div>
      <StatusSelect />
    </div>
  );
}

//mobile w343 h557
//tablet w480 h523
