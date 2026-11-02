import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Users, Award, HeartHandshake, Sparkles, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ImageReveal } from "@/components/common/ImageReveal";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "About Our Nursery & Team",
  description:
    "Learn about Shree Ganesh Nursery & Farm, established in 2018–2019 in Bodakdev, Ahmedabad. Guided by an in-house team of 10 horticulturists dedicated to creating living green spaces.",
};

export default function AboutPage() {
  const approaches = [
    {
      step: "01",
      title: "Thoughtful Plant Selection",
      desc: "We recommend plants conditioned for your exact sunlight, water hardness, and lifestyle—not simply what looks appealing in a photograph today.",
    },
    {
      step: "02",
      title: "Accountable In-House Execution",
      desc: "Our dedicated 10-person crew handles soil reconditioning, heavy tree handling, and planting directly, ensuring high survival rates.",
    },
    {
      step: "03",
      title: "Care That Continues",
      desc: "Living gardens evolve with the seasons. We remain available for ongoing pruning, organic fertilization, seasonal transitions, and plant care.",
    },
  ];

  const whatWeDoList = [
    {
      title: "Curated Retail Nursery",
      desc: "Over 1,000 claimed plant varieties, specimen palms, flowering shrubs, and handcrafted pots at our Sindhubhavan Road nursery.",
    },
    {
      title: "Complete Landscaping",
      desc: "Turnkey design and physical execution for villas, luxury farmhouses, corporate headquarters, and institutional grounds.",
    },
    {
      title: "Flexible Plant Rentals",
      desc: "Short-term event decor and monthly corporate plant subscriptions with full rotation and maintenance included.",
    },
    {
      title: "Wholesale & Bulk Supply",
      desc: "Supplying bulk volumes to nurseries, builders, and developers with safe packaging and arranged transportation beyond Gujarat.",
    },
  ];

  return (
    <>
      {/* Editorial Page Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-forest text-paper overflow-hidden">
        <div className="max-w-container mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-pale mb-4">
              About Shree Ganesh Nursery & Farm
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-6">
              A greener, calmer way{" "}
              <span className="italic font-normal text-pale font-serif block sm:inline">
                to live and grow.
              </span>
            </h1>
            <p className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Rooted in Bodakdev, Ahmedabad, we are a hands-on plant nursery, landscaping studio, and botanical partner helping people shape spaces that feel alive.
            </p>
          </div>
        </div>

        {/* Subtle Decorative Background Element */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-[500px] h-[500px]">
          <Image
            src="/images/brand/logo-icon.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Copy (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest block mb-4">
                  Our Beginning
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-[1.08] mb-6">
                  Founded with a simple belief:{" "}
                  <span className="italic font-normal">
                    every space deserves living green.
                  </span>
                </h2>

                <div className="space-y-4 text-ink-muted text-base sm:text-lg leading-relaxed">
                  <p>
                    Established in {businessInfo.established} by {businessInfo.founder}, Shree Ganesh Nursery & Farm was created to bridge a common gap in Ahmedabad’s gardening landscape: the difference between simply buying a potted plant and having knowledgeable guidance to keep it flourishing.
                  </p>
                  <p>
                    Operating from our prime nursery on Sindhubhavan Road in Bodakdev, we have grown from a local plant destination into a full-scope gardening and landscaping partner. Today, having served over 1,000 residential and commercial clients, our commitment remains deeply personal.
                  </p>
                  <p>
                    We take pride in our honest recommendations. If a plant isn&apos;t suited for your balcony&apos;s afternoon heat or a corporate interior&apos;s low light, we tell you plainly and offer a resilient, proven alternative.
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-borderLight flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-xs text-ink-muted uppercase tracking-wider block font-medium">
                      Location
                    </span>
                    <strong className="text-forest font-serif text-lg">
                      Bodakdev, Ahmedabad
                    </strong>
                  </div>
                  <div className="hidden sm:block h-8 w-[1px] bg-borderLight" />
                  <div>
                    <span className="text-xs text-ink-muted uppercase tracking-wider block font-medium">
                      Operating Period
                    </span>
                    <strong className="text-forest font-serif text-lg">
                      Since {businessInfo.established}
                    </strong>
                  </div>
                  <div className="hidden sm:block h-8 w-[1px] bg-borderLight" />
                  <div>
                    <span className="text-xs text-ink-muted uppercase tracking-wider block font-medium">
                      Team Capacity
                    </span>
                    <strong className="text-forest font-serif text-lg">
                      10 Full-Time Specialists
                    </strong>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Story Photo (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden shadow-xl border border-borderLight bg-forest">
                  <ImageReveal
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
                    alt="Authentic nursery rows at Shree Ganesh Nursery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32 bg-forest text-paper relative">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Horticultural Philosophy"
            title={
              <>
                Good gardens begin{" "}
                <span className="italic font-normal text-pale">
                  with listening.
                </span>
              </>
            }
            subtitle="Plants are living beings that react to light, airflow, soil pH, and human routines. Our structured approach ensures lasting beauty."
            align="split"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.1}>
                <div className="bg-forest-dark/80 p-8 rounded-2xl border border-paper/10 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-pale uppercase tracking-widest block mb-4">
                      Philosophy {item.step}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-paper mb-3">
                      {item.title}
                    </h3>
                    <p className="text-paper/75 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our In-House Team */}
      <section className="py-24 md:py-32 bg-paper/60 border-t border-borderLight">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Team Visual (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal direction="right">
                <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-borderLight bg-forest">
                  <ImageReveal
                    src="https://images.unsplash.com/photo-1599685315640-76d2d3e2f5a1?auto=format&fit=crop&w=1200&q=85"
                    alt="Dedicated plant care team at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </Reveal>
            </div>

            {/* Team Narrative (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest block mb-4">
                  Accountable Execution
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-[1.08] mb-6">
                  Our dedicated{" "}
                  <span className="italic font-normal">
                    10-person in-house team.
                  </span>
                </h2>

                <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-6">
                  In an industry where landscaping work is frequently sub-contracted to unverified daily laborers, Shree Ganesh Nursery & Farm operates differently. We maintain our own core team of approximately 10 trained staff.
                </p>

                <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8">
                  From delicate indoor pruning and seedling propagation to large-scale soil excavation and mature tree rigging, our personnel understand plant physiology, respect client properties, and take personal pride in every garden we touch.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-borderLight">
                  <div className="flex items-start gap-3 text-sm text-ink font-medium">
                    <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>Permanent, trained staff</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-ink font-medium">
                    <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>Horticultural soil & pest know-how</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-ink font-medium">
                    <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>Direct founder supervision</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-ink font-medium">
                    <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>Safety and clean site handovers</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Summary */}
      <section className="py-24 md:py-32 bg-paper border-t border-borderLight">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Complete Capabilities"
            title={
              <>
                What we bring{" "}
                <span className="italic font-normal">under one roof.</span>
              </>
            }
            subtitle="From individual balcony plants to municipal scale tree supply, we offer an integrated botanical ecosystem."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whatWeDoList.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div className="p-6 sm:p-7 rounded-2xl bg-paper border border-borderLight shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-pale text-forest font-mono text-xs font-bold flex items-center justify-center mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Visit CTA */}
      <section className="py-20 bg-forest-dark text-paper text-center border-t border-forest">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pale block mb-3">
              Experience The Nursery in Person
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-paper mb-6">
              Come walk through our green aisles in Bodakdev.
            </h2>
            <p className="text-paper/75 text-base max-w-xl mx-auto mb-8">
              Open 7 days a week, 6:00 AM to 11:00 PM. We are always glad to show you around and answer your plant questions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-paper text-forest hover:bg-pale font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
              >
                <span>Get Directions & Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={businessInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest text-paper border border-pale/30 hover:border-pale font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
