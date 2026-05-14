"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Users, Heart, HeartHandshake, Award, Calendar, MapPin } from "lucide-react";

export default function MakaTaoPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "mt-gal-1",
      src: "/images/gallery/community.png",
      title: "Civic Literacy Collaboration",
      category: "Mentorship",
      description: "Student teachers interacting warmly with primary pupils, bridging basic literacy deficits with dynamic visual storytelling.",
    },
    {
      id: "mt-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Siklab Batch Planning Meeting",
      category: "Teamwork",
      description: "Consolidating curriculum materials and delegating teaching stations to ensure optimal teacher-to-student coverage.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Maka-Tao Pillar"
        subtitle="Championing human dignity, respectful civic empathy, and direct instructional outreach."
        imageSrc="/images/gallery/community.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b1113]/10 text-[#7b1113] dark:bg-[#d4af37]/10 dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Civic Empathy & Outreach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Serving the Community through Literacy
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
            The Maka-Tao core value asserts that authentic education honors human equality and proactive community stewardship. By investing hours in targeted diagnostic assessments and continuous guidance, our batch embodies deep civic care.
          </p>
        </motion.section>

        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Immersion Highlights
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <HeartHandshake className="w-6 h-6 text-[#7b1113] dark:text-[#d4af37]" />
              <span>Maka-Tao Immersion</span>
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
                  <span><strong>What:</strong> Maka-Tao</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>When:</strong> March 12, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>Where:</strong> Bulacao National High School</span>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10 space-y-8">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                During the 3rd day of our immersion, the Maka tao team was tasked to discuss about the concept of being a Maka-tao, which means honoring the dignity and worth of every person. The team also discussed about the attitude that each and everyone must possess, such as respect, empathy, fairness, and understanding towards other, so through the activities and discussion conducted, the students were encouraged to appreciate  the importance of treating people equally despite of their differences. It also highlighted how simple acts of kindness can create a positive environment within the school and community.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                In addition, student and facilitators gather a valuable information as it reflect to their own actions and behavior towards other people. So as a future educator, this experience became a realization that teaching values is just as important as teaching academic lessons, because values shape students into responsible and compassionate individuals. The activity also strengthened the understanding that building good relationship with others can promote unity within the community.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Gallery Showcase Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Visual Documentation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-[#7b1113]" />
              <span>Maka-Tao Activities Archive</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
