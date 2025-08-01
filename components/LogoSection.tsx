import Image from "next/image";
import { logoData } from "@/data";

export default function LogoSection() {
  const { heading, description, footerNote, logos, altPrefix } = logoData;
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-8 sm:py-12 md:py-16 w-full overflow-hidden border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="slider bg-background/50 rounded-lg shadow-inner">
            <div className="slide-track">
              {duplicatedLogos.map((logoPath, index) => (
                <div key={index} className="slide">
                  <div className="flex items-center justify-center h-full p-2 sm:p-3 md:p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                    <Image
                      src={logoPath}
                      alt={`${altPrefix} - ${logoPath
                        .split("/").pop()!
                        .replace("_logo.svg", "")
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}`}
                      width={120}
                      height={60}
                      className="w-auto h-8 sm:h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 filter hover:contrast-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient shadows */}
          <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10" />
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            {footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
