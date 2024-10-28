"use client";
import { icons } from "@/lib/constants/icon";
import * as React from "react";
import { useTheme } from "@/context/Theme.Context";

const ToggleTheme = () => {
  // HOOKS
  const { theme, handleThemeToggle: toggleTheme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none z-[999] fixed right-10 top-8"
    >
      <div className="w-20 h-10 pl-2 rounded-full bg-dark-500 dark:bg-gray-300 relative flex items-center">
        <div
          className={`absolute w-8 h-8 bg-light-100 rounded-full flex items-center justify-center duration-300 transition-transform transform ${
            isDarkMode ? "translate-x-0" : "translate-x-8"
          }`}
        >
          {isDarkMode ? (
            <>
              {icons["moon"]({
                className: `text-xl ${isDarkMode ? "text-primary-600" : "text-dark-300"}`,
              })}
            </>
          ) : (
            <>
              {icons["sun"]({
                className: `text-xl ${isDarkMode ? "text-primary-600" : "text-dark-300"}`,
              })}
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default ToggleTheme;
