import { Tasks } from "../../utilities/interface";

type Props = {
  task?: Tasks;
  colNames: string[];
  changeTaskStatus: (newStatus: string) => void;
};

export default function StatusSelect({ task, colNames, changeTaskStatus }: Props) {
  return (
    <div id="status-select">
      <h3 className="heading-s">Current Status</h3>
      <select onChange={e => changeTaskStatus(e.target.value)} name="task-status" id="task-status">
        {colNames.map(name => {
          return (
            <option value={name} selected={task?.status === name ? true : false}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
