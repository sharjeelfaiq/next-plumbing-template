import { testimonialsData } from "@/data";

export default function Testimonials() {
  const { heading, description, services, cta } = testimonialsData;

  return (
    <section
      id="service-highlights"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-slate-200/60 mt-12 sm:mt-16 md:mt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        {/* Header with enhanced typography */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
            ✨ Premium Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
            {heading}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Services grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
          {services.map(({ icon, title, desc, badges }, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-2 text-center flex flex-col items-center border border-white/20 hover:border-blue-200/50 animate-in fade-in slide-in-from-bottom-4"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Icon container with enhanced styling */}
              <div className="relative mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">{icon}</div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                {title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8 font-light">
                {desc}
              </p>

              {/* Enhanced badges */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200/50 group-hover:from-blue-200 group-hover:to-indigo-200 group-hover:scale-105 transition-all duration-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl shadow-slate-900/20 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>

          <div className="relative text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {cta.title}
            </h3>
            <p className="text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg sm:text-xl px-2 sm:px-0 leading-relaxed font-light">
              {cta.description}
            </p>

            {/* Enhanced buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto sm:max-w-none sm:flex-row">
              {cta.buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`group relative overflow-hidden ${
                    i === 0
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25"
                      : "border-2 border-blue-300 text-blue-100 hover:bg-blue-500/10 hover:border-blue-200"
                  } px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto text-base sm:text-lg hover:scale-105 hover:shadow-xl`}
                >
                  <span className="relative z-10">{btn}</span>
                  {i === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
