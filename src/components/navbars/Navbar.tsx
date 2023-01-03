import smallLogo from "../../assets/logo-mobile.svg";
import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import EditDeleteBox from "../create-edit/EditDeleteBox";
import DeleteModal from "../DeleteModal";
import BoardModal from "../create-edit/BoardModal";
import { BoardData, Board } from "../../utilities/interface";

type Props = {
  boardData: BoardData;
  visible: string;
  boardNames: string[];
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  sidebar: boolean;
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoard: React.Dispatch<React.SetStateAction<boolean>>;
  deleteBoard: (boardName: string) => void;
  editBoard: (newBoard: Board) => void;
};

export default function Navbar({ editBoard, boardData, visible, boardNames, setVisible, sidebar, setShowAddTask, setShowAddBoard, deleteBoard }: Props) {
  const [menu, showMenu] = useState(false);
  const themeContext = useContext(ThemeContext);

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const findBoardData = () => {
    const boardIndex = boardData.boards.findIndex(each => each.name === visible);
    return boardData.boards[boardIndex];
  };

  return (
    <div id="navbar" data-sidebar={sidebar ? "show" : "hidden"} className={themeContext?.theme}>
      <div className="inner-nav-box">
        <img src={smallLogo} alt="Kanban Logo" className="mobile-logo" />
        <button
          className="heading-l menu"
          onClick={() => {
            showMenu(!menu);
          }}
        >
          {visible ? visible : "Select a board"}
        </button>
      </div>
      <div className="inner-nav-box">
        <button
          onClick={() => {
            if (visible) {
              setShowAddTask(true);
            }
          }}
          className="add btn-primary"
        ></button>
        <EditDeleteBox setDeleteModal={setDeleteModal} setEditModal={setEditModal} type="Board" />
      </div>
      {!menu ? null : (
        <>
          <div className={`floating-menu ${themeContext?.theme}`}>
            <BoardList boardNames={boardNames} visible={visible} setVisible={setVisible} setShowAddBoard={setShowAddBoard} />
            <ThemeToggle />
          </div>
          <div id="modal-background" className="navbar" onClick={() => showMenu(!menu)}></div>
        </>
      )}
      {deleteModal ? <DeleteModal setDeleteModal={setDeleteModal} item="board" title={visible} removeItem={() => deleteBoard(visible)} /> : null}
      {editModal ? <BoardModal boardNames={boardNames} boardData={findBoardData()} setShowAddBoard={setEditModal} addBoard={editBoard} /> : null}
    </div>
  );
}
