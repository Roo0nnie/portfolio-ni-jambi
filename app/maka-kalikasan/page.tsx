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
      src: "/images/gallery/community.png",
      title: "Green Community Tree Planting Protocol",
      category: "Stewardship",
      description: "Enthusiastic university student leaders actively planting native seedlings during the environmental integration program.",
    },
    {
      id: "mk-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Eco-Advocacy Seminar Panel",
      category: "Curriculum",
      description: "Instructing basic education pupils on clean local habitats and the collective responsibility of environmental stewardship.",
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
        
        {/* Themed Intro banner mixing green, gold, and maroon */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1a1515] via-[#1b3b22] to-[#580a0b] text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-15">
            <Sprout className="w-40 h-40 text-[#f3e5ab]" />
          </div>

          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider">
              <TreePine className="w-3.5 h-3.5" />
              <span>Environmental Duty</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Sustaining the Habitat for Future Learners
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
              To adhere to the core value of being Maka-Kalikasan is to recognize that cognitive growth requires clean, secure, and thriving natural environments. Our batch leads by example, embedding environmental care directly into primary teaching scripts.
            </p>
          </div>
        </motion.section>

        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Immersion Highlights
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <HeartHandshake className="w-6 h-6 text-[#7b1113] dark:text-[#d4af37]" />
              <span>Maka-Kalikasan Immersion</span>
            </h3>
            <div className="w-12 h-1 bg-[#7b1113] dark:bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

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
