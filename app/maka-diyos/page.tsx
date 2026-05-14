"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { HeartHandshake, Sparkles, BookHeart, Compass, Calendar, MapPin, Award } from "lucide-react";

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

  // Acronym definitions for premium dynamic tags rendering
  const acronymList = [
    { letter: "M", word: "Merciful" },
    { letter: "A", word: "Aware" },
    { letter: "K", word: "Kind" },
    { letter: "A", word: "Attentive" },
    { letter: "-", word: "—" },
    { letter: "D", word: "Devout" },
    { letter: "I", word: "Inspiring" },
    { letter: "Y", word: "Yielding" },
    { letter: "O", word: "Obedient" },
    { letter: "S", word: "Sincere" },
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

        {/* Replaced Component Segment: Moral & Ethical Engagements */}
        <section className="mb-20">
      
          {/* Premium Presentation Panel for the Authentic Student Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#1a1515] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            {/* Top Event Metadata Header Bar */}
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
                  <span><strong>What:</strong> Maka-Diyos</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>When:</strong> March 5, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span><strong>Where:</strong> Bulacao National High School</span>
                </div>
              </div>
            </div>            {/* Internal Narrative Content Body */}
            <div className="p-6 sm:p-10 space-y-8">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                During the Second day of the immersion, Maka diyos team are responsible for delivering a lesson by providing knowledge and reliable information about being a Maka-Diyos. Our team are also responsible in assisting when it comes to the activities that we are conducting, to ensure the active participation of the students. As someone who is belong to this group and responsible to be the first discussant, I was able to explain my topic on what it trully means to be a Maka-Diyos, This discussion brought a learnings and realization about the true essence of being Mericiful, Aware, Kind, Attentive, Devout, Inspiring, Yielding, Obedient, and Sincere or which we called the acronym &ldquo;MAKA DIYOS&rdquo;. Aside from these, my co members also explain their part and broaden the topic for student to understand and embody the bigger concept of being a Maka-Diyos. So to conclude our discussion, we are able to presents an activity to ensure their understanding and acknowledge their active partipation, by giving a reward or simple token of appreciation.
              </p>

              {/* Dynamic Visual Breakdown of the Acronym */}
              <div className="bg-gray-50 dark:bg-[#221c1c] p-5 rounded-2xl border-l-4 border-[#7b1113] dark:border-[#d4af37] space-y-3">
                <span className="text-xs font-bold text-[#7b1113] dark:text-[#d4af37] uppercase tracking-wider block">
                  Core Acronym Reference
                </span>
                <div className="flex flex-wrap gap-2">
                  {acronymList.map((item, i) => item.letter === "-" ? (
                    <div key={i} className="w-full h-1 my-0.5" />
                  ) : (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-white dark:bg-[#1a1515] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#7b1113] text-white dark:bg-[#d4af37] dark:text-[#580a0b] flex items-center justify-center text-xs font-serif font-bold">
                        {item.letter}
                      </span>
                      <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide">
                        {item.word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
