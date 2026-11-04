export interface PlantItem {
  id: string;
  name: string;
  category: PlantCategory;
  botanicalNote?: string;
  description: string;
  careLevel: "Easy" | "Moderate" | "Attentive";
  sunlight: "Direct Sun" | "Bright Indirect" | "Partial Shade" | "Low to Bright";
  image: string;
  isFeatured?: boolean;
}

export type PlantCategory =
  | "Indoor Plants"
  | "Outdoor Plants"
  | "Flowering Plants"
  | "Palm Plants"
  | "Trees & Large Plants"
  | "Ornamental Plants"
  | "Climbers & Creepers"
  | "Bonsai & Specialty Plants";

export interface ProductCategory {
  name: string;
  description: string;
  image: string;
  items: string[];
}

export const plantCategories: { name: PlantCategory; description: string; image: string }[] = [
  {
    name: "Indoor Plants",
    description: "Air-purifying foliage and sculptural varieties suited for bright rooms, balconies, and office corners.",
    image: "/Homepage/indoor_plants.png",
  },
  {
    name: "Outdoor Plants",
    description: "Hardy tropical shrubs and sun-loving ornamental greens ideal for gardens, planters, and walkways.",
    image: "/Homepage/outdoor_plants.png",
  },
  {
    name: "Flowering Plants",
    description: "Fragrant Indian classics and vibrant seasonal blooms that bring colour, fragrance, and pollinators.",
    image: "/Homepage/flowering_plants.png",
  },
  {
    name: "Palm Plants",
    description: "Majestic feather and fan palms that add immediate tropical scale and architectural presence.",
    image: "/Homepage/palm_plants.png",
  },
  {
    name: "Trees & Large Plants",
    description: "Mature avenue trees, shade providers, and ornamental flowering canopies for larger developments.",
    image: "/Homepage/treees.png",
  },
  {
    name: "Ornamental Plants",
    description: "Foliage varieties celebrated for striking leaf patterns, contrasting variegation, and unique forms.",
    image: "/Homepage/ornamental.png",
  },
  {
    name: "Climbers & Creepers",
    description: "Fast-establishing vines for pergolas, compound walls, boundary grilles, and vertical screens.",
    image: "/Homepage/creepers_climbers.png",
  },
  {
    name: "Bonsai & Specialty Plants",
    description: "Artfully sculpted specimen trees and enduring bonsai cultivated with patient botanical craftsmanship.",
    image: "/Homepage/bonsai.png",
  },
];

