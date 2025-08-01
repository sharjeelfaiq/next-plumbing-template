import Image from "next/image";
import Link from "next/link";
import {
  plumbingServicesContent,
  plumbingServicesData,
  plumbingServicesConfig,
} from "@/data";
import { WhatsAppButton } from "./common/Button";

export const ServiceCard = ({
  service,
  index,
}: {
  service: any;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white/90 backdrop-blur-sm shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 rounded-3xl overflow-hidden border border-slate-200/60 hover:border-blue-200/50 hover:-translate-y-1`}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      {/* Image Section */}
      <div
        className={`relative h-full overflow-hidden flex items-center justify-center ${
          !isEven ? "lg:order-2" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-blue-900/40 z-10"></div>

        <Image
          src={service.image}
          alt={service.altText}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />

        {/* Floating icon */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-6 w-24 h-24 flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white/20">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`relative p-8 lg:p-12 flex flex-col justify-center ${
          !isEven ? "lg:order-1" : ""
        }`}
      >
        {/* Service Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
          <span className="text-blue-600 text-sm font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {service.subtitle}
          </span>
        </div>

        {/* Title with gradient effect */}
        <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6 leading-tight group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">
          {service.description}
        </p>

        {/* Brands with enhanced styling */}
        <p className="text-sm text-slate-500 mb-8 italic bg-slate-50 p-4 rounded-xl border border-slate-200">
          🏆 {service.brands}
        </p>

        {/* CTA Buttons with enhanced design */}
        <div className="space-y-4 mb-6">
          <WhatsAppButton
            phoneNumber="your-phone-number"
            message="Hello, I'm interested in your plumbing services"
            variant="primary"
            size="lg"
            fullWidth={true}
          >
            {plumbingServicesContent.ctaTop.whatsappLabel}
          </WhatsAppButton>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap gap-3">
          {plumbingServicesContent.serviceFooter.tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 px-3 py-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => (
  <div className="relative mt-20 bg-gradient-to-br from-red-600 via-red-700 to-orange-600 rounded-3xl p-12 lg:p-16 overflow-hidden shadow-2xl shadow-red-900/30">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_50%)]"></div>
    </div>

    {/* Animated emergency lights */}
    <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
    <div className="absolute top-8 right-12 w-3 h-3 bg-red-300 rounded-full animate-pulse delay-500"></div>

    <div className="relative text-center">
      <div className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-sm font-bold text-yellow-100 mb-6 border border-yellow-400/30">
        🚨 Emergency Available
      </div>

      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
        {plumbingServicesContent.bottomCTA.heading}
      </h3>

      <p className="text-red-100 mb-10 leading-relaxed max-w-3xl mx-auto text-lg font-light">
        {plumbingServicesContent.bottomCTA.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
        <WhatsAppButton
          phoneNumber="your-phone-number"
          message="Emergency plumbing help needed!"
          variant="outline"
          size="lg"
          fullWidth={true}
        >
          {plumbingServicesContent.bottomCTA.whatsappLabel}
        </WhatsAppButton>
      </div>
    </div>
  </div>
);

export default function PlumbingServices() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 border-t border-slate-200/60 py-20 lg:py-24"
      id={plumbingServicesConfig.seo.sectionId}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-bold text-blue-700 mb-8 border border-blue-200/50">
            ⚡ Professional Services
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
            {plumbingServicesContent.heading}
          </h2>

          <p className="text-slate-600 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            {plumbingServicesContent.description}
          </p>
        </header>

        {/* Services Grid */}
        <div className="space-y-16 lg:space-y-20">
          {plumbingServicesData.map((service, index) => (
            <ServiceCard
              key={service.title || index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <CTASection />
      </div>
    </section>
  );
}
