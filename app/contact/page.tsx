import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { MapSection } from "@/components/contact/MapSection";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact & Visit Nursery in Bodakdev, Ahmedabad",
  description:
    "Visit Shree Ganesh Nursery & Farm on Sindhubhavan Road, Bodakdev, Ahmedabad. Open daily 6:00 AM – 11:00 PM. Call +91 95861 09298 or WhatsApp for plant enquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Editorial Page Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-forest text-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-pale mb-4">
              Get in Touch & Visit
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-6">
              Let&apos;s talk{" "}
              <span className="italic font-normal text-pale font-serif block sm:inline">
                plants & spaces.
              </span>
            </h1>
            <p className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Whether you are looking for one special indoor plant, seeking expert care guidance, or planning a full landscape installation, we welcome your enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid & Map */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Details (6 cols) */}
            <div className="lg:col-span-6">
              <ContactDetails />
            </div>

            {/* Interactive Map (6 cols) */}
            <div className="lg:col-span-6">
              <MapSection />
            </div>
          </div>
        </div>
      </section>

      {/* Fast Action Footer Banner */}
      <section className="py-16 bg-pale/60 border-t border-borderLight text-center">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-2">
              Fastest Communication
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-3">
              Prefer an immediate answer?
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed mb-6">
              Our team responds quickly on phone calls and WhatsApp with real-time stock photos, care answers, and delivery arrangements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={businessInfo.contact.phoneHref}
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessInfo.contact.phoneDisplay}</span>
              </a>

              <a
                href={businessInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-paper text-forest hover:bg-pale font-semibold text-sm px-6 py-3 rounded-full border border-borderLight transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
