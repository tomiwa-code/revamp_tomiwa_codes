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
  const width = "w-[350px]";
  const height = "h-[300px]";

  // STYLES
  const borderStyle = `duration-300 group-hover:top-0 group-hover:left-0 absolute rounded-xl border-2 z-0`;

  return (
    <div className="flex justify-between items-center">
      <BlurFade delay={0.25} inView>
        <div className="relative group -mt-10">
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
            className={`${width} ${height} top-10 left-10 border-primary-100 ${borderStyle}`}
          />
          <div
            className={`${width} ${height} top-14 left-14 border-light-100 ${borderStyle}`}
          />
        </div>
      </BlurFade>

      <BlurFade delay={0.30} inView className="w-1/2">
        <div
          className={`relative z-50 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-20" : ""} w-full p-10 rounded-2xl space-y-3`}
        >
          <div>
            <p className="capitalize text-xl text-dark-600 font-semibold">
              {greeting}
            </p>
          </div>

          <div>
            <p className="capitalize font-bold text-xl text-light-100">
              {fullname}
            </p>
          </div>

          <div>
            <p className="text-light-600 text-base font-normal leading-[30px]">
              {bio}
            </p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default About;
