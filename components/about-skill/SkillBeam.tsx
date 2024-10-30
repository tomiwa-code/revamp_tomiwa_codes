"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { SvgIcons } from "@/lib/constants/icon";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-light-100 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SandDBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between max-w-lg">
        <div className="flex flex-col justify-center gap-y-6">
          <Circle ref={div1Ref} className="size-16">
            <SvgIcons.firebase width={100} height={100} />
          </Circle>

          <Circle ref={div2Ref} className="size-16">
            <SvgIcons.mongoDB width={100} height={100} />
          </Circle>

          <Circle ref={div3Ref} className="size-16">
            <SvgIcons.sanity width={100} height={100} />
          </Circle>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Circle ref={div4Ref} className="size-16">
            <SvgIcons.user width={100} height={100} color="#282828" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
    </div>
  );
}

export function FrontendDevBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-y-40 max-w-lg">
        <div className="flex justify-center gap-x-12">
          <Circle ref={div1Ref} className="size-20">
            <SvgIcons.react width={100} height={100} />
          </Circle>

          <Circle ref={div2Ref} className="size-20">
            <SvgIcons.next width={100} height={100} />
          </Circle>

          <Circle ref={div3Ref} className="size-20">
            <SvgIcons.reactNative width={100} height={100} color="#282828 " />
          </Circle>

          <Circle ref={div4Ref} className="size-20">
            <SvgIcons.javascript width={100} height={100} />
          </Circle>

          <Circle ref={div5Ref} className="size-20">
            <SvgIcons.typescript width={100} height={100} />
          </Circle>

          <Circle ref={div8Ref} className="size-20">
            <SvgIcons.html width={100} height={100} />
          </Circle>

          <Circle ref={div9Ref} className="size-20">
            <SvgIcons.css width={100} height={100} />
          </Circle>

          <Circle ref={div10Ref} className="size-20">
            <SvgIcons.sass width={100} height={100} />
          </Circle>

          <Circle ref={div11Ref} className="size-20">
            <SvgIcons.tailwind width={100} height={100} />
          </Circle>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Circle ref={div6Ref} className="size-20">
            <SvgIcons.user width={100} height={100} color="#282828"  />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div6Ref}
        curvature={-200}
        startYOffset={25}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

export function IntegratingApiBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between">
        <div className="flex justify-between">
          <Circle ref={div1Ref} className="size-16">
            <p className="font-bold text-3xl mt-1 text-dark-200">FE</p>
          </Circle>

          <Circle ref={div2Ref} className="size-16">
            <SvgIcons.api width={100} height={100} color="#282828 " />
          </Circle>

          <Circle ref={div3Ref} className="size-16">
            <p className="font-bold text-3xl mt-1 text-dark-200">BE</p>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div2Ref}
        reverse
      />
    </div>
  );
}

export function VersionControlBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref} className="size-16">
            <SvgIcons.git width={100} height={100} />
          </Circle>
          <Circle ref={div2Ref} className="size-16">
            <SvgIcons.github width={100} height={100} color="#282828" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
}
