import { useTheme } from "@/context/Theme.Context";
import { SvgIcons } from "@/lib/constants/icon";
import React from "react";

type IconContainerProp = {
  children: React.ReactNode;
};

const MobileSkillsView = () => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";
  const iconList = [
    { icon: <SvgIcons.react className="text-xl" />, name: "React" },
    {
      icon: (
        <SvgIcons.next
          className={`text-2xl ${isDarkMode ? "text-light-600" : "text-dark-200"}`}
        />
      ),
      name: "Next.js",
    },
    {
      icon: (
        <SvgIcons.reactNative
          className={`text-xl ${isDarkMode ? "text-light-600" : "text-dark-200"}`}
        />
      ),
      name: "React Native",
    },
    {
      icon: <SvgIcons.javascript className="text-xl" />,
      name: "JavaScript",
    },
    {
      icon: <SvgIcons.typescript className="text-xl" />,
      name: "TypeScript",
    },
    { icon: <SvgIcons.html className="text-xl" />, name: "HTML" },
    { icon: <SvgIcons.css className="text-xl" />, name: "CSS" },
    { icon: <SvgIcons.sass className="text-xl" />, name: "Sass" },
    {
      icon: <SvgIcons.tailwind color="#2298bd" className="text-xl" />,
      name: "Tailwind CSS",
    },
  ];

  // RENDER
  const IconContainer = ({ children }: IconContainerProp) => (
    <div
      className={`w-full rounded-md flex p-5 items-center gap-x-6 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-30" : "bg-dark-200 bg-opacity-10"} mb-5`}
    >
      {children}
    </div>
  );
  return (
    <div className="w-full md:grid md:grid-cols-2 gap-x-6">
      {iconList.map((item, idx) => (
        <IconContainer key={idx}>
          {item.icon}
          <p
            className={`${isDarkMode ? "text-light-600" : "text-dark-200"} text-base`}
          >
            {item.name}
          </p>
        </IconContainer>
      ))}
    </div>
  );
};

export default MobileSkillsView;
