import AboutWrapper from "@/components/about-skill/AboutWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Adetomiwa Ogunbase, I create stunning websites.",
  metadataBase: new URL("https://tomiwa-codes.vercel.app/about-skills"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tomiwa-codes",
    "Tomiwa",
    "Ogunbase",
    "Ayoola",
    "Adetomiwa",
    "Trending portfolio",
    "Web developer portfolio",
    "portfolio",
    "portfolio inspiration",
    "Portfolio website",
  ],
  authors: [
    { name: "Tomiwa" },
    { name: "Tomiwa", url: "https://tomiwa-codes.vercel.app/about-skills" },
  ],
  creator: "Tomiwa Ogunbase",
  twitter: {
    images: [process.env.NEXT_PUBLIC_SEO_IMAGE_URL as string],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description: "I'm Adetomiwa Ogunbase, I create stunning Mobile & Web apps.",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "I'm Adetomiwa Ogunbase, I create stunning Mobile & Web apps.",
    url: "https://tomiwa-codes.vercel.app/about-skills",
    siteName: "Tomiwa-codes",
    images: [process.env.NEXT_PUBLIC_SEO_IMAGE_URL as string],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

const About = () => {
  return <AboutWrapper />;
};

export default About;
