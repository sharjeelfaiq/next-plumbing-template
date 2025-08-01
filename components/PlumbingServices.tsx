import Image from "next/image";
import Link from "next/link";
import {
  plumbingServicesContent,
  plumbingServicesData,
  plumbingServicesConfig,
} from "@/data";

export default function PlumbingServices() {
  return (
    <div
      className="bg-muted/20 border-t border-border py-8 sm:py-12 md:py-16"
      id={plumbingServicesConfig.seo.sectionId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            {plumbingServicesContent.heading}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            {plumbingServicesContent.description}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {plumbingServicesData.map((service, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-1 ${
                index % 2 === 0
                  ? "md:grid-cols-[1fr_2fr]"
                  : "md:grid-cols-[2fr_1fr]"
              } gap-0 md:gap-8 items-center bg-background shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-border`}
            >
              <div className="relative h-64 sm:h-72 md:h-[400px] w-full">
                <Image
                  src={service.image}
                  alt={service.altText}
                  fill
                  className="object-cover w-full h-full z-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-primary/90 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-105 transition-all duration-300">
                    <Image
                      src={plumbingServicesConfig.brand.icon}
                      alt={plumbingServicesConfig.brand.altText}
                      width={60}
                      height={60}
                      className="opacity-90 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`p-4 sm:p-6 md:p-8 ${
                  index % 2 !== 0 && "md:order-first"
                }`}
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="bg-primary rounded-full w-1.5 h-1.5 sm:w-2 sm:h-2 flex-shrink-0"></div>
                  <div className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    {service.subtitle}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 italic">
                  {service.brands}
                </p>

                <div className="flex flex-col gap-2 sm:gap-3 mb-4">
                  <Link
                    href={plumbingServicesContent.ctaTop.whatsappHref}
                    target="_blank"
                    className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base"
                  >
                    {plumbingServicesContent.ctaTop.whatsappLabel}
                  </Link>
                  <Link
                    href={plumbingServicesContent.ctaTop.phoneHref}
                    className="bg-muted hover:bg-primary/10 text-foreground hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 border border-border text-center text-sm sm:text-base"
                  >
                    {plumbingServicesContent.ctaTop.phoneLabel}
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                  {plumbingServicesContent.serviceFooter.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <div className="bg-primary rounded-full w-1.5 h-1.5 flex-shrink-0"></div>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center bg-primary/5 rounded-lg p-4 sm:p-6 md:p-8 border border-border">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
            {plumbingServicesContent.bottomCTA.heading}
          </h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0 leading-relaxed">
            {plumbingServicesContent.bottomCTA.description}
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:flex-row">
            <Link
              href={plumbingServicesContent.bottomCTA.whatsappHref}
              target="_blank"
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              {plumbingServicesContent.bottomCTA.whatsappLabel}
            </Link>
            <Link
              href={plumbingServicesContent.bottomCTA.phoneHref}
              className="bg-background hover:bg-primary/10 text-foreground hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 border border-border text-sm sm:text-base"
            >
              {plumbingServicesContent.bottomCTA.phoneLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
