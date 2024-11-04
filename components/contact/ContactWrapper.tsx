"use client";
import React from "react";
import ContactBackgroundEffect from "./ContactBackgroundEffect";
import TopHeader from "../general/TopHeader";
import ContactForm from "./ContactForm";
import { useTheme } from "@/context/Theme.Context";
import { FadeText } from "../magicui/fade-text";
import { BlurFade } from "../magicui/blur-fade";

const ContactWrapper = () => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-full min-h-screen relative pb-12 md:pb-20 ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      }`}
    >
      {isDarkMode && <ContactBackgroundEffect />}

      <TopHeader
        topSubTitle="Interested in working together?"
        title="LET'S CONNECT"
        bottomSubTitle="I’d love to hear from you"
      />

      <BlurFade yOffset={10} delay={0 * 3} inView>
        <ContactForm isDarkMode={isDarkMode} />
      </BlurFade>

      <div className="mt-8 md:mt-20 w-[70%] mx-auto md:[50%] relative z-50 flex items-center justify-center">
        <FadeText
          className={`${
            isDarkMode ? "text-light-600 font-light" : "text-dark-100"
          } text-xs leading-5 md:text-sm text-center w-full block`}
          text={
            "I am open to remote and onsite full-time, part-time, and contract frontend web & mobile development jobs."
          }
        />
      </div>
    </div>
  );
};

export default ContactWrapper;
