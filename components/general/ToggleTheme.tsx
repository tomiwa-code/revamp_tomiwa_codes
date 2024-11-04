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
    <div
      onClick={toggleTheme}
      className="flex cursor-pointer items-center rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none z-[999] fixed right-3 top-3 md:right-10 md:top-8"
    >
      <div className="w-10 h-6 md:w-20 md:h-10 pl-2 rounded-full bg-dark-500 dark:bg-gray-300 relative flex items-center">
        <div
          className={`absolute w-4 h-4 md:w-8 md:h-8 bg-light-100 rounded-full flex items-center justify-center duration-300 transition-transform transform ${
            isDarkMode ? "-translate-x-1 md:translate-x-0" : "translate-x-3 md:translate-x-8"
          }`}
        >
          {isDarkMode ? (
            <div>
              <icons.moon
                className={`text-xs md:text-xl ${isDarkMode ? "text-primary-600" : "text-dark-300"}`}
              />
            </div>
          ) : (
            <div>
              <icons.sun
                className={`text-xs md:text-xl ${isDarkMode ? "text-primary-600" : "text-dark-300"}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
