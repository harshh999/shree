"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, isReducedMotion } from "@/lib/animations";
import { businessInfo } from "@/data/business";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imageRef.current,
        { scale: 1.15, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.6 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=1.1"
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-forest-dark text-paper pt-32 pb-20 md:pb-28"
    >
      {/* Background Hero Image with Organic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef}
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2000&q=85"
          alt="Lush green botanical plants at Shree Ganesh Nursery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Editorial Gradients for Deep Botanical Mood & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-dark/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-container mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Brand Tag */}
          <div ref={badgeRef} className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-pale bg-forest/80 border border-pale/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Plants · Gardening · Landscaping · Rentals
            </span>
            <span className="hidden sm:inline-block text-xs font-medium text-pale/70 tracking-wider">
              Bodakdev, Ahmedabad
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-paper mb-6"
          >
            Bring nature{" "}
            <span className="italic font-normal text-pale font-serif block sm:inline">
              closer to home.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={descRef}
            className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            From everyday balcony plants to complete landscape transformations, discover everything you need to grow greener, living spaces in Ahmedabad and beyond.
          </p>

          {/* Actions */}
          <div
            ref={actionsRef}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/plants"
              className="inline-flex items-center justify-center gap-2.5 bg-paper text-forest hover:bg-pale font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Explore Plants</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={businessInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-forest/70 hover:bg-forest text-paper border border-pale/30 hover:border-pale font-semibold text-sm sm:text-base px-6 py-4 rounded-full transition-all duration-300 backdrop-blur-sm active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-pale hover:text-paper font-semibold text-sm px-4 py-3 underline-offset-8 hover:underline transition-colors"
            >
              Visit Nursery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
