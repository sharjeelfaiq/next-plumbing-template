export interface HeaderData {
  logo: {
    src: string;
    alt: string;
  };
  navLinks: {
    href: string;
    label: string;
  }[];
  contactLink: {
    href: string;
    label: string; // Mobile menu link label
    cta: string; // CTA button text
    button: string; // Desktop button label
  };
}

export const headerData: HeaderData = {
  logo: {
    src: "/logo-placeholder-black.png",
    alt: "Professional Plumbing Co. Logo",
  },
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
  ],
  contactLink: {
    href: "#contact",
    label: "Contact",
    cta: "Contact Us",
    button: "Book an Appointment",
  },
};
