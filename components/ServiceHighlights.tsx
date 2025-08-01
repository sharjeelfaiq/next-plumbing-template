import { serviceHighlightsData } from "@/data";

export const ServiceHighlights = () => {
  const { headline, subtext, services, cta } = serviceHighlightsData;

  return (
    <section
      id="service-highlights"
      className="bg-muted/20 border-t border-border mt-12 sm:mt-16 md:mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            {subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center flex flex-col items-center group"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {service.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center bg-primary/5 p-4 sm:p-6 md:p-8 rounded-lg border border-primary/20">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            {cta.title}
          </h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0 leading-relaxed">
            {cta.description}
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none sm:flex-row">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
              {cta.buttons[0]}
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
              {cta.buttons[1]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
