import React from "react";
import {
  FrontendDevBeam,
  IntegratingApiBeam,
  SandDBeam,
  VersionControlBeam,
} from "./SkillBeam";
import { BlurFade } from "../magicui/blur-fade";
import MobileSkillsView from "./MobileSkillsView";

type SkillProps = {
  isDarkMode: boolean;
};

const Skill = ({ isDarkMode }: SkillProps) => {
  return (
    <div className="w-full relative mt-16 md:mt-10 lg:mt-20 z-50">
      <BlurFade delay={0.25} inView>
        <div className={`relative z-50 md:p-10 mb-10 md:mb-0 space-y-3`}>
          <p className={ `text-base md:text-lg lg:text-2xl ${isDarkMode ? "text-light-200" : "text-dark-300"} text-center font-semibold`}>
            Frontend Development
          </p>
          <div className="relative hidden xl:block">
            <FrontendDevBeam />
          </div>

          <div className="relative xl:hidden pt-5">
            <MobileSkillsView />
          </div>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between">
        <BlurFade delay={0.25} inView className="w-full lg:w-[45%]">
          <div
            className={`relative z-50 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-30" : ""} w-full p-5 md:p-10 rounded-2xl`}
          >
            <p className={`text-base md:text-lg lg:text-xl ${isDarkMode ? "text-light-200" : "text-dark-300"} text-center font-semibold`}>
              Storage & Databases
            </p>

            <div className="relative mt-3">
              <SandDBeam />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView className="w-full lg:w-[45%]">
          <div
            className={`relative z-50 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-30" : ""} w-full p-5 md:p-10 rounded-2xl`}
          >
            <div>
              <p className={`text-base md:text-lg lg:text-xl ${isDarkMode ? "text-light-200" : "text-dark-300"} text-center font-semibold`}>
                Integration & APIs
              </p>

              <div className="relative mt-6">
                <IntegratingApiBeam />
              </div>
            </div>

            <div className="mt-12">
              <p className={`text-base md:text-lg lg:text-xl ${isDarkMode ? "text-light-200" : "text-dark-300"} text-center font-semibold`}>
                Version Control & Tools
              </p>

              <div className="relative mt-3">
                <VersionControlBeam />
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Skill;
