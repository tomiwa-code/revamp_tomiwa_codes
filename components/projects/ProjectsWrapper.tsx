"use client";
import React from "react";
import TopHeader from "../general/TopHeader";
import ProjectsBackGroundEffect from "./ProjectsBackgroundEffect";
import ProjectList from "./ProjectList";
import { useTheme } from "@/context/Theme.Context";

interface IProjectsWrapperProps {}

const ProjectsWrapper: React.FunctionComponent<IProjectsWrapperProps> = (
  props
) => {
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
      {isDarkMode && <ProjectsBackGroundEffect isDarkMode={isDarkMode} />}

      <TopHeader
        topSubTitle="Some of the"
        title="proojects"
        bottomSubTitle="I've worked on so far"
      />

      <div className="relative z-40 mt-16 md:w-[58%] mx-auto flex gap-y-16 justify-between flex-wrap">
        {[0, 1, 2].map((item) => (
          <ProjectList key={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWrapper;
