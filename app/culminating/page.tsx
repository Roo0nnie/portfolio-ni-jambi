"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Award, Sparkles, CheckCircle2, Trophy, Users } from "lucide-react";

export default function CulminatingPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "cul-gal-1",
      src: "/images/gallery/community.png",
      title: "Culminating Ceremonies",
      category: "Celebration",
      description: "Official capstone documentation highlighting student participants, community stakeholders, and local facilitators.",
    },
    {
      id: "cul-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Awarding of Certifications",
      category: "Recognition",
      description: "Distributing customized certificates of completion and simple tokens of gratitude to our active learners.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Culminating Capstone"
        subtitle="Celebrating final immersion milestones, community literacy breakthroughs, and sustainable student leadership."
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Header Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b1113]/10 dark:bg-[#d4af37]/10 text-[#7b1113] dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>Program Culmination</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Honoring Dedicated Immersion Outcomes
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#7b1113] to-[#d4af37] rounded-full mt-2" />
            </div>

            {/* Narrative Content Column */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              <p>
                The culminating schedule marks the definitive climax of our pedagogical immersion. As pre-service educators, finalizing these instructional loops confirms that our targeted literacy frameworks and values formation systems have taken deep root within the community.
              </p>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#221c1c] border-l-4 border-[#7b1113] dark:border-[#d4af37] space-y-2">
                <div className="flex items-center gap-2 text-[#7b1113] dark:text-[#d4af37]">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Verified Deliverable</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic">
                  Successfully facilitated complete final programmatic assessments, dynamic recognition sequences, and post-immersion space restoration alongside local school constituents.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                <Users className="w-4 h-4 text-[#7b1113] dark:text-[#d4af37] shrink-0" />
                <span>
                  Collaboratively authored by the student facilitator body to secure accessible academic archives for continued reference.
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Accomplishments Spotlight */}
        <section>
          <div className="rounded-3xl bg-gradient-to-r from-[#580a0b] via-[#7b1113] to-[#580a0b] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_60%)]" />

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#f3e5ab] block">
                Final Review
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Key Capstone Breakthroughs
              </h3>
              <div className="w-12 h-1 bg-[#f3e5ab] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {[
                { title: "Literacy Retention", desc: "Measurable advancements in core reading confidence and group collaboration among local participants." },
                { title: "Civic Empowerment", desc: "Active adoption of the Maka-Diyos, Maka-Tao, Maka-Kalikasan, and Maka-Bansa pillars." },
                { title: "Sustainable Alignment", desc: "Long-term instructional templates configured for adoption by succeeding student volunteer cohorts." }
              ].map((item, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-[#f3e5ab]" />
                  <h4 className="font-serif font-bold text-lg text-white">{item.title}</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Showcase Section */}
        <section className="pb-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block">
              Visual Archives
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <span>Culminating Photo Roster</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
