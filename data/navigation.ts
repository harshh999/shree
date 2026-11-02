export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Plants & Products", href: "/plants" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Our Story", href: "/about" },
  { label: "Plant Catalogue", href: "/plants" },
  { label: "Landscape Services", href: "/services" },
  { label: "Plant Rentals", href: "/services#plant-rental" },
  { label: "Bulk Wholesale", href: "/services#wholesale" },
  { label: "Contact & Directions", href: "/contact" },
];
