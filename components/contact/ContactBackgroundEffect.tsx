import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "../ui/grid-pattern";

const ContactBackgroundEffect = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0">
      <div className="w-full h-full bg-gradient-to-b from-transparent via-dark-100 from-30%  to-dark-100 absolute z-10" />
      <div className="inset-0 bg-gradient-to-r from-dark-100 via-transparent to-transparent absolute z-10" />
      <div className="inset-0 bg-gradient-to-l from-dark-100 via-transparent to-transparent absolute z-10" />

      <div className="absolute w-full h-full z-0 bg-primary-600 bg-opacity-15">
        <GridPattern
          width={120}
          height={120}
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
};

export default ContactBackgroundEffect;
