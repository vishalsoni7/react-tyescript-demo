import { createContext } from "react";
import { theme } from "./Theme";

type ThemeContextProvierType = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: ThemeContextProvierType) => {
  return (
    <ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider>
  );
};
