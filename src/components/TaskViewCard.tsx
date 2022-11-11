import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import Subtask from "./Subtask";
import menu from "../assets/icon-vertical-ellipsis.svg";
import StatusSelect from "./StatusSelect";

export default function TaskViewCard() {
  const theme = useContext(ThemeContext);

  return (
    <div id="task-view-card" className={theme}>
      <div className="task-header">
        <h1 className="heading-l">Research pricing points of various competitors and trial different business models</h1>
        <img src={menu} alt="menu" />
      </div>
      <h2 className="body-m">We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</h2>
      <div className="subtasks-container">
        <h3 className="heading-s">Subtasks (2 of 3)</h3>
        <Subtask task="Research competitor pricing and business models" />
        <Subtask task="Outline a business model that works for our solution" />
        <Subtask task="Talk to potential customers about our proposed solution and ask for fair price expectancy" />
        <Subtask task="This is a test" />
      </div>
      <StatusSelect />
    </div>
  );
}

//mobile w343 h557
//tablet w480 h523
