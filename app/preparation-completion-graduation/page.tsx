"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { GraduationCap, Sparkles, Trophy } from "lucide-react";

export default function PreparationCompletionGraduationPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "prep-gal-1",
      src: "/images/gallery/Preparation-6.jpg",
      title: "Stage Decoration",
      category: "Documentation",
    },
    {
      id: "prep-gal-2",
      src: "/images/gallery/Preparation-5.jpg",
      title: "Materials Preparatin & Gathering",
      category: "Milestone",
    },
    {
      id: "prep-gal-3",
      src: "/images/gallery/Preparation-4.jpg",
      title: "Picture taking",
      category: "Documentation",
    },
    {
        id: "prep-gal-4",
      src: "/images/gallery/Preparation-3.jpg",
      title: "Chairs Arrangement",
      category: "Milestone",
    },
    {
      id: "prep-gal-5",
      src: "/images/gallery/Preparation-2.jpg",
      title: "Snacks Distribution & Preparation",
      category: "Documentation",
    },
    {
      id: "prep-gal-6",
      src: "/images/gallery/Preparation-1.jpg",
      title: "Setting up & Planning",
      category: "Milestone",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Preparation for Completion &amp; Graduation"
        subtitle=""
        imageSrc="/images/hero/preface-bg.png"
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
            During the preparation for the Recognition and graduation rites. The <strong className="text-[#7b1113] dark:text-[#d4af37]">BSED Social Studies 1</strong> students are responsible in  <strong className="text-[#7b1113] dark:text-[#d4af37]">arranging flowers</strong>, <strong className="text-[#7b1113] dark:text-[#d4af37]">cutting decorative letters</strong>, and <strong className="text-[#7b1113] dark:text-[#d4af37]">helping designing the stage</strong> to ensure a visually appealing venue for the success of the event. After the preparation, snacks were later distributed to facilitators, that serves as a token of appreciation for their efforts. This experience symbolize the importance of <strong className="text-[#7b1113] dark:text-[#d4af37]">teamwork</strong>, <strong className="text-[#7b1113] dark:text-[#d4af37]">creativity</strong>, and <strong className="text-[#7b1113] dark:text-[#d4af37]">cooperation</strong> to create a such wonderful and meaningful venue for the students of <strong className="text-[#7b1113] dark:text-[#d4af37]">Bulacao National High School</strong>.
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
              <span>Documentation Gallery</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
