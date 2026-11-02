import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import { businessInfo } from "@/data/business";
import { footerQuickLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-paper/85 pt-20 pb-12 border-t border-forest">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-paper/10">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-block relative w-[240px] h-[58px] focus:outline-none"
              aria-label="Shree Ganesh Nursery & Farm"
            >
              <Image
                src="/images/brand/logo-full-light.png"
                alt="Shree Ganesh Nursery & Farm"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-paper/75 text-sm sm:text-base leading-relaxed max-w-sm">
              Established in 2018–2019, Shree Ganesh Nursery & Farm is Ahmedabad’s complete destination for healthy nursery plants, bespoke landscaping, flexible plant rentals, and reliable garden maintenance.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage-light bg-forest/80 rounded-full border border-sage/20">
                10-Person Dedicated In-House Team
              </span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-paper tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-paper/70 hover:text-sage-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Visit Our Nursery (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-paper tracking-wide">
              Visit The Nursery
            </h3>
            <div className="space-y-3 text-sm text-paper/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage shrink-0 mt-1" />
                <span>
                  {businessInfo.address.line1}, {businessInfo.address.line2}, {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sage shrink-0" />
                <span>{businessInfo.hours.display}</span>
              </div>

              <div className="pt-2">
                <a
                  href={businessInfo.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-light hover:text-paper transition-colors underline-offset-4 hover:underline"
                >
                  <span>Google Business Profile & Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Enquiries & Delivery (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-paper tracking-wide">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-paper/75">
              <div>
                <a
                  href={businessInfo.contact.phoneHref}
                  className="flex items-center gap-2.5 hover:text-sage-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-sage shrink-0" />
                  <span className="font-medium">{businessInfo.contact.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <a
                  href={businessInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-sage-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-sage shrink-0" />
                  <span>WhatsApp: {businessInfo.contact.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <a
                  href={businessInfo.contact.emailHref}
                  className="flex items-center gap-2.5 hover:text-sage-light transition-colors"
                >
                  <Mail className="w-4 h-4 text-sage shrink-0" />
                  <span className="truncate">{businessInfo.contact.email}</span>
                </a>
              </div>

              <div>
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-sage-light transition-colors"
                >
                  <Instagram className="w-4 h-4 text-sage shrink-0" />
                  <span>{businessInfo.social.instagramHandle}</span>
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-paper/10 text-xs text-paper/60 space-y-1">
              <p>• {businessInfo.deliveryPolicy.within5km}</p>
              <p>• {businessInfo.deliveryPolicy.beyond5km}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/60">
          <p>
            © {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Nursery, Landscaping, Plant Rentals & Wholesale Supply · Bodakdev, Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
}
