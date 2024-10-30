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
import type { SVGProps } from "react";

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

export const SvgIcons = {
  typescript: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 128 128"
      {...props}
    >
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  ),
  javascript: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="#f7df1e" d="M0 0h256v256H0z"></path>
      <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
    </svg>
  ),
  html: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.02}
      height={24}
      viewBox="0 0 256 361"
      {...props}
    >
      <path
        fill="#e44d26"
        d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"
      ></path>
      <path
        fill="#f16529"
        d="m128 337.95l84.417-23.403l19.86-222.49H128z"
      ></path>
      <path
        fill="#ebebeb"
        d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"
      ></path>
      <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"></path>
      <path
        fill="#fff"
        d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"
      ></path>
    </svg>
  ),
  css: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#1572b6"
        d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"
      ></path>
      <path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path>
      <path
        fill="#fff"
        d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"
      ></path>
      <path
        fill="#ebebeb"
        d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"
      ></path>
      <path
        fill="#fff"
        d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"
      ></path>
      <path
        fill="#ebebeb"
        d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"
      ></path>
    </svg>
  ),
  sass: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#cb6699"
        fillRule="evenodd"
        d="M1.219 56.156c0 .703.207 1.167.323 1.618c.756 2.933 2.381 5.45 4.309 7.746c2.746 3.272 6.109 5.906 9.554 8.383c2.988 2.148 6.037 4.248 9.037 6.38c.515.366 1.002.787 1.561 1.236c-.481.26-.881.489-1.297.7c-3.959 2.008-7.768 4.259-11.279 6.986c-2.116 1.644-4.162 3.391-5.607 5.674c-2.325 3.672-3.148 7.584-1.415 11.761c.506 1.22 1.278 2.274 2.367 3.053c.353.252.749.502 1.162.6c1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352c4.312-2.976 7.217-6.966 8.466-12.087c.908-3.722.945-7.448-.125-11.153a12 12 0 0 0-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954l.103.088c-.125.409-.258.817-.371 1.23c-.817 2.984-1.36 6.02-1.165 9.117c.208 3.3 1.129 6.389 3.061 9.146c1.562 2.23 5.284 2.313 6.944.075c.589-.795 1.16-1.626 1.589-2.513c1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055c-.064 1.521.025 3.033.545 4.48c.445 1.238 1.202 2.163 2.62 2.326c.97.111 1.743-.333 2.456-.896a10.4 10.4 0 0 0 2.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54c1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671c.61 1.729 1.365 3.417 2.187 5.058c.389.775.344 1.278-.195 1.928c-2.256 2.72-4.473 5.473-6.692 8.223c-.491.607-.98 1.225-1.389 1.888a3.7 3.7 0 0 0-.48 1.364a1.737 1.737 0 0 0 1.383 1.971a9.7 9.7 0 0 0 2.708.193c3.097-.228 5.909-1.315 8.395-3.157c3.221-2.386 4.255-5.642 3.475-9.501c-.211-1.047-.584-2.065-.947-3.074c-.163-.455-.174-.774.123-1.198c2.575-3.677 4.775-7.578 6.821-11.569c.081-.157.164-.314.306-.482c.663 3.45 1.661 6.775 3.449 9.792c-.912.879-1.815 1.676-2.632 2.554c-1.799 1.934-3.359 4.034-4.173 6.595c-.35 1.104-.619 2.226-.463 3.405c.242 1.831 1.742 3.021 3.543 2.604c3.854-.892 7.181-2.708 9.612-5.925c1.636-2.166 1.785-4.582 1.1-7.113c-.188-.688-.411-1.365-.651-2.154c.951-.295 1.878-.649 2.837-.868c4.979-1.136 9.904-.938 14.702.86c2.801 1.05 5.064 2.807 6.406 5.571c1.639 3.379.733 6.585-2.452 8.721c-.297.199-.637.356-.883.605a.87.87 0 0 0-.205.67c.021.123.346.277.533.275c1.047-.008 1.896-.557 2.711-1.121c2.042-1.413 3.532-3.314 3.853-5.817l.063-.188l-.077-1.63c-.031-.094.023-.187.016-.258c-.434-3.645-2.381-6.472-5.213-8.688c-3.28-2.565-7.153-3.621-11.249-3.788a25.4 25.4 0 0 0-9.765 1.503c-.897.325-1.786.71-2.688 1.073c-.121-.219-.251-.429-.358-.646c-.926-1.896-2.048-3.708-2.296-5.882c-.176-1.544-.392-3.086-.025-4.613c.353-1.469.813-2.913 1.246-4.362c.223-.746.066-1.164-.646-1.5a3 3 0 0 0-.786-.258c-1.75-.254-3.476-.109-5.171.384c-.6.175-1.036.511-1.169 1.175c-.076.381-.231.746-.339 1.122c-.443 1.563-.757 3.156-1.473 4.645c-1.794 3.735-3.842 7.329-5.938 10.897c-.227.385-.466.763-.752 1.23c-.736-1.54-1.521-2.922-1.759-4.542c-.269-1.832-.481-3.661-.025-5.479c.339-1.356.782-2.687 1.19-4.025c.193-.636.104-.97-.472-1.305c-.291-.169-.62-.319-.948-.368a11.64 11.64 0 0 0-5.354.438c-.543.176-.828.527-.994 1.087c-.488 1.652-.904 3.344-1.589 4.915c-2.774 6.36-5.628 12.687-8.479 19.013c-.595 1.321-1.292 2.596-1.963 3.882c-.17.326-.418.613-.63.919c-.17-.201-.236-.339-.235-.477c.005-.813-.092-1.65.063-2.436a172 172 0 0 1 1.578-7.099c.47-1.946 1.017-3.874 1.538-5.807c.175-.647.178-1.252-.287-1.796c-.781-.911-2.413-1.111-3.381-.409l-.428.242l.083-.69c.204-1.479.245-2.953-.161-4.41c-.506-1.816-1.802-2.861-3.686-2.803c-.878.027-1.8.177-2.613.497c-3.419 1.34-6.048 3.713-8.286 6.568a2.6 2.6 0 0 1-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41c-2.727-2.224-5.498-4.393-8.244-6.592c-2.434-1.949-4.792-3.979-6.596-6.56c-1.342-1.92-2.207-4.021-2.29-6.395c-.105-3.025.753-5.789 2.293-8.362c1.97-3.292 4.657-5.934 7.611-8.327c3.125-2.53 6.505-4.678 10.008-6.639c4.901-2.743 9.942-5.171 15.347-6.774c5.542-1.644 11.165-2.585 16.965-1.929c2.28.258 4.494.78 6.527 1.895c1.557.853 2.834 1.97 3.428 3.716c.586 1.718.568 3.459.162 5.204c-.825 3.534-2.76 6.447-5.195 9.05c-3.994 4.267-8.866 7.172-14.351 9.091a39.5 39.5 0 0 1-9.765 2.083c-2.729.229-5.401-.013-7.985-.962c-1.711-.629-3.201-1.591-4.399-2.987c-.214-.25-.488-.521-.887-.287c-.391.23-.46.602-.329.979c.219.626.421 1.278.762 1.838c.857 1.405 2.107 2.424 3.483 3.298c2.643 1.681 5.597 2.246 8.66 2.377c4.648.201 9.183-.493 13.654-1.74c6.383-1.78 11.933-4.924 16.384-9.884c3.706-4.13 6.353-8.791 6.92-14.419c.277-2.747-.018-5.438-1.304-7.944c-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274c-3.706 1.349-7.34 2.941-10.868 4.703c-7.683 3.839-14.838 8.468-20.715 14.833c-2.928 3.171-5.407 6.67-6.833 10.79a41 41 0 0 0-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002c-1.858 1.646-3.989 2.818-6.471 3.23c-.9.149-1.821.185-2.694-.188c-1.245-.532-1.524-1.637-1.548-2.814c-.037-1.876.62-3.572 1.521-5.186c1.176-2.104 2.9-3.708 4.741-5.206c2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507M54.303 70.98c-.235 1.424-.529 2.849-.945 4.229c-1.438 4.777-3.285 9.406-5.282 13.973c-.369.845-.906 1.616-1.373 2.417a1.7 1.7 0 0 1-.283.334c-.578.571-1.126.541-1.418-.206c-.34-.868-.549-1.797-.729-2.716c-.121-.617-.092-1.265-.13-1.897c.039-4.494 1.41-8.578 3.736-12.38c.959-1.568 2.003-3.062 3.598-4.054a6.3 6.3 0 0 1 1.595-.706c.85-.239 1.372.154 1.231 1.006m17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203m19.703-4.847c-.436.25-.911.43-1.358.661c-.409.212-.544-.002-.556-.354a2.4 2.4 0 0 1 .093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  react: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 128 128"
      {...props}
    >
      <g fill="#61dafb">
        <circle cx={64} cy={64} r={11.4}></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
      </g>
    </svg>
  ),
  reactNative: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M6.357 9C3.72 9.68 2 10.845 2 12.175C2 14.282 6.405 16 11.85 16c.74 0 1.26-.039 1.95-.097"></path>
        <path d="M9.837 15.9c-.413-.596-.806-1.133-1.18-1.8c-2.751-4.9-3.488-9.77-1.63-10.873c1.15-.697 3.047.253 4.974 2.254"></path>
        <path d="M6.429 15.387c-.702 2.688-.56 4.716.56 5.395c1.783 1.08 5.387-1.958 8.043-6.804q.54-1.005.968-1.978"></path>
        <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85-1.102 1.121-5.972-1.633-10.873c-.384-.677-.777-1.204-1.18-1.8"></path>
        <path d="M17.66 15c2.612-.687 4.34-1.85 4.34-3.176C22 9.714 17.592 8 12.155 8c-.747 0-1.266.029-1.955.087"></path>
        <path d="M8 12c.285-.66.607-1.308.968-1.978c2.647-4.844 6.253-7.89 8.046-6.801c1.11.679 1.262 2.706.56 5.393m-5.314 3.401h-.01c-.01.13-.12.24-.26.24a.263.263 0 0 1-.25-.26c0-.14.11-.25.24-.25h-.01c.13-.01.25.11.25.24"></path>
      </g>
    </svg>
  ),
  next: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 256 256"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosNextjsIcon0"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stopColor="#fff"></stop>
          <stop offset="100%" stopColor="#fff" stopOpacity={0}></stop>
        </linearGradient>
        <linearGradient
          id="logosNextjsIcon1"
          x1="50%"
          x2="49.953%"
          y1="0%"
          y2="73.438%"
        >
          <stop offset="0%" stopColor="#fff"></stop>
          <stop offset="100%" stopColor="#fff" stopOpacity={0}></stop>
        </linearGradient>
        <circle id="logosNextjsIcon2" cx={128} cy={128} r={128}></circle>
      </defs>
      <mask id="logosNextjsIcon3" fill="#fff">
        <use href="#logosNextjsIcon2"></use>
      </mask>
      <g mask="url(#logosNextjsIcon3)">
        <circle cx={128} cy={128} r={128}></circle>
        <path
          fill="url(#logosNextjsIcon0)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
        ></path>
        <path
          fill="url(#logosNextjsIcon1)"
          d="M163.556 76.8h17.067v102.4h-17.067z"
        ></path>
      </g>
    </svg>
  ),
  tailwind: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.9}
      height={24}
      viewBox="0 0 256 154"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosTailwindcssIcon0"
          x1="-2.778%"
          x2="100%"
          y1="32%"
          y2="67.556%"
        >
          <stop offset="0%" stopColor="#2298bd"></stop>
          <stop offset="100%" stopColor="#0ed7b5"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosTailwindcssIcon0)"
        d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
      ></path>
    </svg>
  ),
  firebase: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#ffa000"
        d="M17.474 103.276L33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39l6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714z"
      ></path>
      <path
        fill="#f57c00"
        d="M71.903 64.005L54.955 31.913l-37.481 71.363Z"
      ></path>
      <path
        fill="#ffca28"
        d="M110.577 103.276L98.51 28.604a2.91 2.91 0 0 0-1.984-2.286a2.91 2.91 0 0 0-2.94.714l-76.112 76.243l42.115 23.618a8.73 8.73 0 0 0 8.51 0l42.478-23.618Z"
      ></path>
      <path
        fill="#fff"
        fillOpacity={0.2}
        d="M98.51 28.604a2.91 2.91 0 0 0-1.984-2.286a2.91 2.91 0 0 0-2.94.713L78.479 42.178L66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.91 2.91 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058l.415.204l75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003l.116-.073zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.91 2.91 0 0 1 3.057 1.495l16.292 30.39l6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41L17.61 103.138Z"
      ></path>
      <path
        fill="#a52714"
        d="M68.099 126.18a8.73 8.73 0 0 1-8.51 0l-42.015-23.55l-.102.647l42.115 23.61a8.73 8.73 0 0 0 8.51 0l42.48-23.61l-.11-.67l-42.37 23.575z"
        opacity={0.2}
      ></path>
    </svg>
  ),
  sanity: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 128 128"
      {...props}
    >
      <path fill="#f03e2f" d="M0 0h128v128H0z"></path>
      <path
        fill="#fff"
        d="M39.423 33.163c0 10.998 6.913 17.543 20.754 20.993l14.666 3.341c13.099 2.956 21.075 10.298 21.075 22.258a22.47 22.47 0 0 1-4.884 14.408c0-11.933-6.283-18.38-21.439-22.258l-14.4-3.217c-11.532-2.585-20.432-8.62-20.432-21.612a22.35 22.35 0 0 1 4.66-13.913"
      ></path>
      <path
        fill="#f9b1ab"
        d="M82.022 76.827c6.256 3.932 8.998 9.431 8.998 17.323c-5.177 6.516-14.274 10.173-24.965 10.173c-17.997 0-30.592-8.702-33.391-23.825h17.283c2.225 6.943 8.117 10.16 15.981 10.16c9.6 0 15.982-5.032 16.108-13.859M48.407 49.468a18.2 18.2 0 0 1-6.781-6.935a17.8 17.8 0 0 1-2.203-9.37c4.996-6.462 13.686-10.407 24.28-10.407c18.333 0 28.94 9.513 31.558 22.904H78.635c-1.833-5.28-6.423-9.39-14.792-9.39c-8.942 0-15.044 5.114-15.394 13.198"
      ></path>
    </svg>
  ),
  mongoDB: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none">
        <rect width={256} height={256} fill="#023430" rx={60}></rect>
        <path
          fill="#10aa50"
          d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
        ></path>
        <path
          fill="#b8c4c2"
          d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
        ></path>
        <path
          fill="#12924f"
          d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"
        ></path>
      </g>
    </svg>
  ),
  git: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#f34f29"
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"
      ></path>
    </svg>
  ),
  github: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
      ></path>
    </svg>
  ),
  api: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.53 21.53a.75.75 0 0 1-1.06-1.06l2.01-2.011c-.774-1.073-.908-2.265-.753-3.29c.178-1.172.743-2.2 1.243-2.7l1.5-1.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.061l-1.5 1.5c-.5.5-1.527 1.065-2.699 1.243c-1.025.155-2.217.02-3.29-.754zm7.5-11a.75.75 0 1 1-1.06-1.06L11.44 8l-.47-.47a.75.75 0 0 1 0-1.06l1.5-1.5c.5-.5 1.527-1.065 2.699-1.243c1.025-.155 2.217-.02 3.29.754l2.01-2.011a.75.75 0 1 1 1.061 1.06l-2.01 2.012c.774 1.072.91 2.264.754 3.29c-.178 1.171-.743 2.198-1.243 2.698l-1.5 1.5a.75.75 0 0 1-1.06 0l-.47-.47l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-2.44-2.44z"
      ></path>
    </svg>
  ),
  debug: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.53 21.53a.75.75 0 0 1-1.06-1.06l2.01-2.011c-.774-1.073-.908-2.265-.753-3.29c.178-1.172.743-2.2 1.243-2.7l1.5-1.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.061l-1.5 1.5c-.5.5-1.527 1.065-2.699 1.243c-1.025.155-2.217.02-3.29-.754zm7.5-11a.75.75 0 1 1-1.06-1.06L11.44 8l-.47-.47a.75.75 0 0 1 0-1.06l1.5-1.5c.5-.5 1.527-1.065 2.699-1.243c1.025-.155 2.217-.02 3.29.754l2.01-2.011a.75.75 0 1 1 1.061 1.06l-2.01 2.012c.774 1.072.91 2.264.754 3.29c-.178 1.171-.743 2.198-1.243 2.698l-1.5 1.5a.75.75 0 0 1-1.06 0l-.47-.47l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-2.44-2.44z"
      ></path>
    </svg>
  ),
  optimize: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path d="m3.463 12.86l-.005-.07zm7.264.69l-3.034-3.049l1.014-1.014l3.209 3.225l3.163-3.163l1.014 1.014l-3.034 3.034l3.034 3.05l-1.014 1.014l-3.209-3.225L8.707 17.6l-1.014-1.014l3.034-3.034z"></path>
        <path
          fillRule="evenodd"
          d="M16.933 5.003V6h1.345l2.843-2.842l1.014 1.014l-2.692 2.691l.033.085a13.8 13.8 0 0 1 .885 4.912q0 .503-.034.995l-.005.075h3.54v1.434h-3.72l-.01.058c-.303 1.653-.891 3.16-1.692 4.429l-.06.094l3.423 3.44l-1.017 1.012l-3.274-3.29l-.099.11c-1.479 1.654-3.395 2.646-5.483 2.646c-2.12 0-4.063-1.023-5.552-2.723l-.098-.113l-3.209 3.208l-1.014-1.014l3.366-3.365l-.059-.095c-.772-1.25-1.34-2.725-1.636-4.34l-.01-.057H0V12.93h3.538l-.005-.075a14 14 0 0 1-.034-.995c0-1.743.31-3.39.863-4.854l.032-.084l-2.762-2.776L2.65 3.135L5.5 6h1.427v-.997a5.003 5.003 0 0 1 10.006 0m-8.572 0V6H15.5v-.997a3.569 3.569 0 0 0-7.138 0zm9.8 2.522l-.034-.09H5.733l-.034.09a12.3 12.3 0 0 0-.766 4.335c0 2.76.862 5.201 2.184 6.92c1.32 1.716 3.036 2.649 4.813 2.649s3.492-.933 4.813-2.65c1.322-1.718 2.184-4.16 2.184-6.919c0-1.574-.28-3.044-.766-4.335"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  user: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
