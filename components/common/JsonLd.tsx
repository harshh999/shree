import React from "react";
import { businessInfo } from "@/data/business";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    name: businessInfo.name,
    image: "https://shreeganeshnursery.com/images/brand/logo-full.png",
    "@id": "https://shreeganeshnursery.com",
    url: "https://shreeganeshnursery.com",
    telephone: `+91${businessInfo.contact.phone}`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.line1}, ${businessInfo.address.line2}`,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.037,
      longitude: 72.511,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      businessInfo.social.instagram,
      businessInfo.social.googleBusiness,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
