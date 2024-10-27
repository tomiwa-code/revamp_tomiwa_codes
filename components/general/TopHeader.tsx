"use client";
import { useTheme } from "@/context/Theme.Context";
import React from "react";

interface ITopHeaderProps {
  title: string;
  topSubTitle: string;
  bottomSubTitle: string;
}

const TopHeader: React.FunctionComponent<ITopHeaderProps> = ({
  title,
  topSubTitle,
  bottomSubTitle,
}) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  //   DECLARE
  const isDarkMode = theme === "dark";

  return (
    <div className="z-50 relative pt-36 text-center space-y-3  mx-auto">
      <p
        className={`${
          isDarkMode ? "text-light-600 font-light" : "text-dark-100"
        } text-xs md:text-sm`}
      >
        {topSubTitle}
      </p>
      <h1
        className={` ${
          isDarkMode ? "text-primary-600 font-light" : "text-dark-300"
        } uppercase text-2xl md:text-4xl font-sans`}
      >
        {title}
      </h1>
      <p
        className={`${
          isDarkMode ? "text-light-600 font-light" : "text-dark-100"
        } text-xs md:text-sm`}
      >
        {bottomSubTitle}
      </p>
    </div>
  );
};

export default TopHeader;
