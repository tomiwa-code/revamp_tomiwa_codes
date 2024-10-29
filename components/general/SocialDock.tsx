import React from "react";
import { Dock, DockIcon } from "../ui/dock";
import Link from "next/link";
import { icons } from "@/lib/constants/icon";
import { useTheme } from "@/context/Theme.Context";
import { BlurFade } from "../magicui/blur-fade";
import { SocialLinkRes } from "@/types/home.type";

type SocialDockProps = {
  socialLinks: SocialLinkRes;
};

const SocialDock = ({ socialLinks }: SocialDockProps) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const { github, twitter, linkedin, tiktok } = socialLinks;
  const isDarkMode = theme === "dark";

  // STYLES
  const dockIconStyles = `${isDarkMode ? "bg-black/10" : "bg-dark-200"} p-3`;

  return (
    <div className="absolute bottom-16 z-[90]">
      <BlurFade delay={0 * 3} inView>
        <Dock magnification={60} distance={100}>
          <DockIcon className={`${dockIconStyles}`}>
            <Link href={github} aria-hidden="true">
              {icons["github"]({ className: "text-primary-100" })}
            </Link>
          </DockIcon>
          <DockIcon className={`${dockIconStyles}`}>
            <Link href={linkedin} aria-hidden="true">
              {icons["linkedin"]({ className: "text-primary-100" })}
            </Link>
          </DockIcon>
          <DockIcon className={`${dockIconStyles}`}>
            <Link href={tiktok} aria-hidden="true">
              {icons["tiktok"]({ className: "text-primary-100" })}
            </Link>
          </DockIcon>
          <DockIcon className={`${dockIconStyles}`}>
            <Link href={twitter} aria-hidden="true">
              {icons["x"]({ className: "text-primary-100" })}
            </Link>
          </DockIcon>
        </Dock>
      </BlurFade>
    </div>
  );
};

export default SocialDock;
