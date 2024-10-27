"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.slice(0, 3).map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full border-2 border-white-600"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople && numPeople - 3 > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-300 text-center text-xs font-medium text-white">
          <p>+{numPeople - 3}</p>
        </div>
      )}
    </div>
  );
};

export default AvatarCircles;
