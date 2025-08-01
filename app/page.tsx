import dynamic from "next/dynamic";

// Lazy load components
const Hero = dynamic(() => import("@/components/Hero"));
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const ServiceHighlights = dynamic(
  () => import("@/components/ServiceHighlights")
);
const PlumbingService = dynamic(() => import("@/components/PlumbingService"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const PlumbingServices = dynamic(() => import("@/components/PlumbingServices"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ContactCTA = dynamic(() => import("@/components/ContactCTA"));

export default function Home() {
  return (
    <main className="flex w-full min-h-screen bg-background text-foreground flex-col items-center justify-between">
      <Hero />

      <ServiceHighlights />

      <AboutUs />

      <PlumbingService />

      <Gallery />

      <PlumbingServices />

      <Testimonials />

      <ContactCTA />
    </main>
  );
}
