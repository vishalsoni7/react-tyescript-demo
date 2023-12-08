import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const { primary, secondary } = useContext(ThemeContext);
  const [checkTheme, setCheckTheme] = useState(false);

  const handleTheme = () => {
    setCheckTheme((pre) => !pre);
  };

  const currentTheme = checkTheme ? primary : secondary;

  return (
    <div
      style={{
        background: currentTheme.main,
        color: currentTheme.text,
      }}
    >
      <h2> Box Context </h2>
      <button onClick={handleTheme}> Change theme </button>
    </div>
  );
};
