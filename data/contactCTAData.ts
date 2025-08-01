// data/contactCta.ts
export interface ContactCTAAction {
  type: "whatsapp" | "phone" | "email" | "link";
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface ContactCTAData {
  content: {
    topLabel: string;
    heading: {
      main: string;
      highlight: string;
    };
    description: string;
  };
  actions: ContactCTAAction[];
  trustIndicators: string[];
  seo: {
    sectionId: string;
  };
}

export const contactCTAData: ContactCTAData = {
  content: {
    topLabel: "CONTACT US",
    heading: {
      main: "Reliable Plumbing Services",
      highlight: "Here When You Need Us",
    },
    description: `From leaky faucets to full system installations, we provide prompt and professional plumbing solutions tailored to your needs. 
      Our experienced team is available for emergency calls and scheduled appointments, always focused on delivering quality and peace of mind. 
      Reach out today for a no-obligation estimate.`,
  },
  actions: [
    {
      type: "whatsapp",
      label: "Message Us on WhatsApp",
      href: "https://wa.me/+1234567890",
      external: true,
      ariaLabel: "Chat with a plumber on WhatsApp",
    },
    {
      type: "phone",
      label: "Call Us Now",
      href: "tel:+1234567890",
      external: false,
      ariaLabel: "Call a plumber now for immediate service",
    },
  ],
  trustIndicators: [
    "Licensed & Insured Technicians",
    "Emergency Services Available",
    "Upfront & Transparent Pricing",
    "Customer Satisfaction Focused",
  ],
  seo: {
    sectionId: "contact",
  },
};
