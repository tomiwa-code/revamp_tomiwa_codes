import React from "react";
import { Dock, DockIcon } from "../ui/dock";
import Link from "next/link";
import { icons } from "@/lib/constants/icon";
import { useTheme } from "@/context/Theme.Context";

type Props = {};

const SocialDock = (props: Props) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // DECLARES
  const isDarkMode = theme === "dark";

  // STYLES
  const dockIconStyles = `${isDarkMode ? "bg-black/10" : "bg-dark-200"} p-3`;

  return (
    <div className="absolute bottom-16 z-[90]">
      <Dock magnification={60} distance={100}>
        <DockIcon className={`${dockIconStyles}`}>
          <Link href={`#`}>
            {icons["github"]({ className: "text-primary-100" })}
          </Link>
        </DockIcon>
        <DockIcon className={`${dockIconStyles}`}>
          <Link href={`#`}>
            {icons["linkedin"]({ className: "text-primary-100" })}
          </Link>
        </DockIcon>
        <DockIcon className={`${dockIconStyles}`}>
          <Link href={`#`}>
            {icons["tiktok"]({ className: "text-primary-100" })}
          </Link>
        </DockIcon>
        <DockIcon className={`${dockIconStyles}`}>
          <Link href={`#`}>
            {icons["x"]({ className: "text-primary-100" })}
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default SocialDock;
