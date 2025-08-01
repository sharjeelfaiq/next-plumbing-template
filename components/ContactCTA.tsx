import Link from "next/link";
import { contactCTAData, type ContactCTAAction } from "@/data";

export const ContactCTA = () => {
  const { content, actions, trustIndicators, seo } = contactCTAData;

  const renderActionButton = (action: ContactCTAAction, index: number) => {
    const commonProps = {
      key: index,
      href: action.href,
      target: action.external ? "_blank" : "_self",
      "aria-label": action.ariaLabel,
    };

    switch (action.type) {
      case "whatsapp":
        return (
          <Link
            {...commonProps}
            className="relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary-foreground rounded-md overflow-hidden group bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center">
              {action.label}
            </span>
          </Link>
        );

      case "phone":
        return (
          <Link
            {...commonProps}
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base"
          >
            {action.label}
          </Link>
        );

      case "email":
      case "link":
        return (
          <Link
            {...commonProps}
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base"
          >
            {action.label}
          </Link>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="bg-primary/5 border-t border-border py-12 sm:py-16 md:py-20 lg:py-24 my-12 sm:my-16 md:my-20 lg:my-24 text-center"
      id={seo.sectionId}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-primary uppercase tracking-wider mb-4 sm:mb-6 font-semibold text-sm sm:text-base">
          {content.topLabel}
        </h3>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
          {content.heading.main}
          <span className="block text-primary mt-1 sm:mt-2">
            {content.heading.highlight}
          </span>
        </h2>

        <p className="text-muted-foreground mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          {actions.map(renderActionButton)}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-muted-foreground px-4 sm:px-0">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-xs sm:text-sm font-medium text-center">
                {indicator}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
