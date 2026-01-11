import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useContext(ThemeDataContext);

  const ChangeTheme = () => {
    setTheme("dark");
  };

  return (
    <div>
      <button
        onClick={() => {
          ChangeTheme();
        }}
        className="bg-amber-600 active:scale-95 px-4 py-2 rounded text-white hover:bg-amber-500"
      >
        Change theme {theme}
      </button>
    </div>
  );
};

export default Button;
