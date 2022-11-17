import { Tasks } from "../../utilities/interface";

type Props = {
  task?: Tasks;
  colNames: string[];
};

export default function StatusSelect({ task, colNames }: Props) {
  console.log(colNames);

  return (
    <div id="status-select">
      <h3 className="heading-s">Current Status</h3>
      <select name="task-status" id="task-status">
        {colNames.map(name => {
          return (
            <option value={name} selected={task.status === name ? true : false}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
