export interface PlumbingServiceData {
  image: {
    src: string;
    alt: string;
  };
  badge: {
    title: string;
    subtitle: string;
  };
  heading: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
  cta: {
    estimate: {
      label: string;
      href: string;
    };
    emergency: {
      label: string;
      href: string;
    };
  };
  highlights: string[];
}

export const plumbingServiceData: PlumbingServiceData = {
  image: {
    src: "/placeholder-image-3.webp",
    alt: "Experienced plumber providing reliable plumbing services for homes and businesses",
  },
  badge: {
    title: "24/7",
    subtitle: "Emergency Service",
  },
  heading: "Reliable Plumbing Services & Emergency Support",
  description:
    "Our experienced and certified plumbers offer dependable plumbing solutions for residential and commercial properties. From routine repairs and system upgrades to urgent emergency services, we focus on quality workmanship, safety, and customer satisfaction.",
  services: [
    {
      title: "Fixture & System Installations",
      description:
        "Professional installation of faucets, toilets, water heaters, and complete plumbing systems with full service support.",
    },
    {
      title: "Preventive Maintenance Plans",
      description:
        "Scheduled maintenance to reduce breakdowns, improve efficiency, and extend the life of your plumbing systems.",
    },
    {
      title: "Emergency Plumbing Response",
      description:
        "Round-the-clock support for urgent issues like burst pipes, major leaks, and sewer backups.",
    },
    {
      title: "Drain & Sewer Services",
      description:
        "Clog removal, sewer line inspections, and drain cleaning using safe and effective methods.",
    },
  ],
  cta: {
    estimate: {
      label: "Request Free Estimate",
      href: "#contact",
    },
    emergency: {
      label: "Call Now for 24/7 Help",
      href: "tel:+1234567890",
    },
  },
  highlights: [
    "Licensed & Insured",
    "Upfront Pricing",
    "Satisfaction Guaranteed",
  ],
};
