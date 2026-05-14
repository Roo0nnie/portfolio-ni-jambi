"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="space-y-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-[#1a1515] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-xs font-semibold text-[#f3e5ab] uppercase tracking-wider">
                  {item.category}
                </span>
                <button
                  id={`gallery-zoom-btn-${item.id}`}
                  onClick={() => setSelectedImage(item)}
                  aria-label="Zoom Image"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white hover:bg-[#d4af37] hover:text-black transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white group-hover:text-[#7b1113] dark:group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="mt-3 pt-2 border-t border-gray-50 dark:border-gray-800/50 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                  Bicol U. Archive
                </span>
                <button
                  id={`gallery-view-text-${item.id}`}
                  onClick={() => setSelectedImage(item)}
                  className="text-xs text-[#7b1113] dark:text-[#d4af37] font-medium hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Animation Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full bg-[#1a1515] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal close button */}
              <button
                id="gallery-modal-close"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-[#d4af37] hover:text-black transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* High res modal image */}
              <div className="relative w-full md:w-3/5 h-72 sm:h-96 md:h-[450px] bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1000px"
                  className="object-contain"
                />
              </div>

              {/* Description sidebar */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#1a1515] to-[#580a0b]/40">
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-semibold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-[#d4af37]" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedImage.description || "Active community milestone documented under the National Service Training Program / Literacy Training Service of Bicol University Gubat Campus."}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 text-xs text-gray-400 flex items-center justify-between">
                  <span>M.A.K.A. Collection</span>
                  <span className="text-[#f3e5ab]">Verified Record</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
