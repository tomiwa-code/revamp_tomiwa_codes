import React from "react";
import AvatarCircles from "../ui/avatar-circles";
import { CldImage } from "next-cloudinary";
import { icons, iconValue } from "@/lib/constants/icon";
import Link from "next/link";
import { useTheme } from "@/context/Theme.Context";
import { ProjectResProps } from "@/types/project.type";
import HoverVideoPlayer from "react-hover-video-player";

type ProjectListProps = {
  projectData: ProjectResProps;
};

const ProjectList = ({ projectData }: ProjectListProps) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const {
    projectimage,
    projectvideo,
    description,
    contributors,
    tools,
    name,
    links,
  } = projectData;
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-[80%] mx-auto md:mx-0 md:w-full rounded-2xl ${isDarkMode ? "bg-dark-200" : "bg-light-200 shadow-3xl"} pb-8 h-full`}
    >
      <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-tr-2xl rounded-tl-2xl overflow-hidden cursor-pointer relative">
        <HoverVideoPlayer
          style={{
            height: "101%",
            width: "101%",
          }}
          videoSrc={projectvideo}
          pausedOverlay={
            <CldImage
              src={projectimage}
              alt={name}
              width="1000"
              height="1000"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              priority
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
          unloadVideoOnPaused={true}
          disablePictureInPicture
          playbackStartDelay={500}
        />
      </div>

      <div className="flex items-center justify-center w-full -mt-6 md:-mt-8 gap-x-3 md:gap-x-4 lg:gap-x-6 flex-wrap gap-y-3 z-50 relative">
        {tools && (
          <>
            {tools.map((tool) => {
              const isIcon = tool as keyof typeof icons;

              return (
                <div
                  key={tool}
                  className={`p-2 ${isDarkMode ? "bg-dark-300" : "bg-dark-200"} w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative group`}
                >
                  {icons[isIcon]({
                    className: `${isDarkMode ? "text-light-600 " : "text-light-200"} text-xl md:text-2xl lg:text-[70px]`,
                  })}
                  <span className="w-[80px] items-center flex justify-center absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-light-600 bg-dark-200 backdrop-blur-m bg-opacity-90 font-medium rounded-md opacity-0 group-hover:opacity-100 capitalize transition-opacity duration-300">
                    {iconValue[tool as keyof typeof iconValue]}
                  </span>
                </div>
              );
            })}
          </>
        )}
      </div>

      <div className="px-4 lg:px-8 mt-5">
        <div className="flex items-center justify-between">
          <p
            className={`capitalize text-lg md:text-xl lg:text-2xl ${isDarkMode ? "text-light-300" : "text-dark-300"} font-bold`}
          >
            {name}
          </p>
          <div className="flex items-center justify-end gap-x-3">
            <Link
              href={links.site}
              target="_blank"
              rel="noreferrer"
              className={`${isDarkMode ? "bg-dark-300" : "bg-dark-200"} rounded-full w-10 h-10 md:w-12 md:h-12 items-center flex justify-center`}
            >
              {icons.exLink({
                className: `${isDarkMode ? "text-primary-200 " : "text-light-200"} text-lg md:text-3xl hover:text-primary-600`,
              })}
            </Link>

            {links.github &&
              links.github !== "https://null" &&
              links.github !== "https://" && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${isDarkMode ? "bg-dark-300" : "bg-dark-200"} rounded-full w-10 h-10 md:w-12 md:h-12 items-center flex justify-center`}
                >
                  {icons.github({
                    className: `${isDarkMode ? "text-primary-200 " : "text-light-200"} text-lg md:text-3xl hover:text-primary-600`,
                  })}
                </Link>
              )}
          </div>
        </div>

        <div className="mt-3.5">
          <p
            className={`text-xs md:text-sm  font-regular tracking-wide ${isDarkMode ? "text-light-300 " : "text-dark-300 "} leading-5 md:leading-8`}
          >
            {description}
          </p>
        </div>
        {contributors && (
          <div className="mt-3">
            <p
              className={`text-sm lg:text-lg ${isDarkMode ? "text-primary-100 " : "text-dark-200 "} font-medium`}
            >
              Collaborators
            </p>
            <div className="mt-2">
              <AvatarCircles
                numPeople={contributors.length}
                avatarUrls={contributors}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
