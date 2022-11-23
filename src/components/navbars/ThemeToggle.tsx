import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    themeContext?.setTheme(() => (themeContext?.theme === "light" ? "dark" : "light"));
  };

  return (
    <div className="theme-toggle">
      <button onClick={handleClick}>switch</button>
    </div>
  );
}
