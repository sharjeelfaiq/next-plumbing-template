import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ServiceHighlights from "@/components/ServiceHighlights";
import PlumbingService from "@/components/PlumbingService";
import Gallery from "@/components/Gallery";
import PlumbingServices from "@/components/PlumbingServices";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import LogoSection from "@/components/LogoSection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen bg-background text-foreground flex-col items-center justify-between">
      <Hero />

      <FadeIn>
        <ServiceHighlights />
      </FadeIn>

      <FadeIn direction="right" distance={50}>
        <AboutUs />
      </FadeIn>

      <FadeIn direction="left" distance={50}>
        <PlumbingService />
      </FadeIn>

      <FadeIn>
        <Gallery />
      </FadeIn>

      <FadeIn>
        <PlumbingServices />
      </FadeIn>

      <FadeIn>
        <LogoSection />
      </FadeIn>

      <FadeIn direction="up" distance={40}>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <ContactCTA />
      </FadeIn>
    </main>
  );
}
