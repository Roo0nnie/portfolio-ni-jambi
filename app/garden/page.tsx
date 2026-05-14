"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Sprout, Sparkles, Leaf, CheckCircle2, TreePine } from "lucide-react";

export default function GardenPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "gar-gal-1",
      src: "/images/gallery/GARDEN-1.jpg",
      title: "",
      category: "",
    },
    {
      id: "gar-gal-2",
      src: "/images/gallery/GARDEN-2.jpg",
      title: "",
      category: "",
    },
    {
      id: "gar-gal-3",
      src: "/images/gallery/GARDEN-3.jpg",
      title: "",
      category: "",
    },
    {
      id: "gar-gal-4",
      src: "/images/gallery/GARDEN-4.jpg",
      title: "",
      category: "",
    },
    {
      id: "gar-gal-5",
      src: "/images/gallery/GARDEN-5.jpg",
      title: "",
      category: "",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Garden's Gallery"
        subtitle="Cultivating green pedagogical spaces, bio-intensive gardening initiatives, and localized ecological resilience."
        imageSrc="/images/hero/hero-bg.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
         {/* Capstone Overview Section */}
         <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-white dark:bg-[#1a1515] rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-bl-full pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
           
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
            As part of fulfilling the required 10th session of our Immersion program, The <strong className="text-[#7b1113] dark:text-[#d4af37]">BSED Social studies 1</strong> are responsible for gardening cleanup, wherein they demonstrated the environmental responsibility aligned with the <strong className="text-[#7b1113] dark:text-[#d4af37]">M.A.K.A- Kalikasan</strong> core values. Each M.A.K.A group are assigned to different area within the school  to ensure that every location would be properly maintained and improved. The <strong className="text-[#7b1113] dark:text-[#d4af37]">Maka-Diyos</strong>    team was specifically assigned to the area near the altar, where they are tasked to clean the area by removing all the unnecessary <strong className="text-[#7b1113] dark:text-[#d4af37]">plants</strong>, <strong className="text-[#7b1113] dark:text-[#d4af37]">stones</strong>, and other material that made the area unorganized. Thereafter, the students brought plants and gardening material to further improve the area. Through collaborative effort, They successfully transformed the previously unorganized space into a simple yet visually appealing garden. And lastly, this activity serves as an opportunity for us to value the beauty of environment and the essence of volunteerism.
            </p>
          </div>
        </motion.section>

        {/* Gallery Showcase Section */}
        <section className="pb-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block">
              Visual Archives
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <span>Garden's Gallery</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
