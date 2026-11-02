"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-paper/95 backdrop-blur-md border-b border-borderLight shadow-sm py-3.5"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest/20 rounded"
            aria-label="Shree Ganesh Nursery & Farm Home"
          >
            {/* Desktop Full Logo */}
            <div className="hidden sm:block relative w-[210px] h-[50px]">
              <Image
                src="/images/brand/logo-full.png"
                alt="Shree Ganesh Nursery & Farm"
                fill
                priority
                className="object-contain object-left"
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
                <span className="font-serif text-base font-bold text-forest leading-tight">
                  Shree Ganesh
                </span>
                <span className="text-[10px] tracking-wider uppercase text-ink-muted font-medium">
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
                    "relative py-1 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-forest font-semibold"
                      : "text-ink/80 hover:text-forest"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-forest rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={businessInfo.contact.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-forest transition-colors py-2 px-3 rounded-full hover:bg-pale/40"
              aria-label="Call nursery directly"
            >
              <Phone className="w-3.5 h-3.5 text-forest" />
              <span>{businessInfo.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center bg-forest hover:bg-forest-dark text-paper text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              Enquire Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-forest hover:bg-pale/50 focus:outline-none focus:ring-2 focus:ring-forest/30"
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
