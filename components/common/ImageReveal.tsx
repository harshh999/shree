"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  className = "",
  containerClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current || !imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
        { scale: 1.12, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-pale/30 rounded-sm",
        fill && "w-full h-full",
        containerClassName
      )}
    >
      {fill ? (
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover transition-transform duration-700 ease-out", className)}
        />
      ) : (
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          priority={priority}
          sizes={sizes}
          className={cn("object-cover transition-transform duration-700 ease-out", className)}
        />
      )}
    </div>
  );
}
