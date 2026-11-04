import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { businessInfo } from "@/data/business";

export function Introduction() {
  const highlights = [
    "Dedicated in-house team of approximately 10 horticulturists",
    "Complete range: Retail, landscaping, plant rentals & wholesale",
    "Enquiries and projects undertaken within and beyond Gujarat",
    "Daily nursery hours from 6:00 AM to 11:00 PM in Bodakdev",
  ];

  return (
    <section className="py-24 md:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest mb-4">
                A Little More Green
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] mb-6">
                Rooted in care.{" "}
                <span className="italic font-normal block sm:inline">
                  Growing with you.
                </span>
              </h2>

              <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-6">
                Established in {businessInfo.established}, Shree Ganesh Nursery & Farm was founded with a singular commitment: choosing plants and shaping gardens should be an inspiring, dependable, and personal experience.
              </p>

              <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8">
                Located on Sindhubhavan Road in Bodakdev, Ahmedabad, we combine an extensive nursery collection with hands-on landscape design, regular garden maintenance, corporate plant rentals, and bulk wholesale logistics.
              </p>

              {/* Verified Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 pt-2 border-t border-borderLight">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
                >
                  <span>Our Story & Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-forest font-semibold text-sm px-4 py-3 hover:bg-pale/40 rounded-full transition-colors"
                >
                  <span>Visit Our Nursery</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Editorial Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Main Nursery Photo Container */}
                <div className="relative h-[480px] sm:h-[560px] w-full rounded-2xl overflow-hidden shadow-lg border border-borderLight bg-forest">
                  <Image
                    src="/Homepage/nursery_overview.png"
                    alt="Shree Ganesh Nursery & Farm greenhouse and plant collection"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlaid Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-paper/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-borderLight max-w-[240px]">
                  <div className="font-serif text-3xl font-bold text-forest leading-none mb-1">
                    1,000+
                  </div>
                  <div className="text-xs text-ink-muted leading-snug">
                    Gardens nurtured & clients served across Ahmedabad
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
