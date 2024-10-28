"use client";
import React from "react";
import TopHeader from "../general/TopHeader";
import AboutBackgroundEffect from "./AboutBackgroundEffect";
import { useTheme } from "@/context/Theme.Context";

type Props = {};

const AboutWrapper = (props: Props) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-full min-h-screen relative pb-20 ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      }`}
    >
      {isDarkMode && <AboutBackgroundEffect />}

      <TopHeader
        topSubTitle="A bit about"
        title="WHO I AM"
        bottomSubTitle="& what I do"
      />
    </div>
  );
};

export default AboutWrapper;
