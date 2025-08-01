import Link from "next/link";
import Image from "next/image";
import { footerData, type FooterContactInfo } from "@/data";

export const Footer = () => {
  const { branding, navigation, contact, credentials, legal, ui } = footerData;

  const renderContactInfo = (info: FooterContactInfo, index: number) => {
    const Icon = info.icon;
    const isLink = !!info.href;

    const contactContent = (
      <>
        <Icon className="mr-2 sm:mr-3 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <div className="font-medium text-sm sm:text-base">{info.label}</div>
          <div className="text-xs sm:text-sm break-words">{info.value}</div>
        </div>
      </>
    );

    if (isLink) {
      return (
        <li key={index}>
          <a
            href={info.href}
            target={info.external ? "_blank" : undefined}
            rel={info.external ? "noopener noreferrer" : undefined}
            className="flex items-start hover:text-primary transition-colors duration-300 py-1"
            aria-label={info.ariaLabel}
          >
            {contactContent}
          </a>
        </li>
      );
    }

    return (
      <li key={index}>
        <div className="flex items-start py-1" aria-label={info.ariaLabel}>
          {contactContent}
        </div>
      </li>
    );
  };

  const getCurrentYear = () => {
    return legal.currentYear ? new Date().getFullYear() : "";
  };

  return (
    <footer className="bg-slate-900 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center h-16 sm:h-20 w-auto"
              aria-label="Go to homepage"
            >
              <Image
                src={branding.logo.src}
                alt={branding.logo.alt}
                width={branding.logo.width}
                height={branding.logo.height}
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
            <p className="mt-3 sm:mt-4 text-slate-300 max-w-md leading-relaxed text-sm sm:text-base">
              {branding.description}
            </p>
            <div className="mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              {navigation.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-primary transition-colors duration-300 p-1"
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
              {ui.sections.quickLinks.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigation.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base block py-1"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
              {ui.sections.contactInfo.title}
            </h3>
            <ul className="space-y-3 sm:space-y-3 text-slate-300">
              {contact.info.map(renderContactInfo)}
            </ul>
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-center">{credential}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700 text-center text-slate-400 text-xs sm:text-sm">
          <p>
            © {getCurrentYear()} {legal.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
