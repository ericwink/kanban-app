import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    themeContext?.setTheme(() => (themeContext?.theme === "light" ? "dark" : "light"));
  };

  return (
    <div id="theme-toggle" className={themeContext?.theme}>
      <button onClick={handleClick} className={themeContext?.theme}>
        <div className={`inner-switch ${themeContext?.theme}`}></div>
      </button>
    </div>
  );
}
