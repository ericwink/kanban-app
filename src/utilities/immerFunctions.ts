import produce from "immer";
import { BoardData } from "./interface";

export let updateSubtask = (boardData: BoardData, boardIndex: number, columnIndex: number, taskIndex: number, subtaskIndex: number) => {
  let updatedBoard = produce(boardData, draft => {
    let currentSubtask = draft.boards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex];
    currentSubtask.isCompleted = !currentSubtask.isCompleted;
  });
  return updatedBoard;
};

//check and uncheck subtasks
//add a subtask
//delete a subtask??

//change task to other column

export let updateTaskStatus = (boardData: BoardData, boardIndex: number, columnIndex: number, taskIndex: number, newStatus: string) => {
  let updatedBoard = produce(boardData, draft => {
    //splice out the task to update
    let taskToUpdate = draft.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
    //update the status of the task
    taskToUpdate[0].status = newStatus;
    //find the column to move it into based on newStatus
    let columnsArray = draft.boards[boardIndex].columns;
    let newColumnIndex = columnsArray.findIndex(column => column.name === newStatus);
    //push onto newStatus array
    draft.boards[boardIndex].columns[newColumnIndex].tasks.push(taskToUpdate[0]);
  });
  return updatedBoard;
};

//delete a task
//add a task
//add a column
//add a board