export const curatedPlants: PlantItem[] = [
  // 1. Indoor Plants
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    category: "Indoor Plants",
    botanicalNote: "Ficus elastica",
    description: "Deep glossy leaves with robust architectural form, highly adaptable to filtered indoor sunlight.",
    careLevel: "Easy",
    sunlight: "Bright Indirect",
    image: "/Plants/items/Indoor Plants/Rubber-Plant.jpg",
    isFeatured: true,
  },
  {
    id: "monstera",
    name: "Monstera",
    category: "Indoor Plants",
    botanicalNote: "Monstera deliciosa",
    description: "Iconic split-leaf tropical statement plant celebrated for dramatic interior presence.",
    careLevel: "Easy",
    sunlight: "Bright Indirect",
    image: "/Plants/items/Indoor Plants/Monstera.jpg",
    isFeatured: true,
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "Indoor Plants",
    botanicalNote: "Sansevieria trifasciata",
    description: "Extremely resilient upright foliage that thrives in varying light conditions with minimal watering.",
    careLevel: "Easy",
    sunlight: "Low to Bright",
    image: "/Plants/items/Indoor Plants/Snake-Plant.jpg",
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    category: "Indoor Plants",
    botanicalNote: "Dypsis lutescens",
    description: "Feathery, arching golden-green fronds providing natural humidity and lush screening indoors.",
    careLevel: "Moderate",
    sunlight: "Bright Indirect",
    image: "/Plants/items/Indoor Plants/Areca-Palm.jpg",
    isFeatured: true,
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    category: "Indoor Plants",
    botanicalNote: "Zamioculcas zamiifolia",
    description: "Waxen deep green leaflets that endure low light, air conditioning, and dry soil with ease.",
    careLevel: "Easy",
    sunlight: "Low to Bright",
    image: "/Plants/items/Indoor Plants/ZZ-Plant.jpg",
  },

  // 2. Outdoor Plants
  {
    id: "croton",
    name: "Croton",
    category: "Outdoor Plants",
    botanicalNote: "Codiaeum variegatum",
    description: "Fiery yellow, orange, and crimson foliage that loves warm sunny positions in gardens and balconies.",
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    image: "/Plants/items/Outdoor Plants/Croton.jpg",
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    category: "Outdoor Plants",
    botanicalNote: "Hibiscus rosa-sinensis",
    description: "Showstopping blossoms in rich reds, corals, and pinks that bloom freely throughout warm seasons.",
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    image: "/Plants/items/Outdoor Plants/Hibiscus.jpg",
  },
  {
    id: "ixora",
    name: "Ixora",
    category: "Outdoor Plants",
    botanicalNote: "Ixora coccinea",
    description: "Dense evergreen hedge shrub adorned with vibrant clustered round floral balls year-round.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Outdoor Plants/Ixora.jpg",
  },
  {
    id: "duranta",
    name: "Duranta Golden",
    category: "Outdoor Plants",
    botanicalNote: "Duranta erecta",
    description: "Vibrant lime-yellow foliage widely prized for crisp geometric topiary and formal borders.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Outdoor Plants/Duranta-Golden.jpg",
  },
  {
    id: "ficus-panda",
    name: "Ficus Panda",
    category: "Outdoor Plants",
    botanicalNote: "Ficus microcarpa",
    description: "Thick round leaves and dense branching making it a prime candidate for outdoor hedges and shaping.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Outdoor Plants/Ficus-Panda.jpg",
  },

  // 3. Flowering Plants
  {
    id: "mogra",
    name: "Mogra (Arabian Jasmine)",
    category: "Flowering Plants",
    botanicalNote: "Jasminum sambac",
    description: "Beloved fragrant white flowers that perfume morning courtyards and open terraces.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Flowering Plants/Mogra.jpg",
    isFeatured: true,
  },
  {
    id: "rose",
    name: "Indian Rose",
    category: "Flowering Plants",
    botanicalNote: "Rosa indica",
    description: "Classic garden roses cultivated for radiant fragrance, deep petal layers, and repeated flushes.",
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    image: "/Plants/items/Flowering Plants/Indian-Rose.jpg",
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    category: "Flowering Plants",
    botanicalNote: "Bougainvillea spectabilis",
    description: "Spectacular paper-like floral bracts cascading in magenta, scarlet, and pure white hues.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Flowering Plants/Bougainvillea.jpg",
    isFeatured: true,
  },
  {
    id: "adenium",
    name: "Adenium (Desert Rose)",
    category: "Flowering Plants",
    botanicalNote: "Adenium obesum",
    description: "Sculptural swollen caudex with brilliant trumpet blooms that flourish in full Gujarat heat.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Flowering Plants/Adenium.jpg",
  },
  {
    id: "sonchampa",
    name: "Sonchampa (Golden Champa)",
    category: "Flowering Plants",
    botanicalNote: "Magnolia champaca",
    description: "Legendary intensely aromatic golden blossoms traditionally grown in auspicious Indian gardens.",
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    image: "/Plants/items/Flowering Plants/Sonchampa.jpg",
  },

  // 4. Palm Plants
  {
    id: "coastal-palm",
    name: "Coastal Palm",
    category: "Palm Plants",
    botanicalNote: "Client-confirmed variety",
    description: "Graceful resilient palm with wide feathering fronds that handle wind and intense sunlight.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Palm Plants/Coastal-Palm.jpg",
    isFeatured: true,
  },
  {
    id: "foxtail-palm",
    name: "Foxtail Palm",
    category: "Palm Plants",
    botanicalNote: "Wodyetia bifurcata",
    description: "Distinctive bottle-brush plumage with plush foliage that brings immediate luxury to driveways.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Palm Plants/Foxtail-Palm.jpg",
  },
  {
    id: "bottle-palm",
    name: "Bottle Palm",
    category: "Palm Plants",
    botanicalNote: "Hyophorbe lagenicaulis",
    description: "Unique swollen trunk resembling an antique bottle, crowned with stately stiff pinnate leaves.",
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    image: "/Plants/items/Palm Plants/Bottle-Palm.jpg",
  },
  {
    id: "bismarck-palm",
    name: "Bismarck Palm",
    category: "Palm Plants",
    botanicalNote: "Bismarckia nobilis",
    description: "Majestic silver-blue fan fronds creating one of the most striking specimen focal points in modern architecture.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Palm Plants/Bismarck-Palm.jpg",
  },

  // 5. Trees & Large Plants
  {
    id: "tabebuia",
    name: "Tabebuia (Pink / Yellow Trumpet)",
    category: "Trees & Large Plants",
    botanicalNote: "Handroanthus chrysotrichus",
    description: "Breathtaking seasonal explosion of trumpet-shaped yellow or pink blooms against bare branches.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Trees and Large Plants/Tabebuia.jpg",
    isFeatured: true,
  },
  {
    id: "ashoka",
    name: "Pendula Ashoka",
    category: "Trees & Large Plants",
    botanicalNote: "Polyalthia longifolia pendula",
    description: "Slender columnar evergreen tree ideal for creating tall visual boundaries, sound breaks, and avenue lining.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Trees and Large Plants/Pendula-Ashoka.jpg",
  },
  {
    id: "neem",
    name: "Neem Tree",
    category: "Trees & Large Plants",
    botanicalNote: "Azadirachta indica",
    description: "Venerated medicinal shade tree providing cooling breezes and natural pest resistance.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Trees and Large Plants/Neem-Tree.jpg",
  },
  {
    id: "gulmohar",
    name: "Gulmohar (Royal Poinciana)",
    category: "Trees & Large Plants",
    botanicalNote: "Delonix regia",
    description: "Wide umbrella canopy bursting with vivid flame-orange petals during the onset of summer.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Trees and Large Plants/Gulmohar.jpg",
  },

  // 6. Ornamental Plants
  {
    id: "mor-pankh",
    name: "Mor Pankh (Oriental Arborvitae)",
    category: "Ornamental Plants",
    botanicalNote: "Thuja orientalis / Platycladus",
    description: "Distinctive peacock-feather fan foliage revered across Indian landscapes for symmetry and grace.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Ornamental Plants/Mor-Pankh.jpg",
    isFeatured: true,
  },
  {
    id: "dracaena",
    name: "Dracaena Song of India",
    category: "Ornamental Plants",
    botanicalNote: "Dracaena reflexa",
    description: "Golden-margined spiralling ribbons that bring textural contrast to garden borders and terrace pots.",
    careLevel: "Easy",
    sunlight: "Bright Indirect",
    image: "/Plants/items/Ornamental Plants/Dracaena-Song-of-India.jpg",
  },
  {
    id: "cordyline",
    name: "Cordyline Red Sister",
    category: "Ornamental Plants",
    botanicalNote: "Cordyline fruticosa",
    description: "Electrifying magenta and bronze foliage providing brilliant perennial colour without relying on flowers.",
    careLevel: "Moderate",
    sunlight: "Partial Shade",
    image: "/Plants/items/Ornamental Plants/Cordyline-Red-Sister.jpg",
  },
  {
    id: "fittonia",
    name: "Fittonia (Nerve Plant)",
    category: "Ornamental Plants",
    botanicalNote: "Fittonia albivenis",
    description: "Delicate mosaic of white and pink veins on deep green, perfect for tabletop bowls and shaded terrariums.",
    careLevel: "Moderate",
    sunlight: "Partial Shade",
    image: "/Plants/items/Ornamental Plants/Fittonia.jpg",
  },

  // 7. Climbers & Creepers
  {
    id: "krishna-vel",
    name: "Krishna Vel (Passion Flower)",
    category: "Climbers & Creepers",
    botanicalNote: "Passiflora incarnata",
    description: "Intricately detailed cosmic flowers steeped in cultural symbolism, thriving on grilles and arches.",
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    image: "/Plants/items/Blue_Clockvine.jpg",
    isFeatured: true,
  },
  {
    id: "jui-bel",
    name: "Jui Bel (Juhi Jasmine Creeper)",
    category: "Climbers & Creepers",
    botanicalNote: "Jasminum auriculatum",
    description: "Vigorous traditional Indian climber bearing clusters of deeply scented star-shaped white blossoms.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "madhumalti",
    name: "Madhumalti (Rangoon Creeper)",
    category: "Climbers & Creepers",
    botanicalNote: "Combretum indicum",
    description: "Spectacular hanging sprays that open white, mature to pink, and deepen to deep crimson.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Rangoon_Creeper.jpg",
  },
  {
    id: "money-plant",
    name: "Golden Money Plant",
    category: "Climbers & Creepers",
    botanicalNote: "Epipremnum aureum",
    description: "Heart-shaped splashed golden foliage that scales moss poles or cascades gracefully from high ledges.",
    careLevel: "Easy",
    sunlight: "Low to Bright",
    image: "/Plants/items/Money_Plant.jpg",
  },

  // 8. Bonsai & Specialty Plants
  {
    id: "ficus-bonsai",
    name: "Ficus Microcarpa Bonsai",
    category: "Bonsai & Specialty Plants",
    botanicalNote: "Ficus retusa / microcarpa",
    description: "Sturdy gnarled aerial roots and compact crown trained into an enduring miniature landscape.",
    careLevel: "Moderate",
    sunlight: "Bright Indirect",
    image: "/Plants/items/Bonsai_Ficus.jpg",
    isFeatured: true,
  },
  {
    id: "jade-bonsai",
    name: "Jade Bonsai (Portulacaria)",
    category: "Bonsai & Specialty Plants",
    botanicalNote: "Portulacaria afra",
    description: "Fleshy succulent leaves on thick reddish trunks symbolizing prosperity and enduring growth.",
    careLevel: "Easy",
    sunlight: "Direct Sun",
    image: "/Plants/items/Jade_Plant.jpg",
  },
  {
    id: "juniper-bonsai",
    name: "Juniper Specimen",
    category: "Bonsai & Specialty Plants",
    botanicalNote: "Juniperus procumbens",
    description: "Needled evergreen branches sculpted with windswept character and subtle branch movement.",
    careLevel: "Attentive",
    sunlight: "Direct Sun",
    image: "/Plants/items/Trees and Large Plants/juniper_specimen.png",
  },
];

