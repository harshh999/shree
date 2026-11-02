import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { ImageReveal } from "@/components/common/ImageReveal";
import { Reveal } from "@/components/common/Reveal";
import { buildWhatsAppLink } from "@/lib/utils";

export function PlantRental() {
  const rentalBenefits = [
    "Flexible short-term event rentals and monthly corporate plans",
    "Curated specimen plants paired with designer ceramic & FRP pots",
    "Complete ongoing maintenance, replacement, and watering handled by our team",
    "Ideal for corporate offices, weddings, exhibitions, and photo shoots",
  ];

  const whatsappUrl = buildWhatsAppLink(
    "Hello Shree Ganesh Nursery & Farm, I would like to enquire about your Plant Rental & Arrangement services."
  );

  return (
    <section className="py-24 md:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Photographic Feature (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal direction="right">
              <div className="relative">
                <div className="relative h-[440px] sm:h-[540px] w-full rounded-2xl overflow-hidden shadow-xl border border-borderLight">
                  <ImageReveal
                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85"
                    alt="Lush curated plant arrangements for rental in stylish modern interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Overlaid Highlight Card */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-forest text-paper p-6 rounded-2xl shadow-xl max-w-[280px]">
                  <span className="text-xs font-bold tracking-widest uppercase text-sage-light block mb-1">
                    Hassle-Free Greenery
                  </span>
                  <p className="text-sm text-paper/85 leading-snug">
                    Zero maintenance burden. We rotate and care for the plants regularly.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Content (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest mb-4">
                Specialized Feature
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.05] mb-6">
                Beautiful plants,{" "}
                <span className="italic font-normal block sm:inline">
                  without the permanence.
                </span>
              </h2>

              <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-6">
                Our plant rental and arrangement service brings a finished, botanical atmosphere to corporate headquarters, luxury hotel lobbies, private celebrations, art exhibitions, and special events across Ahmedabad.
              </p>

              <div className="space-y-3.5 mb-10 pt-2 border-t border-borderLight">
                {rentalBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-ink font-medium">
                    <div className="w-5 h-5 rounded-full bg-pale flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-forest" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-7 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire About Plant Rentals</span>
                </a>

                <Link
                  href="/services#plant-rental"
                  className="inline-flex items-center gap-2 text-forest font-semibold text-sm px-4 py-3 hover:bg-pale/40 rounded-full transition-colors"
                >
                  <span>Rental Details</span>
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
