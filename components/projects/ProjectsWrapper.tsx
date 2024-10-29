"use client";
import React from "react";
import TopHeader from "../general/TopHeader";
import ProjectsBackGroundEffect from "./ProjectsBackgroundEffect";
import { useTheme } from "@/context/Theme.Context";
import { BlurFade } from "../magicui/blur-fade";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectResProps } from "@/types/project.type";
import ContentLoader from "../general/ContentLoader";
import dynamic from "next/dynamic";

const ProjectList = dynamic(() => import("./ProjectList"));

const ProjectsWrapper = () => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // REACT HOOKS
  const [isMounted, setIsMounted] = React.useState(false);
  const [isLoading, startTransition] = React.useTransition();
  const [projectData, setProjectData] = React.useState<
    ProjectResProps[] | null
  >(null);

  // DECLARES
  const isDarkMode = theme === "dark";

  // FUNCTIONS
  const fetchProjects = async () => {
    startTransition(async () => {
      try {
        const res: ProjectResProps[] = await getProjects();
        setProjectData(res);
        // console.log(res);
      } catch (err: unknown) {
        // console.error(err);
      }
    });
  };

  // USE EFFECTS
  React.useEffect(() => {
    setIsMounted(true);
    fetchProjects();
  }, []);

  return (
    <div
      className={`w-full min-h-screen relative pb-20 ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      }`}
    >
      {isMounted && isDarkMode && <ProjectsBackGroundEffect />}

      <TopHeader
        topSubTitle="Some of the"
        title="projects"
        bottomSubTitle="I've worked on so far"
      />

      {isLoading ? (
        <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ContentLoader />
        </div>
      ) : (
        <div className="relative z-40 mt-24 mx-auto gap-y-12 grid md:grid-cols-2 w-full md:w-9/12 lg:w-[58%] md:gap-x-10 md:gap-y-14 lg:gap-16">
          {projectData &&
            projectData.map((item, idx) => (
              <BlurFade key={item._id} delay={0.25 + idx * 0.05} inView>
                <ProjectList projectData={item} />
              </BlurFade>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsWrapper;
