import produce from "immer";
import { BoardData } from "./interface";

export let updateSubtask = () => {
  //code
  //send in the board index, column index, task index, subtask index
};

//check and uncheck subtasks
//add a subtask
//delete a subtask??

//change task to other column

export let updateTaskStatus = (boardData: BoardData, boardIndex: number, columnIndex: number, taskIndex: number, newStatus: string) => {
  //code
  //remove the task
  const toMove = boardData.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
  //update task status
  toMove[0].status = newStatus;
  //find the column to move it to based on newStatus
  const columnsArray = boardData.boards[boardIndex].columns;
  const newColumnIndex = columnsArray.findIndex(column => column.name === newStatus);
  console.log(newColumnIndex);
  //push onto newStatus array
  const updatedBoard = produce(boardData, draft => {
    draft.boards[boardIndex].columns[newColumnIndex].tasks.push(toMove[0]);
  });
  return updatedBoard;
};

//delete a task
//add a task
//add a column
//add a board
