"use client";
import React from "react";
import ContactBackgroundEffect from "./ContactBackgroundEffect";
import TopHeader from "../general/TopHeader";
import ContactForm from "./ContactForm";
import { useTheme } from "@/context/Theme.Context";

type Props = {};

const ContactWrapper = (props: Props) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-full min-h-screen relative pb-20 ${
        isDarkMode ? "bg-dark-100 text-light-100" : "text-dark-100 bg-light-200"
      }`}
    >
      {isDarkMode && <ContactBackgroundEffect />}

      <TopHeader
        topSubTitle="Interested in working together?"
        title="LET'S COONECT"
        bottomSubTitle="I’d love to hear from you"
      />

      <ContactForm isDarkMode={isDarkMode} />

      <div className="mt-20 w-full relative z-50">
        <p
          className={`text-sm ${isDarkMode ? "text-light-600" : "text-dark-300"} font-medium text-center`}
        >
          I am open to remote and onsite full-time, part-time, and contract
          frontend web & mobile development jobs.
        </p>
      </div>
    </div>
  );
};

export default ContactWrapper;
