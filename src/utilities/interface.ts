export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type Tasks = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

export type Columns = {
  name: string;
  tasks: Tasks[];
};

export type Board = {
  name: string;
  columns: Columns[];
};

export type Boards = {
  boards: Board[];
};
