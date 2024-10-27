"use client";
import { useTheme } from "@/context/Theme.Context";
import React from "react";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import ShineBorder from "../magicui/shine-border";
import SocialDock from "../general/SocialDock";
import HomeBackgroundEffect from "./HomeBackgroundEffect";

const HomeWrapper = () => {
  // REACT HOOKS

  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`flex ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      } items-center justify-center h-screen`}
    >
      <div className="w-full flex h-screen items-center justify-center relative overflow-hidden">
        <HomeBackgroundEffect isDarkMode={isDarkMode} />

        <div className="w-full flex flex-col items-center justify-center relative z-20">
          <p className={`text-sm text-left md:text-xl font-light`}>Hi, I'm</p>

          <AnimatedGradientText>
            <h1
              className={cn(
                `inline animate-gradient uppercase text-7xl mt-5 font-sans bg-gradient-to-r from-[#ffaa40] via-primary-600 to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              TOOMIWA
            </h1>
          </AnimatedGradientText>

          <AnimatedShinyText
            className={`transition ease-out ${isDarkMode ? "text-light-100/70" : "text-dark-400/70"} mt-5 pb-2 w-[70%] text-center`}
          >
            <span
              className={`font-medium md:font-semibold text-2xl md:text-5xl text-center`}
            >
              I build engaging, user-centered digital experiences.
            </span>
          </AnimatedShinyText>

          <p
            className={`md:w-[50%] px-2 md:px-0 text-center text-sm md:text-lg font-light mt-5`}
          >
            a developer with a passion for building visually engaging,
            user-centered web and mobile experiences. With a focus on intuitive
            design and smooth performance.
          </p>

          <div className="flex mt-8 gap-x-8 items-center justify-center text-left">
            <button
              className={`rounded-full w-[200px] hover:border-2 hover:border-[#ffaa40] duration-300 ${isDarkMode ? "bg-dark-400/20 backdrop-blur-sm" : "bg-dark-200"}  text-light-600 h-[65px] text-center font-medium relative `}
            >
              <Link
                // href={urlForPDF(resumeURL)}
                href={"/resume"}
                target="_blank"
                rel="noreferrer"
              >
                View Resumé
              </Link>
            </button>

            <button className={`w-[200px] overflow-hidden relative`}>
              <Link
                href="https://github.com/tomiwa-code"
                target="_blank"
                rel="noreferrer"
              >
                <ShineBorder
                  borderRadius={60}
                  className={`w-full h-[65px] bg-transparent ${isDarkMode ? "text-light-600 hover:bg-dark-200/20 backdrop-blur-sm " : "text-dark-300 hover:bg-light-400/20"} duration-300 text-center font-medium`}
                  color={["#4ecdc4", "#FE8FB5", "#ffaa40"]}
                >
                  View GitHub
                </ShineBorder>
              </Link>
            </button>
          </div>
        </div>
        <SocialDock />
      </div>
    </div>
  );
};

export default HomeWrapper;
