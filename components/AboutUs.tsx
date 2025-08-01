import Image from "next/image";
import Link from "next/link";

import { aboutData } from "@/data";

export const AboutUs = () => {
  const { content, media, badge, actions, seo } = aboutData;

  return (
    <div className="section-container bg-muted/30" id={seo.sectionId}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title text-foreground text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            {content.title}
          </h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-base sm:text-lg leading-relaxed">
            {content.description}
          </p>

          <div className="mb-4 md:mb-6 space-y-2 md:space-y-3">
            {content.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Link
            href={actions.primaryCta.href}
            className="btn-primary inline-block text-center w-full sm:w-auto"
            aria-label={actions.primaryCta.ariaLabel}
          >
            {actions.primaryCta.text}
          </Link>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={media.mainImage.src}
              alt={media.mainImage.alt}
              width={media.mainImage.width}
              height={media.mainImage.height}
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Professional badge */}
          <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-primary text-primary-foreground px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold">
                {badge.primaryText}
              </div>
              <div className="text-xs font-medium">{badge.secondaryText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
