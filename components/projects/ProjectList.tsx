import React from "react";
import AvatarCircles from "../ui/avatar-circles";
import { CldImage } from "next-cloudinary";
import { icons } from "@/lib/constants/icon";
import Link from "next/link";
import { useTheme } from "@/context/Theme.Context";

interface IProjectListProps {}

const ProjectList: React.FunctionComponent<IProjectListProps> = (props) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";
  const collaborators = [
    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705699926/my-portfolio/WhatsApp_Image_2024-01-19_at_22.04.19_txrz54.jpg",
    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705699926/my-portfolio/WhatsApp_Image_2024-01-19_at_22.04.19_txrz54.jpg",
  ];

  return (
    <div
      className={`w-[460px] rounded-2xl ${isDarkMode ? "bg-dark-200" : "bg-light-200 shadow-3xl"} h-auto pb-8`}
    >
      <div className="w-full h-[300px] rounded-tr-2xl rounded-tl-2xl overflow-hidden">
        <CldImage
          src="https://res.cloudinary.com/dgdoymhtj/image/upload/v1713261927/my-portfolio/3c8f060f-9c4e-41db-8bfa-65a7582e6681.png"
          alt="image name"
          width="1000"
          height="1000"
          crop={{
            type: "auto",
            source: true,
          }}
          priority
        />
      </div>
      <div className="flex items-center justify-center w-full -mt-8 gap-x-6 flex-wrap gap-y-3">
        <div
          className={`p-2 ${isDarkMode ? "bg-dark-300" : "bg-dark-200"} w-16 h-16 rounded-full flex items-center justify-center relative group`}
        >
          {icons["next"]({
            className: ` ${isDarkMode ? "text-primary-200 " : "text-light-200"} text-[80px]`,
          })}
          <span className="w-[80px] items-center flex justify-center absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-light-600 bg-dark-200 backdrop-blur-m bg-opacity-90 font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Next JS
          </span>
        </div>
        <div
          className={`p-2 ${isDarkMode ? "bg-dark-300" : "bg-dark-200"} w-16 h-16 rounded-full flex items-center justify-center group relative`}
        >
          {icons["react"]({
            className: ` ${isDarkMode ? "text-primary-200 " : "text-light-200"} text-[80px]`,
          })}
          <span className="w-[80px] items-center flex justify-center absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-light-600 bg-dark-200 backdrop-blur-m bg-opacity-90 font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            React JS
          </span>
        </div>
      </div>

      <div className="px-8 mt-3">
        <div className="flex items-center justify-between">
          <p
            className={`capitalize text-2xl ${isDarkMode ? "text-light-300" : "text-dark-300"} font-bold`}
          >
            TYTN wears
          </p>
          <div className="flex items-center justify-end gap-x-3">
            {(["exLink", "github"] as Array<keyof typeof icons>).map((icon) => (
              <Link
                href="#"
                key={icon}
                className={`${isDarkMode ? "bg-dark-300" : "bg-dark-200"} rounded-full w-12 h-12 items-center flex justify-center`}
              >
                {icons[icon]({
                  className: `${isDarkMode ? "text-primary-200 " : "text-light-200"} text-3xl hover:text-primary-600`,
                })}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-3.5">
          <p
            className={`text-base font-regular tracking-wide ${isDarkMode ? "text-light-300 " : "text-dark-300 "} leading-8`}
          >
            Test Your Knowledge with Fun Trivia! 🚀. I took on a challenge and
            built QuizQuest in just 7 hours! 🏆 It's a web app where you can
            test your knowledge with quizzes on various topics.
          </p>
        </div>
        <div className="mt-3">
          <p
            className={`text-lg ${isDarkMode ? "text-primary-100 " : "text-dark-200 "} font-medium`}
          >
            Collaborators
          </p>
          <div className="mt-2">
            <AvatarCircles
              numPeople={collaborators.length}
              avatarUrls={collaborators}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
