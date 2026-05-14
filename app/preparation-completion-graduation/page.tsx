"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { GraduationCap, Sparkles, CheckSquare, Award, FileText } from "lucide-react";

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
                As the academic year draws to its close, comprehensive preparation for completion and graduation demands complete organizational clarity. This crucial phase guarantees that every hour spent instructing, guiding, and mentoring students maps perfectly to required professional benchmarks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#221c1c] border border-gray-100 dark:border-gray-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#7b1113] dark:text-[#d4af37]">
                    <CheckSquare className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Verification</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Rigorous peer audits ensuring absolute fidelity of submitted community narrative timestamps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#221c1c] border border-gray-100 dark:border-gray-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#7b1113] dark:text-[#d4af37]">
                    <FileText className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Compilation</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Consolidating lesson plans, graphic evaluations, and formal certifications into unified electronic repositories.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                <Award className="w-4 h-4 text-[#7b1113] dark:text-[#d4af37] shrink-0" />
                <span>
                  Preparing the pre-service candidate body to proudly transition from supervised student immersion to full certified field tenure.
                </span>
              </div>
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
