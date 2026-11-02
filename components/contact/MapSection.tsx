import React from "react";
import { ExternalLink, Navigation } from "lucide-react";
import { businessInfo } from "@/data/business";
import { Reveal } from "@/components/common/Reveal";

export function MapSection() {
  return (
    <Reveal direction="left">
      <div className="bg-paper rounded-2xl overflow-hidden border border-borderLight shadow-sm h-full flex flex-col justify-between">
        {/* Map Header */}
        <div className="p-6 border-b border-borderLight flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-forest block">
              Interactive Map
            </span>
            <h3 className="font-serif text-lg font-medium text-ink">
              Shree Ganesh Nursery & Farm
            </h3>
          </div>

          <a
            href={businessInfo.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-forest hover:bg-forest-dark text-paper text-xs font-semibold px-4 py-2 rounded-full transition-colors shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Embedded Iframe */}
        <div className="relative min-h-[460px] sm:min-h-[520px] w-full bg-pale/30">
          <iframe
            title="Google Map showing Shree Ganesh Nursery & Farm on Sindhubhavan Road, Bodakdev, Ahmedabad"
            src={businessInfo.social.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
          />
        </div>

        {/* Map Footer Note */}
        <div className="p-4 bg-pale/30 border-t border-borderLight text-xs text-ink-muted text-center">
          Located near Stellar Friends Avenue, Sindhubhavan Road, Bodakdev. Ample roadside parking available.
        </div>
      </div>
    </Reveal>
  );
}
