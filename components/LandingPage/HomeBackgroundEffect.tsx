import React from "react";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";

type Props = {
  isDarkMode: boolean;
};

const HomeBackgroundEffect = ({ isDarkMode }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <div
        className={`inset-0 bg-gradient-to-b from-transparent ${isDarkMode ? "via-dark-100 to-dark-100" : "via-light-100 to-light-100"} absolute z-10`}
      />
      <div
        className={`absolute w-full h-full z-0 bg-primary-600 bg-opacity-15 ${!isDarkMode ? "opacity-20" : ""}`}
      >
        <AnimatedGridPattern
          width={120}
          height={120}
          duration={3}
          numSquares={100}
        />
      </div>
    </div>
  );
};

export default HomeBackgroundEffect;
