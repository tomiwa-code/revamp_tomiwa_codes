"use client";
import { useTheme } from "@/context/Theme.Context";
import React from "react";
import SocialDock from "../general/SocialDock";
import HomeBackgroundEffect from "./HomeBackgroundEffect";
import TextContent from "./TextContent";

const HomeWrapper = () => {
  // REACT HOOKS

  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`flex ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      } items-center justify-center h-screen`}
    >
      <div className="w-full flex h-screen items-center justify-center relative overflow-hidden">
        <HomeBackgroundEffect isDarkMode={isDarkMode} />

        <TextContent isDarkMode={isDarkMode} />

        <SocialDock />
      </div>
    </div>
  );
};

export default HomeWrapper;
