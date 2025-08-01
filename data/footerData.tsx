// data/footer.ts
import {
  Facebook,
  Instagram,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface FooterContactInfo {
  type: "phone" | "whatsapp" | "email" | "location";
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
  external?: boolean;
  ariaLabel?: string;
}

export interface FooterSocialLink {
  icon: LucideIcon;
  href: string;
  platform: string;
  ariaLabel: string;
  external?: boolean;
}

export interface FooterQuickLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface FooterData {
  branding: {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    description: string;
  };
  navigation: {
    quickLinks: FooterQuickLink[];
    socialLinks: FooterSocialLink[];
  };
  contact: {
    info: FooterContactInfo[];
  };
  credentials: string[];
  legal: {
    copyright: string;
    currentYear: boolean;
  };
  ui: {
    sections: {
      quickLinks: {
        title: string;
      };
      contactInfo: {
        title: string;
      };
    };
  };
}

export const footerData: FooterData = {
  branding: {
    logo: {
      src: "/logo-placeholder.webp",
      alt: "Generic Plumbing Company Logo",
      width: 80,
      height: 80,
    },
    description: `Offering dependable plumbing solutions for households, businesses, and property managers. 
      Our team is dedicated to quality service, honest pricing, and customer satisfaction.`,
  },
  navigation: {
    socialLinks: [
      {
        icon: Facebook,
        href: "#",
        platform: "Facebook",
        ariaLabel: "Follow us on Facebook",
        external: true,
      },
      {
        icon: Instagram,
        href: "#",
        platform: "Instagram",
        ariaLabel: "View our plumbing projects on Instagram",
        external: true,
      },
      {
        icon: Mail,
        href: "mailto:info@yourplumber.com",
        platform: "Email",
        ariaLabel: "Email us your plumbing request",
      },
    ],
    quickLinks: [
      { label: "Home", href: "/", ariaLabel: "Go to homepage" },
      {
        label: "About Us",
        href: "#about",
        ariaLabel: "Learn more about our plumbing company",
      },
      {
        label: "Services",
        href: "#services",
        ariaLabel: "See our plumbing services",
      },
      {
        label: "Testimonials",
        href: "#testimonials",
        ariaLabel: "Read customer testimonials",
      },
      {
        label: "Contact",
        href: "#contact",
        ariaLabel: "Contact our plumbing team",
      },
    ],
  },
  contact: {
    info: [
      {
        type: "phone",
        label: "Phone",
        value: "+1 (234) 567-890",
        href: "tel:+1234567890",
        icon: Phone,
        ariaLabel: "Call us for plumbing help",
      },
      {
        type: "whatsapp",
        label: "WhatsApp",
        value: "Message us anytime",
        href: "https://wa.me/+1234567890",
        icon: MessageSquare,
        external: true,
        ariaLabel: "Chat with our plumbing team on WhatsApp",
      },
      {
        type: "email",
        label: "Email",
        value: "info@yourplumber.com",
        href: "mailto:info@yourplumber.com",
        icon: Mail,
        ariaLabel: "Email us your plumbing inquiry",
      },
      {
        type: "location",
        label: "Service Area",
        value: "Proudly Serving Local Communities",
        icon: MapPin,
        ariaLabel: "View our plumbing service area",
      },
    ],
  },
  credentials: [
    "Licensed & Insured",
    "24/7 Emergency Plumbing",
    "Certified Plumbing Experts",
    "Satisfaction Guaranteed",
  ],
  legal: {
    copyright:
      "© All rights reserved. Quality plumbing services you can rely on.",
    currentYear: true,
  },
  ui: {
    sections: {
      quickLinks: {
        title: "Quick Links",
      },
      contactInfo: {
        title: "Contact Information",
      },
    },
  },
};
