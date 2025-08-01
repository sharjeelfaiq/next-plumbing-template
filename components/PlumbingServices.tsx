import Image from "next/image";
import Link from "next/link";
import {
  plumbingServicesContent,
  plumbingServicesData,
  plumbingServicesConfig,
} from "@/data";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-border`}>
      <div className={`relative h-64 md:h-80 ${!isEven ? 'md:order-2' : ''}`}>
        <Image
          src={service.image}
          alt={service.altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary/90 rounded-full p-4 w-20 h-20 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <Image
              src={plumbingServicesConfig.brand.icon}
              alt={plumbingServicesConfig.brand.altText}
              width={32}
              height={32}
              className="opacity-90"
            />
          </div>
        </div>
      </div>

      <div className={`p-6 md:p-8 ${!isEven ? 'md:order-1' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-primary rounded-full w-2 h-2" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            {service.subtitle}
          </span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {service.description}
        </p>
        
        <p className="text-sm text-muted-foreground mb-6 italic">
          {service.brands}
        </p>

        <div className="space-y-3 mb-4">
          <Link
            href={plumbingServicesContent.ctaTop.whatsappHref}
            target="_blank"
            className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
          >
            {plumbingServicesContent.ctaTop.whatsappLabel}
          </Link>
          <Link
            href={plumbingServicesContent.ctaTop.phoneHref}
            className="block bg-muted hover:bg-primary/10 text-foreground hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-border text-center"
          >
            {plumbingServicesContent.ctaTop.phoneLabel}
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          {plumbingServicesContent.serviceFooter.tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1">
              <div className="bg-primary rounded-full w-1.5 h-1.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => (
  <div className="mt-16 text-center bg-primary/5 rounded-lg p-8 border border-border">
    <h3 className="text-xl font-bold text-foreground mb-3">
      {plumbingServicesContent.bottomCTA.heading}
    </h3>
    <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
      {plumbingServicesContent.bottomCTA.description}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
      <Link
        href={plumbingServicesContent.bottomCTA.whatsappHref}
        target="_blank"
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
      >
        {plumbingServicesContent.bottomCTA.whatsappLabel}
      </Link>
      <Link
        href={plumbingServicesContent.bottomCTA.phoneHref}
        className="bg-background hover:bg-primary/10 text-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-border"
      >
        {plumbingServicesContent.bottomCTA.phoneLabel}
      </Link>
    </div>
  </div>
);

export const PlumbingServices = () => {
  return (
    <section
      className="bg-muted/20 border-t border-border py-16"
      id={plumbingServicesConfig.seo.sectionId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {plumbingServicesContent.heading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {plumbingServicesContent.description}
          </p>
        </header>

        <div className="space-y-12">
          {plumbingServicesData.map((service, index) => (
            <ServiceCard key={service.title || index} service={service} index={index} />
          ))}
        </div>

        <CTASection />
      </div>
    </section>
  );
};