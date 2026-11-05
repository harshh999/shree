export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "plants",
    title: "Plants & Products",
    questions: [
      {
        question: "What types of plants are available?",
        answer:
          "We offer a variety of plants, including flowering plants, indoor plants, outdoor plants, trees, bonsai and speciality plants. Explore our Plants & Products section for more information.",
      },
      {
        question: "Do you have indoor plants?",
        answer:
          "Yes, we offer indoor plants suitable for homes and workspaces. Visit our nursery or contact our team for assistance in selecting the right plants.",
      },
      {
        question: "Do you sell pots and planters?",
        answer:
          "We offer planters and related gardening products. Contact our team for details about available options.",
      },
      {
        question: "Can I visit the nursery to select plants?",
        answer:
          "Yes! You can visit Shree Ganesh Nursery & Farm in Ahmedabad and explore our collection in person.",
      },
    ],
  },
  {
    id: "care",
    title: "Plant Care & Gardening",
    questions: [
      {
        question: "Can you help me choose plants for my home?",
        answer:
          "Absolutely. Our team can help you choose plants based on your available space, sunlight and preferences.",
      },
      {
        question: "Do you provide gardening guidance?",
        answer:
          "Yes, our team can guide you with basic plant selection and gardening requirements. Contact us for assistance.",
      },
      {
        question: "Which plants are suitable for balconies?",
        answer:
          "The right choice depends on sunlight, space and maintenance requirements. Our team can help you find suitable balcony plants.",
      },
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping Services",
    questions: [
      {
        question: "Do you provide landscaping services?",
        answer:
          "Yes, we offer landscaping solutions for different types of spaces. Contact our team to discuss your project.",
      },
      {
        question: "Do you work on residential gardens?",
        answer:
          "We provide residential gardening and landscaping solutions. Get in touch with our team to discuss your requirements.",
      },
      {
        question: "Do you handle corporate landscaping?",
        answer:
          "Yes, we offer corporate landscaping solutions. Contact our team to discuss your commercial property requirements.",
      },
      {
        question: "Do you provide terrace and balcony gardening?",
        answer:
          "Yes, we provide gardening solutions for terraces and balconies. Contact us to discuss your space.",
      },
    ],
  },
  {
    id: "rentals",
    title: "Plant Rentals",
    questions: [
      {
        question: "Do you provide plants on rent?",
        answer:
          "Yes, plant rental is one of our services. Contact our team to discuss your requirements and rental options.",
      },
      {
        question: "Can I rent plants for an event or office?",
        answer:
          "Contact our team with your event or office requirements to discuss suitable plant rental arrangements.",
      },
    ],
  },
  {
    id: "wholesale",
    title: "Wholesale Enquiries",
    questions: [
      {
        question: "Do you offer wholesale plants?",
        answer:
          "Yes, we offer wholesale as a service. Contact our team to discuss your quantity and plant requirements.",
      },
      {
        question: "Can landscapers contact you for bulk orders?",
        answer:
          "Yes. Please contact our team with your plant list and approximate quantities for wholesale enquiries.",
      },
    ],
  },
  {
    id: "location",
    title: "Nursery Location & Timings",
    questions: [
      {
        question: "Where is the nursery located?",
        answer:
          "Shree Ganesh Nursery & Farm is located in SBR, Ahmedabad. Use the Contact page for directions.",
      },
      {
        question: "How can I contact the nursery?",
        answer:
          "You can call us directly at +91 95861 09298 or contact us through WhatsApp.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact & Enquiries",
    questions: [
      {
        question: "How can I enquire about a service?",
        answer:
          "You can contact our team directly through WhatsApp or call us at +91 95861 09298.",
      },
      {
        question: "Can I request a landscaping consultation?",
        answer:
          "Yes. Contact our team through WhatsApp and share your project requirements to get started.",
      },
    ],
  },
];

