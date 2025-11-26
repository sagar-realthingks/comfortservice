export const CONTACT_INFO = {
  companyName: "Comfort Technical Service",
  phone: "+91 9876543210", // Update with actual number
  whatsapp: "+919876543210", // Update with actual number (no spaces or dashes)
  email: "contact@comforttechnical.com",
  address: "COMFORT TECHNICAL SERVICES, NIKHIL NIWAS, SURVEY NO.179, SHOP NO-02, FIRST FLOOR, NEAR GA, Pune, PIMPRI CHINCHWAD, MH 411035",
  workingHours: "Mon - Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 6:00 PM",
  experienceText: "Worked with multiple companies in the Pune area"
};

export const SERVICES = [
  {
    id: "repair",
    name: "AC Repair & Troubleshooting",
    description: "Quick diagnosis and repair of all AC issues including cooling problems, water leakage, and unusual sounds.",
    startingPrice: "₹299"
  },
  {
    id: "servicing",
    name: "AC Servicing",
    description: "Basic and deep cleaning services to maintain optimal AC performance and air quality.",
    startingPrice: "₹399"
  },
  {
    id: "installation",
    name: "AC Installation & Uninstallation",
    description: "Professional installation and safe uninstallation of all AC types with proper setup.",
    startingPrice: "₹799"
  },
  {
    id: "gas-refill",
    name: "Gas Refilling & Leakage Fix",
    description: "Expert gas refilling and leakage detection to restore cooling efficiency.",
    startingPrice: "₹1,499"
  },
  {
    id: "amc-home",
    name: "AMC for Homes",
    description: "Annual maintenance contracts with regular servicing and priority support for residential properties.",
    startingPrice: "₹2,999/year"
  },
  {
    id: "amc-commercial",
    name: "AMC for Offices/Commercial",
    description: "Comprehensive AMC plans for offices and commercial spaces with multiple AC units.",
    startingPrice: "Contact us"
  }
];

export const AMC_PLANS = [
  {
    name: "Basic",
    subtitle: "For Small Homes",
    price: "₹2,999",
    duration: "/year",
    visits: "2 visits/year",
    features: [
      "Basic cleaning & servicing",
      "Filter cleaning",
      "Gas pressure check",
      "General inspection",
      "Priority support"
    ]
  },
  {
    name: "Standard",
    subtitle: "Most Popular",
    price: "₹4,999",
    duration: "/year",
    visits: "3 visits/year",
    features: [
      "All Basic features",
      "Deep cleaning included",
      "Minor repairs covered",
      "Gas top-up (up to 100g)",
      "24/7 emergency support",
      "10% off on parts"
    ],
    popular: true
  },
  {
    name: "Premium",
    subtitle: "For Offices",
    price: "₹7,999",
    duration: "/year",
    visits: "4 visits/year",
    features: [
      "All Standard features",
      "Free gas refill (up to 250g)",
      "All minor repairs free",
      "Same-day response",
      "Dedicated technician",
      "15% off on parts"
    ]
  }
];