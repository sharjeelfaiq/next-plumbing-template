export const siteMeta = {
  metadata: {
    title: "Trusted Plumbing Services for Homes & Businesses",
    description:
      "Reliable plumbing solutions for residential and commercial properties. Call us for expert repairs, installations, and 24/7 emergency service.",
    keywords:
      "plumbing services, emergency plumber, pipe repair, water heater, drain cleaning, residential plumbing, commercial plumbing",
    authors: [{ name: "Your Plumbing Company" }],
    creator: "Your Plumbing Company",
    publisher: "Your Plumbing Company",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: "/favicon/favicon.ico",
      apple: "/favicon/apple-touch-icon.png",
      android: "/favicon/android-chrome-192x192.png",
      android1: "/favicon/android-chrome-512x512.png",
      favicon1: "/favicon/favicon-32x32.png",
      favicon2: "/favicon/favicon-16x16.png",
      manifest: "/favicon/site.webmanifest",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://yourplumbingwebsite.com",
      siteName: "Your Plumbing Company",
      title: "Trusted Plumbing Services for Homes & Businesses",
      description:
        "Reliable plumbing solutions for residential and commercial properties. Call us for expert repairs, installations, and 24/7 emergency service.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Your Plumbing Company - Professional Plumbing Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Trusted Plumbing Services for Homes & Businesses",
      description:
        "Reliable plumbing solutions for residential and commercial properties. Call us for expert repairs, installations, and 24/7 emergency service.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxVideoPreview: -1,
        maxImagePreview: "large" as const,
        maxSnippet: -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  },

  canonicalUrl: "https://yourplumbingwebsite.com",

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    name: "Your Plumbing Company",
    image: "https://yourplumbingwebsite.com/logo.svg",
    "@id": "https://yourplumbingwebsite.com",
    url: "https://yourplumbingwebsite.com",
    telephone: "+1-000-000-0000",
    email: "contact@yourplumbingwebsite.com",
    priceRange: "$$",
    description:
      "Comprehensive plumbing services for residential and commercial clients. We offer 24/7 emergency support and licensed professional solutions.",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 0,
        longitude: 0,
      },
      geoRadius: "50000",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "City Name",
      addressRegion: "State Name",
      postalCode: "00000",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "Closed",
        closes: "Closed",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Available Plumbing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Plumbing Repairs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Heater Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drain & Sewer Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Leak Detection & Pipe Repair",
          },
        },
      ],
    },
    sameAs: [
      "https://facebook.com/yourplumbingcompany",
      "https://instagram.com/yourplumbingcompany",
      "https://linkedin.com/company/yourplumbingcompany",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  },
};
