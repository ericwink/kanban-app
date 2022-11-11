export default function StatusSelect() {
  return (
    <div id="status-select">
      <h3 className="heading-s">Current Status</h3>
      <select name="task-status" id="task-status">
        <option value="completed">Completed</option>
        <option value="doing">Doing</option>
        <option value="to-do">To-Do</option>
      </select>
    </div>
  );
}
