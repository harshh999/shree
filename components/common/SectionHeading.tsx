import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "split";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  dark = false,
}: SectionHeadingProps) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16",
          className
        )}
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <span
              className={cn(
                "inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4",
                dark ? "text-sage-light" : "text-forest"
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]",
              dark ? "text-paper" : "text-ink"
            )}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p
            className={cn(
              "max-w-md text-base leading-relaxed md:pb-2",
              dark ? "text-paper/75" : "text-ink-muted"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4",
            dark ? "text-sage-light" : "text-forest"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-5",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-paper/75" : "text-ink-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
