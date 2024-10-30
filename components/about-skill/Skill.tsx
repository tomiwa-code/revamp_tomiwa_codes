import React from "react";
import {
  FrontendDevBeam,
  IntegratingApiBeam,
  SandDBeam,
  VersionControlBeam,
} from "./SkillBeam";
import { BlurFade } from "../magicui/blur-fade";

type SkillProps = {
  isDarkMode: boolean;
};

const Skill = ({ isDarkMode }: SkillProps) => {
  return (
    <div className="w-full relative mt-20 z-50">
      <BlurFade delay={0.25} inView>
        <div className={`relative z-50 p-10 space-y-3`}>
          <p className="text-2xl text-light-200 text-center font-semibold">
            Frontend Development
          </p>
          <div className="relative">
            <FrontendDevBeam />
          </div>
        </div>
      </BlurFade>

      <div className="flex justify-between">
        <BlurFade delay={0.25} inView className="w-[45%]">
          <div
            className={`relative z-50 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-30" : ""} w-full p-10 rounded-2xl`}
          >
            <p className="text-xl text-light-200 text-center font-semibold">
              Storage & Databases
            </p>

            <div className="relative mt-3">
              <SandDBeam />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView className="w-[45%]">
          <div
            className={`relative z-50 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-30" : ""} w-full p-10 rounded-2xl`}
          >
            <div>
              <p className="text-xl text-light-200 text-center font-semibold">
                Integration & APIs
              </p>

              <div className="relative mt-6">
                <IntegratingApiBeam />
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xl text-light-200 text-center font-semibold">
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
