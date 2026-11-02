import React from "react";
import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { additionalProducts } from "@/data/plants";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { buildWhatsAppLink } from "@/lib/utils";

export function ProductCategories() {
  return (
    <section className="py-20 md:py-28 border-t border-borderLight bg-paper/30">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Soil, Pots & Essentials"
          title={
            <>
              Everything you need to help{" "}
              <span className="italic font-normal">plants flourish.</span>
            </>
          }
          subtitle="Healthy growth requires balanced potting media, supportive pots, and authentic plant nutrition. Explore our verified gardening inputs available at the nursery."
          align="split"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalProducts.map((product, idx) => {
            const whatsappUrl = buildWhatsAppLink(
              `Hello Shree Ganesh Nursery, I would like to enquire about your "${product.name}" products and options.`
            );

            return (
              <Reveal key={product.name} delay={idx * 0.1}>
                <div className="bg-paper rounded-2xl overflow-hidden border border-borderLight shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full bg-pale/40">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink mb-2">
                        {product.name}
                      </h3>
                      <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mb-5">
                        {product.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-borderLight">
                        {product.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs text-ink font-medium"
                          >
                            <Check className="w-3.5 h-3.5 text-forest shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-pale/70 hover:bg-forest text-forest hover:text-paper font-semibold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
