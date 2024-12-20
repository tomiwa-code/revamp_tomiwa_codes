"use client";
import React from "react";
import TopHeader from "../general/TopHeader";
import { useTheme } from "@/context/Theme.Context";
import { BlurFade } from "../magicui/blur-fade";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectResProps } from "@/types/project.type";
import ContentLoader from "../general/ContentLoader";
import dynamic from "next/dynamic";
import ProjectList from "./ProjectList";

const ProjectsBackGroundEffect = dynamic(
  () => import("./ProjectsBackgroundEffect")
);

const ProjectsWrapper = () => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // REACT HOOKS
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
    fetchProjects();
  }, []);

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

      {isLoading ? (
        <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ContentLoader />
        </div>
      ) : (
        <>
          <div className="relative z-40 mt-16 md:mt-24 mx-auto pl-5 md:pl-10 lg:pl-0 gap-y-12 grid md:grid-cols-2 w-full md:w-[90%] lg:w-[58%] md:gap-x-5 lg:gap-x-10 md:gap-y-14 lg:gap-16">
            {projectData &&
              projectData.map((item, idx) => (
                <BlurFade key={item._id} delay={0.25 + idx * 0.05} inView>
                  <ProjectList projectData={item} />
                </BlurFade>
              ))}
          </div>

          {projectData && projectData.length === 0 && (
            <BlurFade
              delay={0.25}
              inView
              className="w-full text-center mt-20 z-50 relative"
            >
              <p
                className={`${
                  isDarkMode ? "text-light-600 font-light" : "text-dark-100"
                } text-xs md:text-sm`}
              >
                No projects available at the moment.
              </p>
            </BlurFade>
          )}

          {projectData && projectData.length > 0 && (
            <BlurFade
              delay={0.25}
              inView
              className="w-full text-center mt-20 z-50 relative"
            >
              <p
                className={`${
                  isDarkMode ? "text-light-600 font-light" : "text-dark-100"
                } text-xs md:text-sm text-center w-[80%] mx-auto`}
              >
                Trust me with your project, and prepare to be impressed.
              </p>
            </BlurFade>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsWrapper;
