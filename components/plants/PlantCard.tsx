import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sun, Droplets, Sparkles, MessageCircle } from "lucide-react";
import { PlantItem } from "@/data/plants";
import { buildWhatsAppLink } from "@/lib/utils";

interface PlantCardProps {
  plant: PlantItem;
}

export function PlantCard({ plant }: PlantCardProps) {
  const whatsappUrl = buildWhatsAppLink(
    `Hello Shree Ganesh Nursery & Farm, I would like to enquire about the availability and details for "${plant.name}" (${plant.category}).`
  );

  return (
    <article className="group bg-paper rounded-2xl overflow-hidden border border-borderLight shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      {/* Top Image */}
      <div>
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-pale/40">
          <Image
            src={plant.image}
            alt={`${plant.name} at Shree Ganesh Nursery & Farm`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-paper/95 backdrop-blur-sm text-forest px-2.5 py-1 rounded-full shadow-sm border border-borderLight">
              {plant.category}
            </span>
            {plant.isFeatured && (
              <span className="text-[11px] font-bold uppercase tracking-wider bg-forest text-paper px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sage-light" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink tracking-tight">
              {plant.name}
            </h3>
          </div>

          {plant.botanicalNote && (
            <p className="text-xs text-forest/80 italic font-serif mb-3">
              {plant.botanicalNote}
            </p>
          )}

          <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mb-5">
            {plant.description}
          </p>

          {/* Environmental Care Indicators */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-borderLight text-[11px] text-ink-muted">
            <span className="inline-flex items-center gap-1 bg-pale/60 text-forest px-2.5 py-1 rounded-md font-medium">
              <Sun className="w-3 h-3 text-forest" />
              {plant.sunlight}
            </span>
            <span className="inline-flex items-center gap-1 bg-pale/60 text-forest px-2.5 py-1 rounded-md font-medium">
              <Droplets className="w-3 h-3 text-forest" />
              {plant.careLevel} Care
            </span>
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="p-5 sm:p-6 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-pale/80 hover:bg-forest text-forest hover:text-paper font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-200 group/btn"
          aria-label={`Enquire about ${plant.name} on WhatsApp`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:text-emerald-300" />
          <span>Enquire on WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </article>
  );
}
