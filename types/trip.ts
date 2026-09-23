export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  location?: string;
  highlights?: string[];
  stay?: string;
  mealsIncluded?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Trip {
  id: string;
  slug: string;
  name: string;
  location: string;
  state: string;
  shortDescription: string;
  description: string;
  startDate: string; // ISO or formatted date "15 Oct 2026"
  endDate: string;   // ISO or formatted date "20 Oct 2026"
  duration: string;  // e.g. "6 Days • 5 Nights"
  price: number;
  formattedPrice: string; // e.g. "₹24,999"
  currency: string;  // e.g. "INR"
  coverImage: string;
  gallery: string[];
  highlights: string[];
  itinerary: ItineraryItem[];
  included: string[];
  excluded: string[];
  faqs: FAQItem[];
  whatsappMessage: string;
  category: string;
  groupSize: string;
  difficulty: 'Easy' | 'Easy-Moderate' | 'Moderate' | 'Challenging';
  featured?: boolean;
  isUpcoming: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string; // e.g. "919876543210"
  whatsappDisplay: string; // e.g. "+91 98765 43210"
  instagramUrl: string;
  instagramHandle: string;
  email: string;
  phone: string;
  address: string;
}
