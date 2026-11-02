"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  Truck,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { Reveal } from "@/components/common/Reveal";

export function ContactDetails() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(businessInfo.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      <Reveal>
        {/* Physical Nursery Location Card */}
        <div className="bg-paper p-6 sm:p-8 rounded-2xl border border-borderLight shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pale flex items-center justify-center text-forest">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest block">
                  Nursery Location
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink">
                  Bodakdev, Ahmedabad
                </h3>
              </div>
            </div>

            <button
              onClick={copyAddress}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-forest-dark bg-pale/60 hover:bg-pale px-3 py-1.5 rounded-lg transition-colors"
              title="Copy address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm sm:text-base text-ink select-all leading-relaxed mb-4">
            {businessInfo.address.line1},<br />
            {businessInfo.address.line2},<br />
            {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}
          </p>

          <a
            href={businessInfo.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:underline"
          >
            <span>Open in Google Maps for Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        {/* Direct Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div className="bg-paper p-6 rounded-2xl border border-borderLight shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-pale flex items-center justify-center text-forest">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest">
                Phone Call
              </span>
            </div>
            <a
              href={businessInfo.contact.phoneHref}
              className="font-serif text-xl font-bold text-ink hover:text-forest transition-colors block mb-1"
            >
              {businessInfo.contact.phoneDisplay}
            </a>
            <span className="text-xs text-ink-muted">Available 6:00 AM – 11:00 PM</span>
          </div>

          {/* WhatsApp */}
          <div className="bg-paper p-6 rounded-2xl border border-borderLight shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                WhatsApp Chat
              </span>
            </div>
            <a
              href={businessInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl font-bold text-ink hover:text-forest transition-colors block mb-1"
            >
              {businessInfo.contact.whatsappDisplay}
            </a>
            <span className="text-xs text-ink-muted">Quick replies & plant photos</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        {/* Hours & Email */}
        <div className="bg-paper p-6 sm:p-8 rounded-2xl border border-borderLight shadow-sm space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pale flex items-center justify-center text-forest shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest block">
                Nursery Visiting Hours
              </span>
              <p className="font-serif text-lg text-ink font-semibold mt-0.5">
                {businessInfo.hours.days}: 6:00 AM – 11:00 PM
              </p>
              <p className="text-xs text-ink-muted mt-1">
                Open 7 days a week, including public holidays and weekends.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-borderLight flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pale flex items-center justify-center text-forest shrink-0 mt-0.5">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest block">
                Email Enquiries
              </span>
              <a
                href={businessInfo.contact.emailHref}
                className="font-serif text-base sm:text-lg text-ink hover:text-forest font-semibold transition-colors block mt-0.5"
              >
                {businessInfo.contact.email}
              </a>
              <p className="text-xs text-ink-muted mt-1">
                For corporate procurement, tender BOQs, and formal proposals.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-borderLight flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-forest" />
              <span className="text-xs font-semibold text-ink">
                Follow our daily nursery stories on Instagram:
              </span>
            </div>
            <a
              href={businessInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-forest hover:underline"
            >
              {businessInfo.social.instagramHandle}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        {/* Delivery & Logistics Notice */}
        <div className="p-5 rounded-2xl bg-pale/50 border border-borderLight text-xs text-ink-muted flex items-start gap-3">
          <Truck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-ink font-semibold block">
              Delivery Policy & Geographic Reach:
            </strong>
            <p>• {businessInfo.deliveryPolicy.within5km}</p>
            <p>• {businessInfo.deliveryPolicy.beyond5km}</p>
            <p>
              • {businessInfo.geographicReach}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
