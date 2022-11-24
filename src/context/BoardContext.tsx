import { createContext, useState } from "react";
import data from "../data.json";
import { BoardData } from "../utilities/interface";

type Props = {
  children: React.ReactNode;
};

type Context = {
  boardData: BoardData;
  setBoardData: React.Dispatch<
    React.SetStateAction<{
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
    }>
  >;
};

export const BoardContext = createContext<Context | null>(null);

const BoardGlobalWrapper = ({ children }: Props) => {
  const [boardData, setBoardData] = useState(data);

  return <BoardContext.Provider value={{ boardData, setBoardData }}>{children}</BoardContext.Provider>;
};

export default BoardGlobalWrapper;
