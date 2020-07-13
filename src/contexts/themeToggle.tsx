import { createContext } from "react";

const ThemeToggleContext = createContext(() => {});

export const ThemeToggleProvider = ThemeToggleContext.Provider;
export default ThemeToggleContext;
