"use client";
import { useTheme } from "@/context/Theme.Context";
import React from "react";
import TextContent from "./TextContent";
import dynamic from "next/dynamic";
import { getHero, getSocialLinks } from "@/sanity/sanity.query";
import { HomeResProp, SocialLinkRes } from "@/types/home.type";
import ContentLoader from "../general/ContentLoader";

const HomeBackgroundEffect = dynamic(() => import("./HomeBackgroundEffect"));
const SocialDock = dynamic(() => import("../general/SocialDock"));

const HomeWrapper = () => {
  // REACT HOOKS
  const [isLoading, startTransition] = React.useTransition();
  const [heroData, setHeroData] = React.useState<HomeResProp | null>(null);
  const [socialLinks, setSocialLinks] = React.useState<SocialLinkRes | null>(
    null
  );

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
        // console.error(err);
      }
    });
  };

  const fetchSocialLinks = async () => {
    try {
      const res = await getSocialLinks();
      setSocialLinks(res[0]?.socialLinks);
    } catch (err: unknown) {
      // console.error(err);
    }
  };

  // USE EFFECTS
  React.useEffect(() => {
    fetchLandingPageContent();
    fetchSocialLinks();
  }, []);

  return (
    <div
      className={`flex flex-col pb-5 md:pb-10 ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      } items-center justify-center h-screen`}
    >
      <div className="w-full flex h-screen items-center justify-center relative overflow-hidden">
        <HomeBackgroundEffect isDarkMode={isDarkMode} />

        {isLoading ? (
          <ContentLoader />
        ) : (
          heroData && <TextContent isDarkMode={isDarkMode} content={heroData} />
        )}
      </div>
      {socialLinks && <SocialDock socialLinks={socialLinks} />}
    </div>
  );
};

export default HomeWrapper;
