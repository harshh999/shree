import React from "react";
import { Users, Sprout, ShieldCheck, Truck, Sparkles, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

export function WhyChooseUs() {
  const advantages = [
    {
      icon: Users,
      title: "10-Person Dedicated In-House Team",
      desc: "We never hand your garden off to untracked daily-wage labor. Our own trained horticulturists execute, plant, prune, and nourish.",
    },
    {
      icon: Sprout,
      title: "All-in-One Botanical Ecosystem",
      desc: "Retail nursery shopping, complete landscape architecture, routine maintenance, plant rentals, and bulk supply under one roof.",
    },
    {
      icon: ShieldCheck,
      title: "Acclimatized, Healthy Plant Stock",
      desc: "Every plant at our Bodakdev nursery is conditioned for Gujarat’s high temperatures, dry spells, and monsoon drainage needs.",
    },
    {
      icon: Truck,
      title: "Protective Packaging & Bulk Transport",
      desc: "Safe root-ball wrapping and arranged vehicle transit ensure wholesale batches and mature trees reach sites without shock.",
    },
    {
      icon: Sparkles,
      title: "Customizable Plant Rentals",
      desc: "Flexible terms for exhibitions, corporate offices, and weddings, complete with designer planters and scheduled plant rotations.",
    },
    {
      icon: MapPin,
      title: "Beyond Gujarat Reach",
      desc: "While rooted in Ahmedabad, we accept enquiries and undertake larger projects across neighboring regions subject to feasibility.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-paper/40 border-t border-borderLight">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Shree Ganesh Advantage"
          title={
            <>
              Why homeowners and enterprises{" "}
              <span className="italic font-normal">trust us.</span>
            </>
          }
          subtitle="Real botanical expertise, an accountable in-house workforce, and genuine care from first conversation to lasting garden health."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="bg-paper p-8 rounded-2xl border border-borderLight shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-pale flex items-center justify-center text-forest mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
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
