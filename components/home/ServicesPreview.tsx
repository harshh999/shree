import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

export function ServicesPreview() {
  // Show first 4 services on homepage
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-forest text-paper relative overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Beyond The Nursery"
          title={
            <>
              A complete{" "}
              <span className="italic font-normal text-pale">
                gardening partner.
              </span>
            </>
          }
          subtitle="Plan, create, and care for green spaces with an in-house team of 10 specialists who stay involved from initial planning to ongoing nourishment."
          align="split"
          dark
        />

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredServices.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.1}>
              <div className="group relative bg-forest-dark/70 rounded-2xl p-6 sm:p-8 border border-paper/10 hover:border-pale/30 transition-all duration-300 flex flex-col justify-between h-full">
                {/* Image Wrap */}
                <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden mb-6 bg-forest-deep">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-forest-deep/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-bold text-pale border border-pale/20">
                    {service.id}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-paper mb-3">
                    {service.name}
                  </h3>
                  <p className="text-paper/75 text-sm sm:text-base leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-paper/10 flex items-center justify-between">
                  <span className="text-xs text-pale uppercase tracking-wider font-semibold">
                    In-House Team Execution
                  </span>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper group-hover:text-pale transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Link to all Services */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-paper text-forest hover:bg-pale font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <span>Explore All 8 Gardening Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
