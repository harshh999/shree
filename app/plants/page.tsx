import type { Metadata } from "next";
import { CategoryGrid } from "@/components/plants/CategoryGrid";
import { ProductCategories } from "@/components/plants/ProductCategories";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Curated Plants & Gardening Catalogue",
  description:
    "Explore healthy nursery plants, indoor foliage, flowering varieties, palms, large shade trees, bonsai, pots, and organic soil at Shree Ganesh Nursery & Farm, Ahmedabad.",
};

export default function PlantsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const initialCategory = searchParams?.category;

  return (
    <>
      {/* Editorial Page Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-forest text-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-pale mb-4">
              Nursery Collection & Catalogue
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-6">
              Find the right plants{" "}
              <span className="italic font-normal text-pale font-serif block sm:inline">
                for every space.
              </span>
            </h1>
            <p className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore a curated selection from our diverse nursery collection, ranging from compact indoor plants to mature landscape trees. Every plant is acclimatized for Gujarat’s local climate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Plant Catalogue */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <CategoryGrid initialCategory={initialCategory} />
        </div>
      </section>

      {/* Additional Products: Pots, Soils, Planters */}
      <ProductCategories />

      {/* Notice & Direct Advice Section */}
      <section className="py-20 bg-pale/50 border-t border-borderLight text-center">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-3">
              Need A Specific Plant Variety?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink mb-4">
              Our inventory changes with the season.
            </h2>
            <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-8">
              We cultivate and procure hundreds of seasonal varieties beyond this curated digital catalogue. If you have a specific species, height requirement, or landscape BOQ list, message or call us directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={businessInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Check Availability on WhatsApp</span>
              </a>

              <a
                href={businessInfo.contact.phoneHref}
                className="inline-flex items-center gap-2 bg-paper text-forest hover:bg-pale font-semibold text-sm px-6 py-3.5 rounded-full border border-borderLight transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessInfo.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
