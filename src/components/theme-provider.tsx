'use client'
import { createContext,useContext } from "react";

type ThemeContextType = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  }
};

const defaultTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1c1c1e",
    accent: "#ff2d55",
    background: "#ffffff",
    text: "#000000",
  },
}

const ThemeContext = createContext<ThemeContextType>(defaultTheme);


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}; 

export const useTheme = () => {
  return useContext(ThemeContext);
};