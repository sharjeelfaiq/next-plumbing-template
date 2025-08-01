import { Wrench, Home, Clock } from "lucide-react";
import { ReactNode } from "react";

interface ServiceItem {
  icon: ReactNode;
  title: string;
  desc: string;
  badges: string[];
}

interface CTA {
  title: string;
  description: string;
  buttons: [string, string];
}

interface ServiceHighlightsContent {
  heading: string;
  description: string;
  services: ServiceItem[];
  cta: CTA;
}

export const serviceHighlightsContent: ServiceHighlightsContent = {
  heading: "Reliable Plumbing Services You Can Trust",
  description:
    "Providing professional, insured, and dependable plumbing solutions for homes and properties of all sizes. Our experts are committed to quality and customer satisfaction.",
  services: [
    {
      icon: <Wrench size={36} className="text-primary" />,
      title: "24/7 Emergency Plumbing",
      desc: "Certified professionals available day and night to handle urgent plumbing issues, including burst pipes, major leaks, and sewer backups.",
      badges: ["Emergency Service", "Fully Licensed & Insured"],
    },
    {
      icon: <Home size={36} className="text-primary" />,
      title: "Residential Plumbing Solutions",
      desc: "Comprehensive services for homes, condos, and apartments — from fixture installations to pipe repairs — with quality workmanship guaranteed.",
      badges: ["Trusted Technicians", "Satisfaction Guaranteed"],
    },
    {
      icon: <Clock size={36} className="text-primary" />,
      title: "Fast & Reliable Response",
      desc: "Same-day appointments available. We offer upfront pricing and dependable service to minimize disruption and maximize value.",
      badges: ["Same-Day Service", "Transparent Pricing"],
    },
  ],
  cta: {
    title: "Need Help with Plumbing? Call Anytime.",
    description:
      "Our experienced plumbers are ready 24/7 to assist with any issue — large or small. Contact us today for fast, friendly service.",
    buttons: ["Call Now: (555) 123-PIPE", "Get Free Estimate"],
  },
};
