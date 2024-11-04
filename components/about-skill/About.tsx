import { ProfileResProps } from "@/types/about-skill.type";
import { CldImage } from "next-cloudinary";
import React from "react";
import { BlurFade } from "../magicui/blur-fade";

type AboutProps = {
  isDarkMode: boolean;
  profileDetails: ProfileResProps;
};

const About = ({ isDarkMode, profileDetails }: AboutProps) => {
  // DECLARES
  const { bio, fullname, profileImage, greeting } = profileDetails;
  const width = "w-[250px] md:w-[350px]";
  const height = "h-[200px] md:h-[300px]";

  // STYLES
  const borderStyle = `duration-300 group-hover:top-0 group-hover:left-0 absolute rounded-xl border-2 z-0`;

  return (
    <div className="flex justify-between flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center">
      <BlurFade delay={0.25} inView>
        <div className="relative group lg:-mt-10">
          {profileImage && (
            <div
              className={`relative overflow-hidden mx-auto rounded-xl z-20 ${width} ${height}`}
            >
              <CldImage
                src={profileImage}
                alt="about-me"
                width={1000}
                height={1000}
              />
            </div>
          )}
          <div
            className={`${width} ${height} hidden lg:block top-10 left-10 border-primary-100 ${borderStyle}`}
          />
          <div
            className={`${width} ${height} hidden lg:block top-14 left-14 ${isDarkMode ? "border-light-100" : "border-gray-400"} ${borderStyle}`}
          />
        </div>
      </BlurFade>

      <BlurFade delay={0.3} inView className="w-full lg:w-1/2">
        <div
          className={`relative z-50 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-20" : ""} w-full px-4 py-5 md:p-10 rounded-2xl space-y-3`}
        >
          <div>
            <p
              className={`capitalize text-base md:text-xl ${isDarkMode ? "text-dark-600" : "text-dark-100"} font-semibold`}
            >
              {greeting}
            </p>
          </div>

          <div>
            <p
              className={`capitalize font-bold text-base md:text-xl ${isDarkMode ? "text-light-100" : "text-dark-200"}`}
            >
              {fullname}
            </p>
          </div>

          <div>
            <p className={`${isDarkMode ? "text-light-600" : "text-dark-300"} text-sm md:text-base font-normal leading-[30px]`}>
              {bio}
            </p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default About;
