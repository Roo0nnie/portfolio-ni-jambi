"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { TreePine, Sprout, HeartHandshake, Award, Calendar, MapPin } from "lucide-react";

export default function MakaKalikasanPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "mk-gal-1",
      src: "/images/gallery/MAKAKALIKASAN-1.jpeg",
      title: "Tree planting activities",
      category: "Stewardship",
    },
      {
        id: "mk-gal-2",
        src: "/images/gallery/MAKAKALIKASAN-2.jpeg",
        title: "The M.A.K.A- Kalikasan team",
        category: "Curriculum",
      },
      {
        id: "mk-gal-3",
        src: "/images/gallery/MAKAKALIKASAN-3.jpg",
        title: "Transplanting activity",
        category: "Curriculum",
      },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner with green/maroon mixed tones */}
      <HeroBanner
        title="Maka-Kalikasan Pillar"
        subtitle="Promoting active ecological balance, green campus stewardship, and environmental instruction."
        imageSrc="/images/gallery/community.png"
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
                  <span><strong>What:</strong> Maka-Kalikasan</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>When:</strong> March 13, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>Where:</strong> Bulacao National High School</span>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10 space-y-8">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                During the 4th day of our immersion, the MAKA-Kalikasan team was tasked to discuss about protecting the environment. conserving the nature, and perform a tree planting that served as one of the actions for us to take care of our environment. During the session, the student of Bulacao National High School actively participated about environmental awareness, responsibility, and simple ways of becoming environmentally conscious Individual. The discussion also brought a realization that being a Maka-kalikasan is not just about performing an action, but it is also about being discipline, mindful, and has a genuine concerns for the environment. In addition, the garden planting activity also served as a small act in contributing to a healthy and more sustainable community, As a facilitator, I&apos;m deeply Inspired to witness the students to reflect on their responsibilities towards nature and show willingness to become part of a positive change. Through this experience, the Maka-kalikasan team serves as a role model when it comes to protecting our nature.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b3b22] dark:text-[#d4af37] block mb-2">
              Visual Documentation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Maka-Kalikasan Photo Archives
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
