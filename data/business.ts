export interface BusinessInfo {
  name: string;
  tagline: string;
  established: string;
  founder: string;
  teamSize: number;
  customersServed: string;
  locationsCount: number;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsapp: string;
    whatsappDisplay: string;
    whatsappUrl: string;
    email: string;
    emailHref: string;
  };
  hours: {
    days: string;
    opens: string;
    closes: string;
    display: string;
  };
  social: {
    instagram: string;
    instagramHandle: string;
    googleBusiness: string;
    googleMapsEmbed: string;
  };
  deliveryPolicy: {
    within5km: string;
    beyond5km: string;
    note: string;
  };
  geographicReach: string;
  advantages: string[];
}

export const businessInfo: BusinessInfo = {
  name: "Shree Ganesh Nursery & Farm",
  tagline: "Bring nature closer to home.",
  established: "2018–2019",
  founder: "Mahinder Singh",
  teamSize: 10,
  customersServed: "1,000+",
  locationsCount: 1,
  address: {
    line1: "Narmada House, Stellar Friends Avenue",
    line2: "Sindhubhavan Road, Bodakdev",
    line3: "Ahmedabad, Gujarat 380059",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380059",
    full: "Narmada House, Stellar Friends Avenue, Sindhubhavan Road, Bodakdev, Ahmedabad, Gujarat 380059",
  },
  contact: {
    phone: "9586109298",
    phoneDisplay: "+91 95861 09298",
    phoneHref: "tel:+919586109298",
    whatsapp: "6397390182",
    whatsappDisplay: "+91 63973 90182",
    whatsappUrl:
      "https://wa.me/916397390182?text=Hello%20Shree%20Ganesh%20Nursery%20%26%20Farm%2C%20I%20would%20like%20to%20enquire%20about%20your%20plants%20and%20services.",
    email: "singhmahendra1198@gmail.com",
    emailHref: "mailto:singhmahendra1198@gmail.com",
  },
  hours: {
    days: "Monday to Sunday",
    opens: "06:00",
    closes: "23:00",
    display: "Daily, 6:00 AM – 11:00 PM",
  },
  social: {
    instagram: "https://www.instagram.com/shree_ganesh_nursury_farm_/",
    instagramHandle: "@shree_ganesh_nursury_farm_",
    googleBusiness: "https://share.google/14AMMlOsOfxi6t0ps",
    googleMapsEmbed:
      "https://www.google.com/maps?q=Shree+Ganesh+Nursery+Farm+Bodakdev+Ahmedabad&output=embed",
  },
  deliveryPolicy: {
    within5km: "Free nursery delivery within 5 km",
    beyond5km: "Delivery charges apply beyond 5 km",
    note: "Transport and logistics are arranged per order size and destination.",
  },
  geographicReach:
    "Based on Sindhubhavan Road, Bodakdev, Ahmedabad. We gladly accept enquiries from outside Gujarat and undertake larger landscaping and bulk supply projects beyond state borders, subject to project feasibility.",
  advantages: [
    "Established Ahmedabad nursery with years of operational horticultural experience.",
    "More than 1,000 residential, institutional and commercial customers served.",
    "Dedicated in-house team of approximately 10 trained plant care specialists.",
    "Complete range: Retail nursery, landscape design, ongoing maintenance, plant rentals and wholesale supply under one roof.",
    "Protective packaging and arranged transportation for bulk supply orders.",
    "Customizable plant rental arrangements for events, offices and exhibitions.",
    "Active project execution in Ahmedabad with capabilities extending beyond Gujarat.",
  ],
};
