"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import { businessInfo } from "@/data/business";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 20;
      if (pathname === "/") {
        const hero = document.getElementById("hero");
        if (hero) {
          threshold = Math.max(hero.offsetHeight - 80, 400);
        } else {
          threshold = Math.max(window.innerHeight * 0.75, 400);
        }
      }
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          isTransparent
            ? "bg-transparent py-5"
            : "bg-paper/95 backdrop-blur-md border-b border-borderLight shadow-sm py-3.5"
        )}
      >
        <div className="max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest/20 rounded"
            aria-label="Shree Ganesh Nursery & Farm Home"
          >
            {/* Desktop Full Logo with smooth cross-fade */}
            <div className="hidden sm:block relative w-[210px] h-[50px]">
              <Image
                src="/images/brand/logo-full-light.png"
                alt="Shree Ganesh Nursery & Farm"
                fill
                priority
                className={cn(
                  "object-contain object-left transition-opacity duration-300",
                  isTransparent ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              />
              <Image
                src="/images/brand/logo-full.png"
                alt="Shree Ganesh Nursery & Farm"
                fill
                priority
                className={cn(
                  "object-contain object-left transition-opacity duration-300",
                  isTransparent ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              />
            </div>

            {/* Mobile Compact Icon + Text */}
            <div className="flex sm:hidden items-center gap-2.5">
              <div className="relative w-9 h-9">
                <Image
                  src="/images/brand/logo-icon.png"
                  alt="Shree Ganesh Logo Mark"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className={cn(
                    "font-serif text-base font-bold leading-tight transition-colors duration-300",
                    isTransparent ? "text-paper" : "text-forest"
                  )}
                >
                  Shree Ganesh
                </span>
                <span
                  className={cn(
                    "text-[10px] tracking-wider uppercase font-medium transition-colors duration-300",
                    isTransparent ? "text-pale/85" : "text-ink-muted"
                  )}
                >
                  Nursery & Farm
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {mainNavLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-300",
                    isTransparent
                      ? isActive
                        ? "text-paper font-semibold"
                        : "text-paper/85 hover:text-white"
                      : isActive
                      ? "text-forest font-semibold"
                      : "text-ink/80 hover:text-forest"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-colors duration-300",
                        isTransparent ? "bg-paper" : "bg-forest"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={businessInfo.contact.phoneHref}
              className={cn(
                "hidden sm:inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 py-2 px-3 rounded-full",
                isTransparent
                  ? "text-paper/90 hover:text-white hover:bg-white/10"
                  : "text-ink-muted hover:text-forest hover:bg-pale/40"
              )}
              aria-label="Call nursery directly"
            >
              <Phone
                className={cn(
                  "w-3.5 h-3.5 transition-colors duration-300",
                  isTransparent ? "text-emerald-300" : "text-forest"
                )}
              />
              <span>{businessInfo.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow",
                isTransparent
                  ? "bg-paper text-forest hover:bg-pale font-bold"
                  : "bg-forest hover:bg-forest-dark text-paper font-semibold"
              )}
            >
              Enquire Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 transition-colors duration-300",
                isTransparent
                  ? "text-paper hover:bg-white/10 focus:ring-white/30"
                  : "text-forest hover:bg-pale/50 focus:ring-forest/30"
              )}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
