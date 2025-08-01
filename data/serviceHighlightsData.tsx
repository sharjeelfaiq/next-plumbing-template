import { Wrench, Home, Clock } from "lucide-react";
import { ReactNode } from "react";

interface ServiceHighlight {
  icon: ReactNode;
  title: string;
  description: string;
  badges: string[];
}

interface CallToAction {
  title: string;
  description: string;
  buttons: [string, string];
}

interface ServiceHighlightsData {
  headline: string;
  subtext: string;
  services: ServiceHighlight[];
  cta: CallToAction;
}

export const serviceHighlightsData: ServiceHighlightsData = {
  headline: "Trusted Plumbing Experts",
  subtext:
    "Providing reliable plumbing services to residential and commercial clients with licensed, insured, and professional technicians.",
  services: [
    {
      icon: <Wrench size={36} className="text-primary" />,
      title: "24/7 Emergency Plumbing",
      description:
        "Round-the-clock emergency response for leaks, clogs, and burst pipes. Fast, dependable service when you need it most.",
      badges: ["24/7 Service", "Licensed Technicians"],
    },
    {
      icon: <Home size={36} className="text-primary" />,
      title: "Residential Plumbing Solutions",
      description:
        "Full-service plumbing for homes, condos, and apartments. From fixture installation to pipe repairs — we handle it all.",
      badges: ["Trusted by Homeowners", "Satisfaction Guaranteed"],
    },
    {
      icon: <Clock size={36} className="text-primary" />,
      title: "Fast & Reliable Response",
      description:
        "Same-day plumbing appointments with clear pricing and expert workmanship. Your convenience is our priority.",
      badges: ["Same-Day Service", "Transparent Pricing"],
    },
  ],
  cta: {
    title: "Have a Plumbing Issue? Get in Touch Today!",
    description:
      "Whether it’s an emergency or a scheduled service, our licensed plumbers are ready to assist you anytime.",
    buttons: ["Call Now: (555) 123-PIPE", "Request a Free Quote"],
  },
};
