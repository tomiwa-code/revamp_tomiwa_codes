"use client";
import { useTheme } from "@/context/Theme.Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const Navbar = () => {
  // HOOKS
  const pathname = usePathname();
  const { theme } = useTheme();

  // DECLARES
  const linkArr = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About & Skills", path: "/about-skills" },
    { name: "Contact", path: "/contact" },
  ];

  // FUNCTIONS
  const getLinkClasses = (path: string, pathname: string) => {
    const isActive = path === pathname;
    const themeDark = theme === "dark";
    const themeLight = theme === "light";
    const activeClass = "line-through decoration-2";
    const baseClasses = "relative navbar-link";

    const activeClasses = isActive
      ? themeDark
        ? `${activeClass} text-primary-600`
        : `${activeClass} text-dark-100`
      : themeLight
        ? "before:bg-dark-100 text-dark-300"
        : "before:bg-primary-600 text-gray-200";

    return `${baseClasses} ${activeClasses}`;
  };

  // STYLES
  const listStyles = `list-none -rotate-90`;
  const lineStyles = `w-0.5 ${
    theme === "dark" ? "bg-gray-200" : "bg-dark-100"
  } h-[120px] md:h-1/4`;

  return (
    <div className="fixed -ml-3 md:ml-0 md:px-6 flex flex-col items-center justify-between h-screen z-[9999]">
      {/* LINE  */}
      <div className={`${lineStyles}`} />

      {/* LINKS  */}
      <div className="flex flex-col items-center justify-between h-[350px]">
        {linkArr.reverse().map(({ name, path }, idx) => (
          <li
            className={`${listStyles} ${path === "/about-skills" ? "mt-4" : ""} ${path === "/projects" ? "mt-5" : ""}`}
            key={idx}
          >
            <Link href={`${path}`} className={getLinkClasses(path, pathname)}>
              {name}
            </Link>
          </li>
        ))}
      </div>

      {/* LINE  */}
      <div className={`${lineStyles}`} />
    </div>
  );
};

export default Navbar;
