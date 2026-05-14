"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { HeartHandshake, Sparkles } from "lucide-react";

export default function AssistingStudentsPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "ast-gal-1",
      src: "/images/gallery/community.png",
      title: "Interactive Game Protocols",
      category: "Mentorship",
      description: "Pre-service teachers directing group problem-solving exercises with utmost dedication and warmth.",
    },
    {
      id: "ast-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "One-on-One Literacy Coaching",
      category: "Instruction",
      description: "Providing focused curricular attention to bridge comprehension gaps and build student self-esteem.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Assisting Students"
        subtitle="Empowering learners through active facilitation, individualized remedial tutorials, and empathetic guidance."
        imageSrc="/images/gallery/community.png"
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
            Selected <strong className="text-[#7b1113] dark:text-[#d4af37]">BSED Social Studies 1</strong> students served as  <strong className="text-[#7b1113] dark:text-[#d4af37]">ushers</strong> and <strong className="text-[#7b1113] dark:text-[#d4af37]">usherette</strong> during the Completion and Graduation Ceremony at <strong className="text-[#7b1113] dark:text-[#d4af37]">Bulacao National High school</strong>. These selected students guide the graduates, parents, and guests to their proper seats, ensuring the smooth flow of the event. Their efforts contributed to the overall success of the event and also to the completion of our Immersion.
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
              <span>Assistance Roster Gallery</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
