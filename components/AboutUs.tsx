import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data";
import Button from "./common/Button";

export default function AboutUs() {
  const { content, media, badge, actions, seo } = aboutData;

  return (
    <section
      className="section-container bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40"
      id={seo.sectionId}
      aria-labelledby="about-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content Section */}
        <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
          <h2
            id="about-title"
            className="section-title text-foreground text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight"
          >
            {content.title}
          </h2>
          <div className="space-y-4 lg:space-y-6">
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-prose">
              {content.description}
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-3 lg:space-y-4" role="list">
            {content.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 lg:gap-4 group">
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-primary rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                <span className="text-foreground font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              href={actions.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              ariaLabel={actions.primaryCta.ariaLabel}
            >
              {actions.primaryCta.text}
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative order-1 lg:order-2 group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-1">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={media.mainImage.src}
                alt={media.mainImage.alt}
                width={media.mainImage.width}
                height={media.mainImage.height}
                className="rounded-xl object-cover w-full h-auto group-hover:scale-105 transition-all duration-700 ease-out"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Enhanced overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]"></div>
            </div>
          </div>

          {/* Enhanced Professional Badge */}
          <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 transform hover:scale-110 transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-3 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4 rounded-xl sm:rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-3xl font-bold leading-none">
                  {badge.primaryText}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium opacity-90 mt-1">
                  {badge.secondaryText}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 lg:w-12 lg:h-12 bg-primary/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-6 h-6 lg:w-10 lg:h-10 bg-primary/30 rounded-full blur-lg opacity-40 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
}
