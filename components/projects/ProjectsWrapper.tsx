"use client";
import React from "react";
import TopHeader from "../general/TopHeader";
import ProjectsBackGroundEffect from "./ProjectsBackgroundEffect";
import ProjectList from "./ProjectList";
import { useTheme } from "@/context/Theme.Context";
import { BlurFade } from "../magicui/blur-fade";

const ProjectsWrapper = () => {
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
      {isDarkMode && <ProjectsBackGroundEffect />}

      <TopHeader
        topSubTitle="Some of the"
        title="projects"
        bottomSubTitle="I've worked on so far"
      />

      <div className="relative z-40 mt-24 md:w-[58%] mx-auto flex gap-y-16 justify-between flex-wrap">
        {[0, 1, 2].map((item, idx) => (
          <BlurFade key={item} delay={0.25 + idx * 0.05} inView>
            <ProjectList />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWrapper;
