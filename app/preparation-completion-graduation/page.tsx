"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { GraduationCap, Sparkles } from "lucide-react";

export default function PreparationCompletionGraduationPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "prep-gal-1",
      src: "/images/hero/preface-bg.png",
      title: "Portfolio Archiving",
      category: "Documentation",
      description: "Compiling verified literacy training reports and signed stakeholder evaluations prior to academic submission.",
    },
    {
      id: "prep-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Pre-Graduation Assessment",
      category: "Milestone",
      description: "Final pre-service pedagogical review loop affirming complete readiness for professional instruction paths.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Preparation for Completion &amp; Graduation"
        subtitle="Meticulously assembling final portfolio milestones, credential reviews, and institutional sign-offs."
        imageSrc="/images/hero/preface-bg.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* Core Review Block */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#1a1515] rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-[#d4af37]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Title Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b1113]/10 dark:bg-[#d4af37]/10 text-[#7b1113] dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Readiness</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Finalizing the Pre-Service Educator Credentials
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#7b1113] to-[#d4af37] rounded-full mt-2" />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              <p>
                During the preparation for the Recognition and graduation rites. The BSED Social Studies 1 students are responsible in arranging flowers, cutting decorative letters, and helping designing the stage to ensure a visually appealing venue for the success of the event. After the preparation, snacks were later distributed to facilitators, that serves as a token of appreciation for their efforts. This experience symbolize the importance of teamwork, creativity, and cooperation to create a such wonderful and meaningful venue for the students of Bulacao National High School.
              </p>
            </div>
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
              <span>Completion Documentation Gallery</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
