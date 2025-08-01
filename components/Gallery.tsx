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
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
  };

  const renderFilterButton = (filter: (typeof filters)[0], index: number) => (
    <motion.button
      key={filter.category}
      onClick={() => setSelectedCategory(filter.category)}
      className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-500 text-sm sm:text-base overflow-hidden group ${
        selectedCategory === filter.category
          ? "bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground shadow-2xl shadow-primary/25"
          : "bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
      }`}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      aria-label={filter.ariaLabel}
      title={filter.description}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Active indicator */}
      {selectedCategory === filter.category && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      
      <span className="relative z-10">{filter.label}</span>
    </motion.button>
  );

  const renderGalleryItem = (item: GalleryItem, index: number) => (
    <motion.div
      key={`${selectedCategory}-${index}`}
      variants={itemVariants}
      className="group cursor-pointer"
      onClick={() => setSelectedImage(item.src)}
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
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
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 group-hover:border-primary/30">
        <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          
          {/* Multi-layered overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </div>

          {/* Featured badge with glow */}
          {item.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-primary/25 backdrop-blur-sm"
            >
              ✨ Featured
            </motion.div>
          )}

          {/* Hover overlay content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: hoveredItem === index ? 1 : 0,
              y: hoveredItem === index ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-background/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-xl border border-border/50">
              <span className="text-sm font-medium text-foreground">Click to view</span>
            </div>
          </motion.div>
        </div>
        
        <div className="p-4 sm:p-5 bg-gradient-to-b from-card to-card/80">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
            {item.description}
          </p>
          
          {item.tags && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tagIndex * 0.1 }}
                  className="text-xs bg-gradient-to-r from-muted to-muted/80 text-muted-foreground px-2.5 py-1 rounded-full font-medium hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
              {item.tags.length > 3 && (
                <span className="text-xs text-muted-foreground font-medium">
                  +{item.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      className="relative bg-gradient-to-b from-muted/10 via-muted/5 to-background py-12 sm:py-16 md:py-20 border-t border-border/50 overflow-hidden"
      id={seo.sectionId}
      aria-labelledby="gallery-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
          >
            {content.heading}
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16"
          role="tablist"
          aria-label="Gallery categories"
        >
          {filters.map(renderFilterButton)}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8"
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
            className="max-w-[95vw] sm:max-w-5xl bg-background/95 backdrop-blur-2xl border border-border/50 p-4 sm:p-6 rounded-2xl shadow-2xl"
            aria-label={modal.ariaLabel}
          >
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25,
                  duration: 0.5 
                }}
                className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={selectedImage}
                  alt={modal.altText}
                  fill
                  className="object-contain"
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