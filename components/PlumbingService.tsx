import Image from "next/image";
import Link from "next/link";
import { plumbingServiceData } from "@/data";

export const PlumbingService = () => {
  return (
    <div className="section-container bg-primary/5" id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={plumbingServiceData.image.src}
              alt={plumbingServiceData.image.alt}
              width={800}
              height={600}
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-primary text-primary-foreground px-3 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-base sm:text-xl font-bold">
                {plumbingServiceData.badge.title}
              </div>
              <div className="text-xs font-medium">
                {plumbingServiceData.badge.subtitle}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="section-title text-foreground text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            {plumbingServiceData.heading}
          </h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-base sm:text-lg leading-relaxed">
            {plumbingServiceData.description}
          </p>

          <div className="mb-6 md:mb-8 space-y-3 md:space-y-4">
            {plumbingServiceData.services.map((item, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Link
              href={plumbingServiceData.cta.estimate.href}
              className="btn-primary text-center w-full sm:w-auto"
            >
              {plumbingServiceData.cta.estimate.label}
            </Link>
            <Link
              href={plumbingServiceData.cta.emergency.href}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-3 font-semibold text-primary border-2 border-primary rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center w-full sm:w-auto text-sm sm:text-base"
            >
              {plumbingServiceData.cta.emergency.label}
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-xs text-muted-foreground">
            {plumbingServiceData.highlights.map((text, i) => (
              <span key={i} className="flex items-center gap-2">
                <div className="bg-primary rounded-full w-1.5 h-1.5 flex-shrink-0"></div>
                <span className="text-center sm:text-left">{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
