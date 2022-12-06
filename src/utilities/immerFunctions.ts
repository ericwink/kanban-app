import produce from "immer";
import { BoardData, Tasks, Board } from "./interface";

//check and uncheck subtasks
export let updateSubtask = (boardData: BoardData, boardIndex: number, columnIndex: number, taskIndex: number, subtaskIndex: number) => {
  let updatedBoard = produce(boardData, draft => {
    let currentSubtask = draft.boards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex];
    currentSubtask.isCompleted = !currentSubtask.isCompleted;
  });
  return updatedBoard;
};

//add a subtask
//delete a subtask??

//change task to other column/update status
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
export let deleteTask = (boardData: BoardData, boardIndex: number, columnIndex: number, taskIndex: number) => {
  //code to delete
  let updatedBoard = produce(boardData, draft => {
    draft.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
  });

  return updatedBoard;
};

//add a task
export let addTask = (boardData: BoardData, boardIndex: number, newTask: Tasks) => {
  let updatedBoard = produce(boardData, draft => {
    let columnsArray = draft.boards[boardIndex].columns;
    let ColumnIndex = columnsArray.findIndex(column => column.name === newTask.status);
    draft.boards[boardIndex].columns[ColumnIndex].tasks.push(newTask);
  });
  return updatedBoard;
};

//add a column
export let addColumn = (boardData: BoardData, boardIndex: number, columnName: string) => {
  let updatedBoard = produce(boardData, draft => {
    draft.boards[boardIndex].columns.push({ name: columnName, tasks: [] });
  });
  return updatedBoard;
};

//add a board
export let addNewBoard = (boardData: BoardData, newBoard: Board) => {
  let updatedBoard = produce(boardData, draft => {
    draft.boards.push(newBoard);
  });
  return updatedBoard;
};