export const additionalProducts: ProductCategory[] = [
  {
    name: "Terracotta & Ceramic Pots",
    description: "Handcrafted porous terracotta for root aeration, alongside glazed ceramic pots for contemporary interior spaces.",
    image: "/Homepage/terracota.png",
    items: ["Handmade clay terracotta pots", "Glazed indoor ceramics", "Saucers and water catchers", "Bonsai shallow trays"],
  },
  {
    name: "Architectural & Lightweight Planters",
    description: "Weather-resistant fibre, FRP, and rotomoulded planters engineered for rooftop terraces, balconies, and commercial lobbies.",
    image: "/Homepage/architectural_plants.png",
    items: ["FRP geometric planters", "Trough balcony planters", "Corten-effect modern planters", "Self-watering pots"],
  },
  {
    name: "Organic Soils & Manure",
    description: "Nutrient-balanced potting blends formulated specifically for Ahmedabad’s semi-arid weather and drainage requirements.",
    image: "/Homepage/organic_soil.png",
    items: ["Enriched potting soil", "Aged cow dung manure (Gobar Khad)", "Washed red soil", "Lightweight perlite mix"],
  },
  {
    name: "Plant Nutrients & Organic Fertilizers",
    description: "Slow-release organic inputs, vermicompost, and neem cake for disease suppression, robust root networks, and profuse blooms.",
    image: "/Homepage/plant_nutrients.png",
    items: ["Pure vermicompost", "Neem cake powder (Khol)", "Bone meal & seaweed extract", "Micronutrient foliar spray"],
  },
  {
    name: "Gardening Tools & Accessories",
    description: "Essential precision shears, hand trowels, moisture testers, and coco peat blocks for dedicated plant enthusiasts.",
    image: "/Homepage/gardening_tools.png",
    items: ["Bypass pruners and shears", "Stainless steel trowels", "Treated coco peat blocks", "Moss poles and climbing supports"],
  },
];
