export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  idealFor: string;
  image: string;
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    name: "Landscape Design & Development",
    slug: "landscape-design",
    shortDesc: "Complete garden planning, bespoke design, plant selection, soil preparation, and on-site execution.",
    fullDesc:
      "From initial site surveys and microclimate assessment to mature specimen installation, our in-house team creates cohesive outdoor spaces tailored to Gujarat’s climate and your architectural vision. We bridge the gap between design aspiration and biological longevity.",
    deliverables: [
      "Site microclimate and sunlight analysis",
      "Concept layout and botanical zoning plans",
      "Curated specimen tree and understory selection",
      "Soil reconditioning and drainage layout",
      "Turnkey installation managed by our 10-person crew",
    ],
    process: [
      { step: "01", title: "Consultation & Site Walk", desc: "We inspect light, soil drainage, and architecture." },
      { step: "02", title: "Botanical Blueprint", desc: "A tailored plant schedule paired with layout proposals." },
      { step: "03", title: "Execution & Handover", desc: "Our in-house crew prepares soil, beds, and plants." },
    ],
    idealFor: "Private residences, new farmhouses, institutional campuses, and renovated villas.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I am interested in discussing a Landscape Design & Development project.",
  },
  {
    id: "02",
    name: "Residential Gardening",
    slug: "residential-gardening",
    shortDesc: "Gardens for homes, villas, farmhouses, terraces, and open courtyards shaped around family living.",
    fullDesc:
      "A garden should be an everyday joy, not an overwhelming chore. We design, plant, and establish intimate residential sanctuaries that balance lush flowering aesthetics, aromatic species like Mogra and Champa, and manageable upkeep.",
    deliverables: [
      "Custom lawn establishment and turf varieties",
      "Fragrant traditional flowering borders",
      "Kitchen garden & organic herb bed planning",
      "Low-maintenance foliage focal points",
      "Seasonal replanting and health checks",
    ],
    process: [
      { step: "01", title: "Lifestyle Mapping", desc: "Understanding how your household uses outdoor space." },
      { step: "02", title: "Palette Selection", desc: "Choosing pet-friendly, hardy, or fragrant plants." },
      { step: "03", title: "Planting & Guidance", desc: "Planting with tailored watering and care routines." },
    ],
    idealFor: "Bungalows, villas, suburban row houses, and penthouse terraces.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I would like to enquire about Residential Gardening for my home.",
  },
  {
    id: "03",
    name: "Commercial & Corporate Landscaping",
    slug: "commercial-landscaping",
    shortDesc: "Green environments for offices, hotels, restaurants, and retail properties making a lasting impression.",
    fullDesc:
      "First impressions matter. We transform corporate reception areas, executive suites, restaurant alfresco zones, and retail courtyards into biophilic environments that elevate occupant well-being and reinforce corporate prestige.",
    deliverables: [
      "Architectural indoor specimen trees in custom planters",
      "Exterior corporate entrance avenue planting",
      "Low-light tolerant office greenery systems",
      "Scheduled maintenance during non-business hours",
      "Biophilic design consulting for architects and builders",
    ],
    process: [
      { step: "01", title: "Corporate Review", desc: "Assessing foot traffic, HVAC airflow, and light levels." },
      { step: "02", title: "Specification Proposal", desc: "Durable, high-impact plant species and planters." },
      { step: "03", title: "Installation & Routine", desc: "Clean setup followed by silent ongoing maintenance." },
    ],
    idealFor: "IT parks, corporate offices, boutique cafes, upscale restaurants, and luxury showrooms.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I would like to discuss Commercial & Corporate Landscaping services.",
  },
  {
    id: "04",
    name: "Terrace & Balcony Gardens",
    slug: "terrace-balcony-gardens",
    shortDesc: "Urban retreats engineered for high wind, intense sun exposure, and structural weight considerations.",
    fullDesc:
      "Urban apartments and penthouses present distinct environmental challenges—blistering afternoon sun, dry winds, and weight restrictions. We engineer bespoke terrace and balcony gardens utilizing lightweight soil mixtures, lightweight FRP planters, and sun-hardy flora.",
    deliverables: [
      "Lightweight soil and perlite substrate formulating",
      "Fibre-reinforced and UV-stabilized modern planters",
      "Wind-tolerant climber screens and privacy hedges",
      "Efficient micro-drip irrigation integration",
      "Vertical garden accents for compact spaces",
    ],
    process: [
      { step: "01", title: "Exposure Assessment", desc: "Analyzing floor height, sun angles, and wind corridors." },
      { step: "02", title: "Weight-Safe Layout", desc: "Selecting structural planters and lightweight soil." },
      { step: "03", title: "Installation", desc: "Neat setup with proper drainage containment." },
    ],
    idealFor: "High-rise apartments, rooftop terraces, duplex balconies, and penthouse decks.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I would like to consult on a Terrace or Balcony Garden.",
  },
  {
    id: "05",
    name: "Plant Rental & Arrangements",
    slug: "plant-rental",
    shortDesc: "Flexible individual plant rentals and complete plant arrangements for offices, events, hotels, exhibitions, and weddings.",
    fullDesc:
      "Enjoy premium living botanical aesthetics without the long-term commitment or maintenance overhead. We provide flexible, fully maintained short-term and monthly plant rental packages, featuring lush specimens in pristine designer planters.",
    deliverables: [
      "Event and exhibition stage botanical arrangements",
      "Corporate monthly rental with bi-weekly rotation",
      "Wedding and banquet greenery installations",
      "Designer ceramic, brass, or FRP planter pairings",
      "All replacement, watering, and pruning handled by our team",
    ],
    process: [
      { step: "01", title: "Event / Space Scope", desc: "Tell us the dates, venue layout, and aesthetic theme." },
      { step: "02", title: "Arrangement Curation", desc: "We assemble specimen plants in matching pots." },
      { step: "03", title: "Delivery & Placement", desc: "Full setup before your event, seamless teardown after." },
    ],
    idealFor: "Corporate conferences, wedding venues, photo shoots, trade fairs, and hotel lobbies.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I want to enquire about your Plant Rental & Arrangement services.",
  },
  {
    id: "06",
    name: "Garden Maintenance",
    slug: "garden-maintenance",
    shortDesc: "Ongoing garden upkeep, plant care, seasonal pruning, and health management from our dedicated team.",
    fullDesc:
      "A garden's beauty is sustained through skilled, consistent care. Our in-house team of approximately 10 horticulturists provides structured weekly, bi-weekly, or monthly maintenance contracts to keep your foliage vibrant and disease-free across every season.",
    deliverables: [
      "Scheduled pruning, deadheading, and shaping",
      "Lawn mowing, edging, and weed management",
      "Organic fertilization and soil aeration",
      "Proactive pest, insect, and fungal treatments",
      "Irrigation line checks and emitter cleaning",
    ],
    process: [
      { step: "01", title: "Garden Health Audit", desc: "We evaluate current plant vitality and soil conditions." },
      { step: "02", title: "Custom Schedule", desc: "Setting a convenient maintenance frequency." },
      { step: "03", title: "Reliable Visits", desc: "Our trained gardeners execute systematic maintenance." },
    ],
    idealFor: "Private residences, housing societies, corporate offices, and commercial establishments.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I am looking for a reliable Garden Maintenance contract.",
  },
  {
    id: "07",
    name: "Wholesale & Bulk Plant Supply",
    slug: "wholesale-supply",
    shortDesc: "Bulk plant supply for nurseries, builders, developers, and institutions with transportation arrangements.",
    fullDesc:
      "Supplying commercial quantities of robust, field-acclimatized plants to retail nurseries, landscaping contractors, real estate developers, and infrastructure projects across Gujarat and neighboring regions with protective packaging.",
    deliverables: [
      "Direct nursery-grown volume plant stock",
      "Protective root-ball wrapping and careful truck loading",
      "Scheduled multi-load deliveries to project sites",
      "Uniform batch sizes for formal landscaping symmetry",
      "Logistics and transportation arrangements beyond Gujarat",
    ],
    process: [
      { step: "01", title: "Bill of Quantities (BOQ)", desc: "Share your required plant counts and specifications." },
      { step: "02", title: "Batch Inspection", desc: "Verify batch health, height, and root formation." },
      { step: "03", title: "Packaging & Dispatch", desc: "Carefully bundled and transported to your site." },
    ],
    idealFor: "Real estate developers, civil contractors, retail plant nurseries, and municipal projects.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I would like to request a quote for Wholesale & Bulk Plant Supply.",
  },
  {
    id: "08",
    name: "Large-Scale Plantation",
    slug: "large-scale-plantation",
    shortDesc: "Plantation and greenery development for residential townships, industrial parks, and institutions.",
    fullDesc:
      "Executing greenfield afforestation, boundary shelterbelts, perimeter green walls, and avenue tree planting projects. We handle everything from soil auguring and organic enrichment to post-plantation establishment care.",
    deliverables: [
      "High-density native tree plantation planning",
      "Avenue and boundary tree sapling supply and planting",
      "Soil reconditioning and moisture-retentive amendments",
      "Tree staking, guard installation, and establishment monitoring",
      "Large-scale project enquiries accepted beyond Gujarat",
    ],
    process: [
      { step: "01", title: "Land Survey", desc: "Assessing soil depth, salinity, and water availability." },
      { step: "02", title: "Species Selection", desc: "Fast-growing indigenous shade and canopy species." },
      { step: "03", title: "Mechanized Planting", desc: "Systematic planting with high survival protocols." },
    ],
    idealFor: "Industrial townships, educational institutions, farm communities, and highway corridors.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    whatsappMessage: "Hello Shree Ganesh Nursery, I would like to enquire about Large-Scale Plantation services.",
  },
];
