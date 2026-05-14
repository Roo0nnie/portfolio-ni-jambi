"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { HeartHandshake, Sparkles, BookHeart, Compass } from "lucide-react";

export default function MakaDiyosPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "md-gal-1",
      src: "/images/hero/preface-bg.png",
      title: "Campus Thanksgiving Invocation",
      category: "Spiritual Action",
      description: "Students leading the inter-faith prayers and campus blessing protocols prior to literacy immersion deployment.",
    },
    {
      id: "md-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Ethical & Moral Formation Seminars",
      category: "Reflection",
      description: "Group discussions focusing on integrity, professional responsibility, and spiritual foundation as aspiring educators.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Introduction Banner */}
      <HeroBanner
        title="Maka-Diyos Pillar"
        subtitle="Upholding moral integrity, spiritual depth, and sincere fidelity to higher principles."
        imageSrc="/images/hero/preface-bg.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Quote & Reflection Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1a1515] to-[#580a0b] text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Compass className="w-48 h-48 text-[#d4af37]" />
          </div>

          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Spiritual Identity</span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl font-bold leading-snug text-[#f3e5ab]">
              &ldquo;To be Maka-Diyos is to acknowledge that all pedagogical wisdom flows from compassion, honesty, and divine truth.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
              Within the Literacy Training Service framework of Bicol University, spiritual formation forms the baseline of our service ethics. We prepare instructional content not for personal accolades, but as an honest stewardship of the intellectual faculties entrusted to us.
            </p>

            <div className="pt-4 border-t border-white/20 flex items-center gap-3">
              <BookHeart className="w-5 h-5 text-[#d4af37]" />
              <span className="text-xs font-mono text-white/70 uppercase tracking-widest">
                NSTP-LTS Component Standard
              </span>
            </div>
          </div>
        </motion.section>

        {/* Activities Showcase Grid */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Action Milestones
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <HeartHandshake className="w-6 h-6 text-[#7b1113] dark:text-[#d4af37]" />
              <span>Moral & Ethical Engagements</span>
            </h3>
            <div className="w-12 h-1 bg-[#7b1113] dark:bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1a1515] rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider block mb-1">
                Initiative 01
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-3">
                Pre-Immersion Ethical Briefings
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                Organized standard assemblies to meditate on classroom patience, respect for diverse student backgrounds, and upholding a positive, uplifting moral presence among young elementary learners in Gubat.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1515] rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider block mb-1">
                Initiative 02
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-3">
                Inter-Faith Harmony Workshops
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                Fostered an inclusive space celebrating local cultural diversity, ensuring every educational lesson designed by the batch reinforces mutual respect and spiritual unity across local stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Showcase Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Visual Archives
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Maka-Diyos Image Showcase
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
