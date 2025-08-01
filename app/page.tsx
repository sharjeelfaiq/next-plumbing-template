import {
  Hero,
  AboutUs,
  ServiceHighlights,
  PlumbingService,
  Gallery,
  PlumbingServices,
  Testimonials,
  ContactCTA,
  FadeIn,
} from "@/components/index";

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

      <FadeIn direction="up" distance={40}>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <ContactCTA />
      </FadeIn>
    </main>
  );
}
