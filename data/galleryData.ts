// data/gallery.ts
export type GalleryCategory = "products" | "installations" | "maintenance";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  description: string;
  featured?: boolean;
  tags?: string[];
}

export interface GalleryFilter {
  category: GalleryCategory;
  label: string;
  description: string;
  ariaLabel: string;
}

export interface GalleryData {
  content: {
    heading: string;
    description: string;
  };
  filters: GalleryFilter[];
  items: GalleryItem[];
  modal: {
    altText: string;
    ariaLabel: string;
  };
  seo: {
    sectionId: string;
  };
  ui: {
    defaultCategory: GalleryCategory;
  };
}

export const galleryData: GalleryData = {
  content: {
    heading: "Our Plumbing Work",
    description: `Browse our gallery to see the quality of our plumbing work — from installed fixtures to ongoing maintenance and reliable products we trust.`,
  },
  filters: [
    {
      category: "products",
      label: "Products",
      description: "Plumbing tools, equipment, and components we use",
      ariaLabel: "Browse plumbing products",
    },
    {
      category: "installations",
      label: "Installations",
      description: "Recent plumbing installations in homes and businesses",
      ariaLabel: "Browse plumbing installation work",
    },
    {
      category: "maintenance",
      label: "Maintenance",
      description: "Examples of plumbing upkeep and repairs",
      ariaLabel: "Browse maintenance and repair services",
    },
  ],
  items: [
    {
      src: "/water-pump.webp",
      alt: "Reliable water pump used in plumbing systems",
      category: "products",
      title: "Water Pumps",
      description: "Durable pumps used in residential and commercial plumbing",
      featured: true,
      tags: ["water-pump", "plumbing-product"],
    },
    {
      src: "/pressure-control-units.webp",
      alt: "Pressure control system used in modern plumbing setups",
      category: "products",
      title: "Pressure Control Units",
      description: "Consistent water flow with pressure-regulated systems",
      tags: ["pressure-system", "flow-control"],
    },
    {
      src: "submersible-units.webp",
      alt: "Submersible plumbing pump ready for deep water applications",
      category: "products",
      title: "Submersible Units",
      description: "Ideal for deep wells and water extraction solutions",
      tags: ["submersible", "deep-well"],
    },
    {
      src: "/pressure-tanks.webp",
      alt: "Pressurized tank system used in home plumbing",
      category: "products",
      title: "Pressure Tanks",
      description: "Keeps water pressure steady for large households",
      tags: ["tank", "home-system"],
    },
    {
      src: "/commercial-installations.webp",
      alt: "Commercial plumbing installation at industrial site",
      category: "installations",
      title: "Commercial Installations",
      description: "Custom setups for large-scale plumbing needs",
      featured: true,
      tags: ["commercial", "business"],
    },
    {
      src: "/pipe-network-design.webp",
      alt: "Pipe network designed for efficient water flow",
      category: "installations",
      title: "Pipe Network Design",
      description: "Organized pipe systems for reliable water delivery",
      tags: ["pipes", "design", "layout"],
    },
    {
      src: "/multi-pump-system.webp",
      alt: "Multiple pump setup for continuous water supply",
      category: "installations",
      title: "Multi-Pump Systems",
      description: "Redundant pump setups for consistent performance",
      tags: ["multi-pump", "backup-system"],
    },
    {
      src: "/kitchen-plumbing.webp",
      alt: "New kitchen sink plumbing being installed",
      category: "installations",
      title: "Kitchen Plumbing",
      description: "Clean and precise installations in residential kitchens",
      tags: ["kitchen", "residential"],
    },
    {
      src: "/routine-maintenance.webp",
      alt: "Routine plumbing maintenance on pump system",
      category: "maintenance",
      title: "Routine Maintenance",
      description: "Scheduled inspections to keep your system running",
      featured: true,
      tags: ["maintenance", "routine-check"],
    },
    {
      src: "/metal-work-repairs.webp",
      alt: "Metal cutting for plumbing system repair",
      category: "maintenance",
      title: "Metal Work Repairs",
      description: "Skilled repairs involving pipe cutting and adjustments",
      tags: ["repair", "metalwork"],
    },
    {
      src: "/leak-detection.webp",
      alt: "Technician using diagnostic tools during plumbing check",
      category: "maintenance",
      title: "Leak Detection",
      description: "Using technology to find and fix hidden plumbing issues",
      tags: ["leak-detection", "diagnostics"],
    },
    {
      src: "/emergency-plumbing.webp",
      alt: "Emergency plumbing repair in a residential bathroom",
      category: "maintenance",
      title: "Emergency Plumbing",
      description: "Rapid-response repairs any time of day",
      tags: ["emergency", "urgent-repair"],
    },
  ],
  modal: {
    altText: "View enlarged plumbing work image",
    ariaLabel: "Close gallery image viewer",
  },
  seo: {
    sectionId: "gallery",
  },
  ui: {
    defaultCategory: "products",
  },
};
