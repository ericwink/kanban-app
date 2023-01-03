import { useState, ChangeEvent } from "react";
import { Tasks, Subtask } from "../../utilities/interface";

let useMakeTask = (colNames: string[], task?: Tasks) => {
  // edit new task data in modal
  const [newTask, setNewTask] = useState<Tasks>({
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || colNames[0],
    subtasks: [],
  });

  let editNewTask = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    let copy = { ...newTask, [name]: value };
    setNewTask(copy);
  };

  let changeTaskStatus = (newStatus: string) => {
    let copy = { ...newTask, status: newStatus };
    setNewTask(copy);
  };

  //edit subtask data in modal
  const [newSubtask, setNewSubtask] = useState<Subtask[]>(task?.subtasks || []);

  let addSubtask = () => {
    let subtaskCopy = [...newSubtask, { title: "", isCompleted: false }];
    console.log(subtaskCopy);
    setNewSubtask(subtaskCopy);
  };

  let removeSubtask = (index: number) => {
    let copy = [...newSubtask];
    copy.splice(index, 1);
    setNewSubtask(copy);
  };

  let editSubtask = (index: number, value: string) => {
    let copy = [...newSubtask];
    copy[index].title = value;
    setNewSubtask(copy);
  };

  return { newTask, newSubtask, editNewTask, editSubtask, removeSubtask, addSubtask, changeTaskStatus };
};

export default useMakeTask;
