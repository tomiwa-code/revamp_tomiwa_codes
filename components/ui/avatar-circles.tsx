"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { ContributorsType } from "@/types/project.type";
import Link from "next/link";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: ContributorsType[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  const defaultImageUrl =
    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1730145836/my-portfolio/Default_avatar_icon_vector_of_social_media_user_lgrmje.jpg";

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.slice(0, 3).map(({ imageurl, name, github }, index) => (
        <Link
          key={index}
          href={github ?? "/projects"}
          target="_blank"
          rel="noreferrer"
          className="relative group"
        >
          <CldImage
            key={index}
            className="h-10 w-10 rounded-full border-2 border-white-600"
            src={imageurl ?? defaultImageUrl}
            width={40}
            height={40}
            alt={`Avatar of ${name}`}
            priority
          />
          <span className="w-[80px] items-center flex justify-center absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-light-600 bg-dark-200 backdrop-blur-m bg-opacity-90 font-medium rounded-md opacity-0 group-hover:opacity-100 capitalize transition-opacity duration-300">
            {name}
          </span>
        </Link>
      ))}
      {numPeople && numPeople - 3 > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-500 text-center z-20 relative text-xs font-medium text-white">
          <p>+{numPeople - 3}</p>
        </div>
      )}
    </div>
  );
};

export default AvatarCircles;
