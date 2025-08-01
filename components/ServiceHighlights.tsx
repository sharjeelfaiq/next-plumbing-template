"use client";

import { serviceHighlightsData } from "@/data";
import Button from "./common/Button";

export default function ServiceHighlights() {
  const { headline, subtext, services, cta } = serviceHighlightsData;

  return (
    <section
      id="service-highlights"
      className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 sm:mt-16 md:mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        {/* Clean header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
            >
              {/* Simple icon container */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors duration-300">
                  <div className="text-slate-700 dark:text-slate-300 text-xl">
                    {service.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Clean badges */}
              <div className="flex flex-wrap gap-2">
                {service.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA section */}
        <div className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-4 leading-tight">
            {cta.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            {cta.description}
          </p>

          {/* Clean buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" fullWidth={true}>
              {cta.buttons[0]}
            </Button>

            <Button variant="secondary" size="lg" fullWidth={true}>
              {cta.buttons[1]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
