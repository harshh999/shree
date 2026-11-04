import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { businessInfo } from "@/data/business";

export function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-paper/60 border-t border-borderLight relative overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Photograph Column (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal direction="right">
              <div className="relative">
                {/* Portrait Frame */}
                <div className="relative h-[480px] sm:h-[560px] w-full rounded-2xl overflow-hidden shadow-xl border border-borderLight bg-forest">
                  <Image
                    src="/Homepage/founder.png"
                    alt={`${businessInfo.founder} - Founder of Shree Ganesh Nursery & Farm`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlaid Title Badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-paper/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-borderLight max-w-[260px]">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-forest leading-tight">
                    {businessInfo.founder}
                  </div>
                  <div className="text-xs text-ink-muted leading-snug mt-1 font-medium">
                    Founder, Shree Ganesh Nursery & Farm
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Founder Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest mb-4">
                The Founder
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] mb-6">
                Rooted in personal care,{" "}
                <span className="italic font-normal block sm:inline">
                  guided by Mahendra Singh.
                </span>
              </h2>

              <div className="space-y-4 text-ink-muted text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  Mahendra Singh started Shree Ganesh Nursery & Farm around 2018–2019 with a straightforward vision: to create an approachable, dependable destination for plants, gardening guidance, and landscaping in Ahmedabad.
                </p>
                <p>
                  From our nursery on Sindhubhavan Road in Bodakdev, he has nurtured the business into a comprehensive botanical center—helping homeowners find the right flora for their balconies and gardens, supplying bulk varieties for developments, and providing complete landscape execution with an in-house team.
                </p>
              </div>

              <div className="pt-6 border-t border-borderLight flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-xs text-ink-muted uppercase tracking-wider block font-medium">
                    Business
                  </span>
                  <strong className="text-forest font-serif text-base sm:text-lg">
                    Shree Ganesh Nursery & Farm
                  </strong>
                </div>

                <div className="hidden sm:block h-8 w-[1px] bg-borderLight" />

                <div>
                  <span className="text-xs text-ink-muted uppercase tracking-wider block font-medium">
                    Established
                  </span>
                  <strong className="text-forest font-serif text-base sm:text-lg">
                    2018–2019
                  </strong>
                </div>

                <div className="hidden sm:block h-8 w-[1px] bg-borderLight" />

                <div>
                  <span className="text-xs text-ink-muted uppercase tracking-wider block font-medium">
                    Location
                  </span>
                  <strong className="text-forest font-serif text-base sm:text-lg">
                    SBR, Bodakdev, Ahmedabad
                  </strong>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:underline underline-offset-4 transition-all"
                >
                  <span>Learn more about our nursery background</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

