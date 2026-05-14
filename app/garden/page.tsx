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
      src: "/images/hero/hero-bg.png",
      title: "School Bio-Intensive Gardening",
      category: "Stewardship",
      description: "Pre-service educators installing sustainable plot structures to promote long-term nutritional independence.",
    },
    {
      id: "gar-gal-2",
      src: "/images/hero/preface-bg.png",
      title: "Ecological Landscaping &amp; Cleanup",
      category: "Restoration",
      description: "Beautifying the outer perimeters of Bulacao National High School with resilient regional flora species.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="School Garden Stewardship"
        subtitle="Cultivating green pedagogical spaces, bio-intensive gardening initiatives, and localized ecological resilience."
        imageSrc="/images/hero/hero-bg.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* Environmental Overview Block */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-white dark:bg-[#1a1515] rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-xl"
        >
          {/* Subtle nature accent vector */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2e7d32]/5 rounded-tl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Header Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e7d32]/10 text-[#2e7d32] dark:bg-[#d4af37]/10 dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Sprout className="w-4 h-4" />
                <span>Green Initiatives</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Rooting Environmental Consciousness
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#2e7d32] via-[#7b1113] to-[#d4af37] rounded-full mt-2" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              <p>
                The school garden program operationalizes our deep commitment to environmental literacy. By physically working the soil, organizing seedling distributions, and laying out sustainable vegetable plots, we model the vital connection between healthy ecosystems and vibrant community schools.
              </p>

              <div className="p-4 rounded-2xl bg-green-50/50 dark:bg-[#1b251d]/40 border-l-4 border-[#2e7d32] dark:border-[#d4af37] space-y-2">
                <div className="flex items-center gap-2 text-[#2e7d32] dark:text-[#d4af37]">
                  <Leaf className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Ecological Alignment</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic">
                  Integrated active soil conditioning, organic waste composting loops, and native Bicolano herbal shrub propagation across our designated immersion zone.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                <TreePine className="w-4 h-4 text-[#2e7d32] dark:text-[#d4af37] shrink-0" />
                <span>
                  Establishing an enduring green framework intended to inspire continuous student-led agricultural instruction.
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Pillars Block */}
        <section>
          <div className="rounded-3xl bg-gradient-to-r from-[#1b5e20] via-[#580a0b] to-[#1b5e20] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.15),transparent_60%)]" />

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#f3e5ab] block">
                Sustainable Aims
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Impacts of the Green Immersion Hub
              </h3>
              <div className="w-12 h-1 bg-[#f3e5ab] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {[
                { title: "Bio-Intensive Plots", desc: "Constructing organized grid rows optimized for maximum vegetable yields inside compact campus boundaries." },
                { title: "Student Stewardship", desc: "Instilling deep accountability among younger grade levels to continuously monitor watering and weeding rosters." },
                { title: "Aesthetic Restoration", desc: "Clearing unkempt schoolyards to ensure an inspiring, refreshing academic setting for daily study loops." }
              ].map((item, index) => (
                <div key={index} className="bg-black/25 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-[#f3e5ab]" />
                  <h4 className="font-serif font-bold text-lg text-white">{item.title}</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Showcase Section */}
        <section className="pb-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block">
              Visual Archives
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <span>Garden Landscaping Photo Roster</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
