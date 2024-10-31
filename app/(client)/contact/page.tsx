import ContactWrapper from "@/components/contact/ContactWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Fastest way to contact me, and get reply in 24hrs",
  metadataBase: new URL("https://tomiwa-codes.vercel.app/about"),
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
    { name: "Tomiwa", url: "https://tomiwa-codes.vercel.app/about" },
  ],
  creator: "Tomiwa Ogunbase",
  twitter: {
    images: [process.env.NEXT_PUBLIC_SEO_IMAGE_URL as string],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description: "Fastest way to contact me, and get reply in 24hrs",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "Fastest way to contact me, and get reply in 24hrs",
    url: "https://tomiwa-codes.vercel.app/about",
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

const Contact = () => {
  return <ContactWrapper />;
};

export default Contact;
