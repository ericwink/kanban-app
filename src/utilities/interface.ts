export type Subtask = {
  title?: string;
  isCompleted?: boolean;
};

export type Tasks = {
  title?: string;
  description?: string;
  status?: string;
  subtasks?: Subtask[];
};

export type Columns = {
  name?: string;
  tasks?: Tasks[];
};

export type Board = {
  name?: string;
  columns?: Columns[];
};

export type Boards = {
  boards?: Board[];
};

// export type BoardData = {
//   boards?: [{ name?: string; columns?: [{ name?: string; tasks?: [{ title?: string; descripton?: string; status?: string; subtasks?: [{ title?: string; isCompleted?: boolean }] }] }] }];
// };

export type BoardData = {
  boards: {
    name: string;
    columns: {
      name: string;
      tasks: {
        title: string;
        description: string;
        status: string;
        subtasks: {
          title: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
  }[];
};
