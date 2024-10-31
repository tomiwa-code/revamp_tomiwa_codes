import ProjectsWrapper from "@/components/projects/ProjectsWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I have worked on so far",
  metadataBase: new URL("https://tomiwa-codes.vercel.app/projects"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tomiwa-codes",
    "Tomiwa",
    "Ogunbase",
    "Ayoola",
    "Adetomiwa",
    "tomiwa code projects",
    "Trending portfolio",
    "Web developer portfolio",
    "portfolio",
    "portfolio inspiration",
    "Portfolio website",
  ],
  authors: [
    { name: "Tomiwa" },
    { name: "Tomiwa", url: "https://tomiwa-codes.vercel.app/about" },
  ],
  creator: "Tomiwa Ogunbase",
  twitter: {
    images: [process.env.NEXT_PUBLIC_SEO_IMAGE_URL as string],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description: "Projects I have worked on so far",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "Projects I have worked on so far",
    url: "https://tomiwa-codes.vercel.app/projects",
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

const Projects = () => {
  return <ProjectsWrapper />;
};

export default Projects;
