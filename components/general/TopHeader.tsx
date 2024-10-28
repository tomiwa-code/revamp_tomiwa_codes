"use client";
import { useTheme } from "@/context/Theme.Context";
import React from "react";
import { GradualSpacing } from "../magicui/gradual-spacing";
import { FadeText } from "../magicui/fade-text";

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
      <div className="w-full flex items-center justify-center">
        <FadeText
          className={`${
            isDarkMode ? "text-light-600 font-light" : "text-dark-100"
          } text-xs md:text-sm`}
          text={topSubTitle}
        />
      </div>

      <GradualSpacing
        className={` ${
          isDarkMode ? "text-primary-600 font-light" : "text-dark-300"
        } uppercase text-2xl md:text-4xl font-sans`}
        text={title}
      />
    
      <FadeText
        className={`${
          isDarkMode ? "text-light-600 font-light" : "text-dark-100"
        } text-xs md:text-sm`}
        text={bottomSubTitle}
      />
    </div>
  );
};

export default TopHeader;
