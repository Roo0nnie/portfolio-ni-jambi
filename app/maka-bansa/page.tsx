"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Flag, Landmark, Award, Calendar, MapPin } from "lucide-react";

export default function MakaBansaPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "mb-gal-1",
      src: "/images/gallery/MAKABANSA-3.jpeg",
      title: "Discussion abotu the topic",
      category: "Patriotism",
    },
    {
      id: "mb-gal-2",
      src: "/images/gallery/MAKABANSA-2.jpeg",
      title: "The M.A.K.A- Bansa team",
      category: "Heritage",
    },
    {
      id: "mb-gal-3",
      src: "/images/gallery/MAKABANSA-1.jpeg",
      title: "Reward station",
      category: "Patriotism",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner with patriotic styling */}
      <HeroBanner
        title="Maka-Bansa Pillar"
        subtitle="Upholding authentic national pride, active civic responsibility, and visionary youth leadership."
        imageSrc="/images/hero/hero-bg.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#1a1515] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#580a0b] to-[#7b1113] text-white p-6 sm:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4af37]/30">
              <div className="space-y-1">
                <span className="text-[10px] text-[#f3e5ab] font-mono tracking-widest uppercase block">
                  Project Implementation
                </span>
                <h4 className="font-serif text-lg font-bold tracking-wide">
                  Made to Aspire Kabataan in Adhering to the Filipino Core Values (M.A.K.A)
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs bg-black/20 p-2.5 rounded-xl backdrop-blur-xs border border-white/10">
                <div className="flex items-center gap-1.5 text-white/90">
                  <Award className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>What:</strong> Maka-Bansa</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>When:</strong> March 26, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>Where:</strong> Bulacao National High School</span>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10 space-y-8">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                During the 5th day of the Immersion, the MAKA-Bansa team conducted an informative and Interactive discussions that broadened the students understanding when it comes to the history, governance, Heraldic code, economics, and other information related to our country. This session covered significant topics about our country that made students looks curious, engage, and eager to participate in the discussion. Students are becoming more aware on the importance of respecting the  country&apos;s identity, culture, and sovereignty which enhanced their sense of patriotism, nationalism, and responsibility as future citizens of the nation. So as one of the facilitators, this experienced brought a realization that as a citizens of our country, we must use our voice to raise concerns, promote unity, and encourage other to be a responsible individuals.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Visual Archives
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Maka-Bansa Photo Roster
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
