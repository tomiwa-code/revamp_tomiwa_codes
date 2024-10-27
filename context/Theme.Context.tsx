"use client";
import React from "react";

type ThemeProp = {
  theme: string;
  handleThemeToggle: () => void;
};

const ThemeContext = React.createContext<ThemeProp | null>(null);

export const useTheme = () => {
  const getThemeContext = React.useContext(ThemeContext);

  if (!getThemeContext) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }

  return getThemeContext;
};

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  // HOOKS
  const [theme, setTheme] = React.useState<string>("dark");

  // FUNCTIONS
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  //   USE EFFECTS
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
