// data/about.ts
export interface AboutData {
  content: {
    title: string;
    description: string;
    features: string[];
  };
  media: {
    mainImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  badge: {
    primaryText: string;
    secondaryText: string;
  };
  actions: {
    primaryCta: {
      text: string;
      href: string;
      ariaLabel?: string;
    };
  };
  seo: {
    sectionId: string;
  };
}

export const aboutData: AboutData = {
  content: {
    title: "Trusted Plumbing Experts",
    description: `We provide reliable plumbing services for homes and businesses, including pipe repairs, fixture installations, leak detection, and water system maintenance. Our certified team is dedicated to delivering quality workmanship and customer satisfaction on every job.`,
    features: [
      "Certified & Insured Technicians",
      "Residential & Commercial Services",
      "24/7 Emergency Availability",
      "Upfront & Honest Pricing",
    ],
  },
  media: {
    mainImage: {
      src: "/placeholder-image-1.webp",
      alt: "Experienced plumber repairing residential piping system",
      width: 800,
      height: 600,
    },
  },
  badge: {
    primaryText: "10+",
    secondaryText: "Years of Service",
  },
  actions: {
    primaryCta: {
      text: "Get a Free Estimate",
      href: "#contact",
      ariaLabel: "Request a free estimate for plumbing services",
    },
  },
  seo: {
    sectionId: "about",
  },
};
