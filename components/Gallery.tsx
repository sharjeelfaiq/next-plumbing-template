"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData, type GalleryCategory, type GalleryItem } from "@/data";

export default function Gallery() {
  const { content, filters, items, modal, seo, ui } = galleryData;

  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(
    ui.defaultCategory
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  const renderFilterButton = (filter: (typeof filters)[0], index: number) => (
    <button
      key={filter.category}
      onClick={() => setSelectedCategory(filter.category)}
      className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
        selectedCategory === filter.category
          ? "bg-primary text-primary-foreground shadow-lg"
          : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
      }`}
      aria-label={filter.ariaLabel}
      title={filter.description}
    >
      {filter.label}
    </button>
  );

  const renderGalleryItem = (item: GalleryItem, index: number) => (
    <motion.div
      key={`${selectedCategory}-${index}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:border-primary/30"
      onClick={() => setSelectedImage(item.src)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title} in full size`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSelectedImage(item.src);
        }
      }}
    >
      <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60" />
        {item.featured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      <motion.div
        className="p-3 sm:p-4 bg-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2">
          {item.description}
        </p>
        {item.tags && (
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">
                +{item.tags.length - 2} more
              </span>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );

  return (
    <section
      className="bg-muted/20 py-8 sm:py-12 md:py-16 border-t border-border"
      id={seo.sectionId}
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight"
          >
            {content.heading}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0"
          role="tablist"
          aria-label="Gallery categories"
        >
          {filters.map(renderFilterButton)}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
            role="tabpanel"
            aria-label={`${
              filters.find((f) => f.category === selectedCategory)?.label
            } gallery`}
          >
            {filteredItems.map(renderGalleryItem)}
          </motion.div>
        </AnimatePresence>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent
            className="max-w-[95vw] sm:max-w-4xl bg-transparent border-0 p-2 sm:p-0"
            aria-label={modal.ariaLabel}
          >
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video w-full"
              >
                <Image
                  src={selectedImage}
                  alt={modal.altText}
                  fill
                  className="object-contain rounded-lg"
                  sizes="95vw"
                  priority
                />
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
