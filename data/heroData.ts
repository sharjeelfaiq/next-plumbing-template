export interface HeroData {
  backgroundImage: {
    src: string;
    alt: string;
  };
  heading: {
    main: string;
    sub: string;
  };
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  trustIndicators: string[];
}

export const heroData: HeroData = {
  backgroundImage: {
    src: "/placeholder-hero-image.webp",
    alt: "Professional plumbing services - expert technician working",
  },
  heading: {
    main: "Professional Plumbing",
    sub: "You Can Trust",
  },
  description:
    "Expert solutions for residential and commercial plumbing needs. Available 24/7 for emergency repairs with licensed, insured professionals.",
  primaryButton: {
    text: "Emergency Service 24/7",
    href: "https://wa.me/+1234567890",
  },
  secondaryButton: {
    text: "Schedule Appointment",
    href: "#contact",
  },
  trustIndicators: [
    "Licensed & Insured",
    "10+ Years Experience",
    "24/7 Emergency Service",
  ],
};
