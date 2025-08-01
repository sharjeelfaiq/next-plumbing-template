// Updated Hero.tsx
import Image from "next/image";
import { heroData } from "@/data";
import Button from "@/components/common/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] w-full"
    >
      <div className="absolute inset-0">
        <Image
          src={heroData.backgroundImage.src}
          alt={heroData.backgroundImage.alt}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60 sm:bg-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {heroData.heading.main}
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-300 mt-1 sm:mt-2">
            {heroData.heading.sub}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
          {heroData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            href={heroData.primaryButton.href}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-auto"
            fullWidth={true}
          >
            {heroData.primaryButton.text}
          </Button>

          <Button
            href={heroData.secondaryButton.href}
            variant="outline"
            size="lg"
            className="border-blue-300 text-slate-300 hover:bg-blue-300 hover:text-white sm:w-auto"
            fullWidth={true}
          >
            {heroData.secondaryButton.text}
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6 text-blue-100">
          {heroData.trustIndicators.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
              <span className="text-xs sm:text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
