import React from "react";
import { StatCounter } from "@/components/common/StatCounter";
import { Reveal } from "@/components/common/Reveal";

export function BusinessStats() {
  return (
    <section className="py-20 md:py-24 bg-paper border-y border-borderLight">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest block mb-2">
              Verified Business Footprint
            </span>
            <p className="text-sm text-ink-muted">
              Built on transparent service, continuous plant care, and long-standing customer relationships in Ahmedabad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-borderLight text-center">
            <div className="px-3">
              <StatCounter
                value={2018}
                prefix=""
                label="Established"
                description="Founded in Ahmedabad with personal botanical care"
              />
            </div>

            <div className="px-3 pt-6 sm:pt-0">
              <StatCounter
                value={1000}
                suffix="+"
                label="Customers Served"
                description="Homes, offices, and institutions partnered with us"
              />
            </div>

            <div className="px-3 pt-6 sm:pt-0">
              <StatCounter
                value={10}
                suffix=""
                label="In-House Specialists"
                description="Dedicated full-time team managing plant care"
              />
            </div>

            <div className="px-3 pt-6 sm:pt-0">
              <StatCounter
                value={1}
                label="Destination Nursery"
                description="Sindhubhavan Road, Bodakdev, open daily 6AM–11PM"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
