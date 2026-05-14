"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { TreePine, Sprout, Wind, Droplets } from "lucide-react";

export default function MakaKalikasanPage() {
  const activities = [
    {
      title: "Gubat Coastal & Watershed Cleanup Drive",
      icon: Droplets,
      desc: "Mobilized student teams to extract non-biodegradable debris along public coastal sectors, safeguarding local marine ecologies.",
      metric: "120 kg Waste Cleared",
    },
    {
      title: "Campus Seedling & Tree Planting Rites",
      icon: TreePine,
      desc: "Planted native hard-wood and fruit-bearing saplings across targeted university grounds to reinforce green carbon offsets.",
      metric: "50+ Saplings Rooted",
    },
    {
      title: "Ecological Awareness Seminars",
      icon: Wind,
      desc: "Designed integrated lesson plans instructing elementary pupils on zero-waste stewardship and simple recycling loops.",
      metric: "Integrated Lesson Module",
    },
  ];

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

        {/* Environmental Activities Cards */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b3b22] dark:text-[#d4af37] block mb-2">
              Civic Operations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Key Ecological Initiatives
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((act, i) => {
              const IconComponent = act.icon;
              return (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-[#1a1515] rounded-xl p-6 border-t-4 border-t-[#1b3b22] dark:border-t-[#d4af37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#1b3b22]/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-[#1b3b22] dark:text-[#d4af37] mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {act.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                      {act.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Outcome</span>
                    <span className="text-xs font-bold text-[#1b3b22] dark:text-[#f3e5ab] px-2 py-0.5 rounded bg-gray-50 dark:bg-gray-800">
                      {act.metric}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
