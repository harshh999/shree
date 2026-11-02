"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, X, ArrowRight } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import { businessInfo } from "@/data/business";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-paper"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-borderLight">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/images/brand/logo-icon.png"
              alt="Shree Ganesh Logo Mark"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif font-bold text-forest text-lg">
            Shree Ganesh
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full text-forest hover:bg-pale/50 focus:outline-none focus:ring-2 focus:ring-forest/30"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation Links">
          {mainNavLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between text-2xl font-serif py-2 transition-colors",
                  isActive
                    ? "text-forest font-bold pl-2 border-l-4 border-forest"
                    : "text-ink/80 hover:text-forest"
                )}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 opacity-40" />
              </Link>
            );
          })}
        </nav>

        {/* Quick Contact Box */}
        <div className="pt-6 border-t border-borderLight space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-forest">
            Direct Enquiries
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={businessInfo.contact.phoneHref}
              className="flex items-center justify-center gap-2 bg-pale/60 hover:bg-pale text-forest font-semibold text-sm py-3 px-4 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <a
              href={businessInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-forest text-paper font-semibold text-sm py-3 px-4 rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Location & Hours */}
          <div className="pt-4 space-y-3 text-xs text-ink-muted">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>
                Bodakdev, Sindhubhavan Road, Ahmedabad, Gujarat 380059
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-forest shrink-0" />
              <span>Open Daily: 6:00 AM – 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
