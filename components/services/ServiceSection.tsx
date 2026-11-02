import React from "react";
import Image from "next/image";
import { Check, ArrowUpRight, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/common/Reveal";
import { buildWhatsAppLink } from "@/lib/utils";

export function ServiceSection() {
  return (
    <div className="space-y-24 md:space-y-36">
      {servicesData.map((service, index) => {
        const isEven = index % 2 === 1;
        const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

        return (
          <section
            id={service.slug}
            key={service.id}
            className="scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image Column (5 cols) */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Reveal direction={isEven ? "left" : "right"}>
                  <div className="relative">
                    <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-lg border border-borderLight bg-forest">
                      <Image
                        src={service.image}
                        alt={`${service.name} by Shree Ganesh Nursery & Farm`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute top-4 left-4 bg-forest/90 backdrop-blur-md text-paper px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border border-pale/20">
                      Service {service.id}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Text Column (7 cols) */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Reveal>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-3">
                    0{index + 1} / 0{servicesData.length} · In-House Service
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-[1.08] mb-5">
                    {service.name}
                  </h2>

                  <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables / Scope */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted"
                        >
                          <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3-Step Process */}
                  <div className="p-5 rounded-xl bg-pale/40 border border-borderLight mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-forest mb-3">
                      How It Works
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {service.process.map((step) => (
                        <div key={step.step}>
                          <span className="font-mono text-xs font-bold text-forest">
                            Step {step.step}
                          </span>
                          <h4 className="font-sans font-bold text-ink text-xs mt-0.5 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-ink-muted leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA & Ideal For */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-borderLight">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-paper font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Enquire About This Service</span>
                    </a>

                    <span className="text-xs text-ink-muted italic">
                      Ideal for: {service.idealFor}
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
