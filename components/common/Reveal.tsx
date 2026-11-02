"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  y = 32,
  direction = "up",
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current) return;

      let fromVars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      };

      if (direction === "up") fromVars.y = y;
      else if (direction === "down") fromVars.y = -y;
      else if (direction === "left") fromVars.x = y;
      else if (direction === "right") fromVars.x = -y;

      gsap.from(containerRef.current, fromVars);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
