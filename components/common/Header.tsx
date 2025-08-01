"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { headerData } from "@/data";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isInternalLink = (href: string) => href.startsWith("#");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isInternalLink(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        if (isMenuOpen) setIsMenuOpen(false);
      }
    }
  };

  const linkClasses =
    "relative text-foreground px-3 py-2 rounded-md text-sm font-medium group overflow-hidden transition-colors duration-500 ease-in-out hover:text-primary";
  const underlineClasses =
    "absolute bottom-0 left-0 w-full h-0.5 bg-primary translate-x-[-100%] transition-all duration-500 ease-in-out group-hover:translate-x-0";

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center h-16 sm:h-18 md:h-20 w-auto"
            aria-label="back to home"
          >
            <Image
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              width={160}
              height={160}
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-3 lg:space-x-4">
              {headerData.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  <span className={underlineClasses} />
                </a>
              ))}
            </div>
            <a
              href={headerData.contactLink.href}
              className="btn-primary text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {headerData.contactLink.button}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background border-t border-border transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-3 pt-3 pb-4 space-y-1 sm:px-4">
          {headerData.navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:bg-muted hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 border-l-4 border-transparent hover:border-primary"
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Contact Link */}
          <a
            href={headerData.contactLink.href}
            className="text-foreground hover:bg-muted hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 border-l-4 border-transparent hover:border-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transitionDelay: `${headerData.navLinks.length * 50}ms`,
            }}
          >
            {headerData.contactLink.label}
          </a>

          {/* Mobile CTA Button */}
          <div className="pt-3 px-3">
            <a
              href={headerData.contactLink.href}
              className="btn-primary block text-center w-full py-3 text-base font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {headerData.contactLink.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
