import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck, Users, Truck } from "lucide-react";
import { ServiceSection } from "@/components/services/ServiceSection";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Gardening, Landscaping & Plant Rental Services",
  description:
    "Complete botanical services in Ahmedabad: Landscape design, residential gardening, corporate landscaping, plant rentals, garden maintenance, and bulk wholesale supply.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Editorial Page Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-forest text-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-pale mb-4">
              Comprehensive Capabilities
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-6">
              From first idea to{" "}
              <span className="italic font-normal text-pale font-serif block sm:inline">
                flourishing space.
              </span>
            </h1>
            <p className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Complete landscape architecture, residential gardens, corporate biophilic installations, flexible plant rentals, and bulk nursery supply—executed entirely by our in-house team.
            </p>
          </div>
        </div>
      </section>

      {/* Execution Capabilities Bar */}
      <section className="py-8 bg-paper border-b border-borderLight">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pale flex items-center justify-center text-forest shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-ink font-semibold block">In-House 10-Person Team</strong>
                <span className="text-ink-muted text-xs">Direct oversight, no untracked daily labor</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pale flex items-center justify-center text-forest shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-ink font-semibold block">Bulk Transit & Packaging</strong>
                <span className="text-ink-muted text-xs">Safe root-ball wrapping and transport logistics</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pale flex items-center justify-center text-forest shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-ink font-semibold block">Beyond Gujarat Reach</strong>
                <span className="text-ink-muted text-xs">Enquiries accepted subject to project feasibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 8 Services Detail List */}
      <section className="py-20 md:py-32 bg-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <ServiceSection />
        </div>
      </section>

      {/* Final Inquiry Callout */}
      <section className="py-20 bg-forest-dark text-paper text-center border-t border-forest">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-pale block mb-3">
                Start Your Garden Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-paper mb-6">
                Tell us about your space.
              </h2>
              <p className="text-paper/75 text-sm sm:text-base leading-relaxed mb-8">
                Every project begins with a simple, pressure-free conversation. Share your photos, site dimensions, or ideas and our team will recommend practical next steps.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={businessInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-paper text-forest hover:bg-pale font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Start WhatsApp Consultation</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-forest text-paper border border-pale/30 hover:border-pale font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
