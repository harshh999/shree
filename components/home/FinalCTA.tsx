import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { businessInfo } from "@/data/business";

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-forest-dark text-paper overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-forest/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-container mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-pale mb-4">
              Let&apos;s Make Your Space Greener
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-paper mb-6">
              Have a corner{" "}
              <span className="italic font-normal text-pale font-serif block sm:inline">
                in mind?
              </span>
            </h2>

            <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Whether you are looking for one striking architectural plant, planning a terrace retreat, or requiring bulk landscaping for a project, our team is ready to assist.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href={businessInfo.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-paper text-forest hover:bg-pale font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-forest" />
                <span>Call {businessInfo.contact.phoneDisplay}</span>
              </a>

              <a
                href={businessInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-forest hover:bg-forest-deep text-paper border border-pale/30 hover:border-pale font-semibold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-sm active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-pale hover:text-paper font-semibold text-sm px-5 py-4 underline-offset-4 hover:underline transition-colors"
              >
                <span>Nursery Directions & Hours</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Address & Hours Indicator */}
            <div className="inline-flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-paper/15 text-xs text-paper/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sage" />
                <span>Sindhubhavan Road, Bodakdev, Ahmedabad</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div>Open 7 Days a Week: 6:00 AM – 11:00 PM</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
