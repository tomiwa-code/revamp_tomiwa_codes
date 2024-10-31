import HomeWrapper from "@/components/LandingPage/HomeWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomiwa-codes.vercel.app"),
  description: "Tomiwa-codes portfolio | Home",
  title: "Home | Tomiwa-codes",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tomiwa-codes",
    "Tomiwa",
    "Ogunbase",
    "Ayoola",
    "Adetomiwa",
    "tomiwa code homepage",
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
    description: "Tomiwa-codes portfolio | Home",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "Tomiwa-codes portfolio | Home",
    url: "https://tomiwa-codes.vercel.app",
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

export default function Home() {
  return <HomeWrapper />;
}
