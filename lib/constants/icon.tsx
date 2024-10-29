import { BiLogoTypescript } from "react-icons/bi";
import {
  SiCloudinary,
  SiMongodb,
  SiSanity,
  SiSwr,
  SiVite,
} from "react-icons/si";
import { CgFramer } from "react-icons/cg";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  FaReact,
  FaXTwitter,
  FaWandMagicSparkles,
  FaCss3,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineTikTok } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

type IconType = {
  className: string;
  style?: React.CSSProperties;
};

export const icons = {
  next: (props: IconType) => <RiNextjsLine {...props} />,
  react: (props: IconType) => <FaReact {...props} />,
  reactNative: (props: IconType) => <FaReact {...props} />,
  tailwind: (props: IconType) => <RiTailwindCssFill {...props} />,
  typescript: (props: IconType) => <BiLogoTypescript {...props} />,
  sanity: (props: IconType) => <SiSanity {...props} />,
  framer: (props: IconType) => <CgFramer {...props} />,
  vite: (props: IconType) => <SiVite {...props} />,
  node: (props: IconType) => <IoLogoNodejs {...props} />,
  swr: (props: IconType) => <SiSwr {...props} />,
  mongoDB: (props: IconType) => <SiMongodb {...props} />,
  firebase: (props: IconType) => <IoLogoFirebase {...props} />,
  cloudinary: (props: IconType) => <SiCloudinary {...props} />,
  github: (props: IconType) => <FiGithub {...props} />,
  linkedin: (props: IconType) => <TfiLinkedin {...props} />,
  tiktok: (props: IconType) => <AiOutlineTikTok {...props} />,
  x: (props: IconType) => <FaXTwitter {...props} />,
  magic: (props: IconType) => <FaWandMagicSparkles {...props} />,
  exLink: (props: IconType) => <GoLinkExternal {...props} />,
  moon: (props: IconType) => <BsMoonFill {...props} />,
  sun: (props: IconType) => <BsSunFill {...props} />,
  css: (props: IconType) => <FaCss3 {...props} />,
};

export const iconValue = {
  next: "Next JS",
  react: "React",
  reactNative: "React Native",
  tailwind: "Tailwind CSS",
  typescript: "TypeScript",
  sanity: "Sanity",
  framer: "Framer",
  vite: "Vite JS",
  node: "Node JS",
  swr: "SWR",
  mongoDB: "MongoDB",
  firebase: "Firebase",
  cloudinary: "Cloudinary",
  github: "Github",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
  x: "Twitter",
  magic: "Magic UI",
  exLink: "External Link",
  moon: "Dark Mode",
  sun: "Light Mode",
  css: "CSS",
};
