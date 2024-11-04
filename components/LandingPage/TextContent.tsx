import React from "react";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import ShineBorder from "../magicui/shine-border";
import { BoxReveal } from "../magicui/box-reveal";
import { urlForPDF } from "@/sanity/sanity.client";
import { HomeProps } from "@/types/home.type";

const TextContent: React.FC<HomeProps> = ({ isDarkMode, content }) => {
  // DECLARES
  const { resumeURL, heroText1, heroText2, firstText, secondText, github } =
    content;
  const boxRevealColor = "#cd8aee";

  return (
    <div className="w-full flex flex-col items-center justify-center relative z-20 mt-16">
      <BoxReveal boxColor={boxRevealColor} duration={0.5}>
        <p className={`text-sm text-left md:text-xl font-light`}>{firstText}</p>
      </BoxReveal>

      <BoxReveal boxColor={boxRevealColor} duration={0.5}>
        <AnimatedGradientText>
          <h1
            className={cn(
              `inline animate-gradient text-3xl uppercase md:text-7xl mt-2 md:mt-5 font-sans bg-gradient-to-r from-[#ffaa40] via-primary-600 to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            {heroText1}
          </h1>
        </AnimatedGradientText>
      </BoxReveal>

      <div className="w-[70%] mx-auto">
        <BoxReveal boxColor={boxRevealColor} duration={0.5}>
          <AnimatedShinyText
            className={`transition ease-out ${isDarkMode ? "text-light-100/70" : "text-dark-400/70"} mt-2 md:mt-5 pb-2  text-center`}
          >
            <span
              className={`font-medium md:font-semibold text-xl md:text-5xl text-center`}
            >
              {heroText2}
            </span>
          </AnimatedShinyText>
        </BoxReveal>
      </div>

      <div className="w-[70%] md:w-[50%] mx-auto">
        <BoxReveal boxColor={boxRevealColor} duration={0.5}>
          <p
            className={`px-2 md:px-0 leading-6 md:leading-7 text-center text-sm md:text-lg font-light mt-2 md:mt-5`}
          >
            {secondText}
          </p>
        </BoxReveal>
      </div>

      <BoxReveal boxColor={boxRevealColor} duration={0.5}>
        <div className="flex flex-col md:flex-row mt-6 md:mt-8 gap-x-8 gap-y-4 items-center justify-center text-left">
          <button
            className={`rounded-full w-[150px] md:w-[200px] hover:border-2 hover:border-[#ffaa40] duration-300 ${isDarkMode ? "bg-dark-400/20 backdrop-blur-sm" : "bg-dark-200"}  text-light-600 h-[55px] md:h-[65px] text-center font-medium relative `}
          >
            <Link
              href={urlForPDF(resumeURL)}
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base"
            >
              View Resumé
            </Link>
          </button>

          <button className={`w-[150px] md:w-[200px] overflow-hidden relative`}>
            <Link href={github} target="_blank" rel="noreferrer">
              <ShineBorder
                borderRadius={60}
                className={`w-full h-[55px] text-sm md:text-base md:h-[65px] bg-transparent ${isDarkMode ? "text-light-600 hover:bg-dark-200/20 backdrop-blur-sm " : "text-dark-300 hover:bg-light-400/20"} duration-300 text-center font-medium`}
                color={["#4ecdc4", "#FE8FB5", "#ffaa40"]}
              >
                View GitHub
              </ShineBorder>
            </Link>
          </button>
        </div>
      </BoxReveal>
    </div>
  );
};

export default TextContent;
