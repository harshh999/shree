"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, isReducedMotion } from "@/lib/animations";

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export function StatCounter({ value, suffix = "", prefix = "", label, description }: StatItemProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!numberRef.current || isReducedMotion()) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.floor(obj.val).toLocaleString();
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="py-6 md:py-8">
      <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest tracking-tight font-normal leading-none mb-2">
        <span>{prefix}</span>
        <span ref={numberRef}>{value.toLocaleString()}</span>
        <span>{suffix}</span>
      </div>
      <h3 className="font-sans font-bold text-ink text-base sm:text-lg mb-1">{label}</h3>
      {description && <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">{description}</p>}
    </div>
  );
}
