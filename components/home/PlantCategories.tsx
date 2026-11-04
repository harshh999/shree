import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { plantCategories } from "@/data/plants";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

export function PlantCategories() {
  // Display 4 featured categories on homepage
  const featuredNames = [
    "Indoor Plants",
    "Flowering Plants",
    "Palm Plants",
    "Bonsai & Specialty Plants",
  ];
  const featuredCategories = plantCategories.filter((c) =>
    featuredNames.includes(c.name)
  );

  return (
    <section className="py-24 md:py-32 bg-paper/60 border-t border-borderLight">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Explore Our Nursery"
          title={
            <>
              Plants for every{" "}
              <span className="italic font-normal">kind of space.</span>
            </>
          }
          subtitle="From sunlit balconies and shaded living rooms to sprawling landscaped lawns, explore a curated botanical collection chosen for Ahmedabad’s climate."
          align="split"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredCategories.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.1}>
              <Link
                href={`/plants?category=${encodeURIComponent(category.name)}`}
                className="group block relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-forest"
              >
                {/* Background Image with Zoom on Hover */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Editorial Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-paper">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight group-hover:translate-x-1 transition-transform">
                      {category.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-paper/10 backdrop-blur-sm flex items-center justify-center text-paper group-hover:bg-paper group-hover:text-forest transition-colors shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-paper/75 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Link to Full Catalogue */}
        <div className="mt-14 text-center">
          <Link
            href="/plants"
            className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>View Complete Plant Catalogue</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
