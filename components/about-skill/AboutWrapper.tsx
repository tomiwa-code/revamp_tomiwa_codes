"use client";
import React from "react";
import TopHeader from "../general/TopHeader";
import AboutBackgroundEffect from "./AboutBackgroundEffect";
import { useTheme } from "@/context/Theme.Context";
import { ProfileResProps } from "@/types/about-skill.type";
import { getProfile } from "@/sanity/sanity.query";
import ContentLoader from "../general/ContentLoader";
import dynamic from "next/dynamic";
import { BlurFade } from "../magicui/blur-fade";

const About = dynamic(() => import("./About"));
const Skill = dynamic(() => import("./Skill"));

const AboutWrapper = () => {
  // CUSTOM HOOKS
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isLoading, startTransition] = React.useTransition();
  const [profileData, setProfileData] = React.useState<ProfileResProps | null>(
    null
  );

  // DECLARES
  const isDarkMode = theme === "dark";

  // FUNCTIONS
  const fetchProfileDetails = async () => {
    startTransition(async () => {
      try {
        const res = await getProfile();
        setProfileData(res[0]);
        // console.log(res[0]);
      } catch (err: unknown) {
        // console.error(err);
      }
    });
  };

  // USE EFFECTS
  React.useEffect(() => {
    setIsMounted(true);
    fetchProfileDetails();
  }, []);

  return (
    <div
      className={`w-full min-h-screen relative pb-20 ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      }`}
    >
      {isMounted && isDarkMode && <AboutBackgroundEffect />}

      <TopHeader
        topSubTitle="A bit about"
        title="WHO I AM"
        bottomSubTitle="& what I do"
      />

      <div className="mx-auto mt-24 z-50 relative w-[70%] min-h-72">
        {isLoading ? (
          <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ContentLoader />
          </div>
        ) : (
          profileData && (
            <>
              <About isDarkMode={isDarkMode} profileDetails={profileData} />

              <Skill isDarkMode={isDarkMode} />

              <BlurFade delay={0.25} inView>
                <div className="mt-20 text-center">
                  <p className="italic text-base text-light-600">
                    Additional skills include proficiency Debugging &
                    Optimization
                  </p>
                </div>
              </BlurFade>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default AboutWrapper;
