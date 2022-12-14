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
export let addTask = (boardData: BoardData, boardIndex: number, newTask: Tasks, taskIndex = -1) => {
  let updatedBoard = produce(boardData, draft => {
    let columnsArray = draft.boards[boardIndex].columns;
    let ColumnIndex = columnsArray.findIndex(column => column.name === newTask.status);
    if (taskIndex >= 0) {
      draft.boards[boardIndex].columns[ColumnIndex].tasks.splice(taskIndex, 0, newTask);
    } else {
      draft.boards[boardIndex].columns[ColumnIndex].tasks.push(newTask);
    }
  });
  return updatedBoard;
};

//'edit' a task
export let editTaskImmer = (boardData: BoardData, boardIndex: number, columnIndex: number, taskIndex: number, editedTask: Tasks, statusUnchanged: boolean) => {
  //call delete method to remove the current version of the task
  let tempBoard = deleteTask(boardData, boardIndex, columnIndex, taskIndex);

  //if statusUnchanged = true, DO send in task index
  //else, exclude taskIndex
  let finalBoard;
  if (statusUnchanged) {
    //call the add task method with boardData from above, and new task
    finalBoard = addTask(tempBoard, boardIndex, editedTask, taskIndex);
  } else finalBoard = addTask(tempBoard, boardIndex, editedTask);

  return finalBoard;
};

//add a column
export let addColumn = (boardData: BoardData, boardIndex: number, columnName: string) => {
  let updatedBoard = produce(boardData, draft => {
    draft.boards[boardIndex].columns.push({ name: columnName, tasks: [] });
  });
  return updatedBoard;
};

//add a board
export let addNewBoard = (boardData: BoardData, newBoard: Board, index = -1) => {
  let updatedBoard = produce(boardData, draft => {
    if (index < 0) {
      draft.boards.push(newBoard);
    } else {
      draft.boards.splice(index, 0, newBoard);
    }
  });
  return updatedBoard;
};

//delete a board
export const deleteBoardImmer = (boardData: BoardData, boardName: string) => {
  const updatedBoard = produce(boardData, draft => {
    const boardIndex = draft.boards.findIndex(board => board.name === boardName);
    draft.boards.splice(boardIndex, 1);
  });
  return updatedBoard;
};

//edit a board
export const editBoardImmer = (boardData: BoardData, newBoard: Board, originalName: string) => {
  const boardIndex = boardData.boards.findIndex(each => each.name === originalName);
  const tempBoard = deleteBoardImmer(boardData, originalName);
  const finalBoard = addNewBoard(tempBoard, newBoard, boardIndex);
  return finalBoard;
};
