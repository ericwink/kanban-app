import { Subtask } from "../../utilities/interface";

type Props = {
  subtask: Subtask;
};

export default function SubtaskItem({ subtask }: Props) {
  return (
    <div className="subtask">
      <input type="checkbox" name="subtask" checked={subtask.isCompleted ? true : false} />
      <label className="body-b" htmlFor="subtask">
        {subtask.title}
      </label>
    </div>
  );
}
