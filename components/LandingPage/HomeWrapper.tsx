"use client";
import { useTheme } from "@/context/Theme.Context";
import React from "react";
// import SocialDock from "../general/SocialDock";
import TextContent from "./TextContent";
import dynamic from "next/dynamic";
import { getHero } from "@/sanity/sanity.query";
import { HomeResProp } from "@/types/home.type";

const HomeBackgroundEffect = dynamic(() => import("./HomeBackgroundEffect"));
const SocialDock = dynamic(() => import("../general/SocialDock"));

const HomeWrapper = () => {
  // REACT HOOKS
  const [isMounted, setIsMounted] = React.useState(false);
  const [isLoading, startTransition] = React.useTransition();
  const [heroData, setHeroData] = React.useState<HomeResProp | null>(null);

  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  // FUNCTIONS
  const fetchLandingPageContent = async () => {
    startTransition(async () => {
      try {
        const res = await getHero();
        setHeroData(res[0]);
      } catch (err: unknown) {
        console.error(err);
      }
    });
  };

  // USE EFFECTS
  React.useEffect(() => {
    setIsMounted(true);
    fetchLandingPageContent();
  }, []);

  return (
    <div
      className={`flex ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      } items-center justify-center h-screen`}
    >
      <div className="w-full flex h-screen items-center justify-center relative overflow-hidden">
        {isMounted && <HomeBackgroundEffect isDarkMode={isDarkMode} />}

        {isLoading ? (
          <p>Fetching Content</p>
        ) : (
          heroData && <TextContent isDarkMode={isDarkMode} content={heroData} />
        )}

        {isMounted && <SocialDock />}
      </div>
    </div>
  );
};

export default HomeWrapper;
