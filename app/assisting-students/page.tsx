"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { HeartHandshake, Sparkles, BookOpen, Users, Smile, ChevronRight } from "lucide-react";

export default function AssistingStudentsPage() {
  const [activeTab, setActiveTab] = useState<"tutorial" | "facilitation" | "engagement">("tutorial");

  const tabData = {
    tutorial: {
      title: "Remedial Reading &amp; Core Literacy Tutorials",
      desc: "Delivering individualized, patience-driven guidance to learners requiring foundational phonics and vocabulary review modules.",
      impact: "Measurable leaps in independent comprehension speed and active classroom participation.",
    },
    facilitation: {
      title: "Active Group Activity Facilitation",
      desc: "Managing student group dynamics, distributing necessary instructional materials, and maintaining focused, interactive attention loops.",
      impact: "Seamless execution of curriculum protocols inside Bulacao National High School.",
    },
    engagement: {
      title: "Fostering Trust via Warm Entertainment",
      desc: "Integrating creative face painting, collaborative games, and encouraging verbal feedback to cultivate a positive pedagogical environment.",
      impact: "Building deep genuine rapport that breaks down hesitation and inspires eager learning.",
    },
  };

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
        
        {/* Core Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#1a1515] rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-sm text-center max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b1113]/10 text-[#7b1113] dark:bg-[#d4af37]/10 dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Active Mentorship</span>
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
            Bridging Potential with Realized Capability
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Directly assisting students forms the living heart of our community immersion. By walking alongside each learner, we transform standard lesson delivery into a customized experience of encouragement, comprehension, and shared joy.
          </p>
        </motion.section>

        {/* Dynamic Interactive Tabs Block */}
        <section>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Facilitation Dimensions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Targeted Engagement Modalities
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab Controllers */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {[
                { id: "tutorial", label: "Remedial Coaching", icon: BookOpen },
                { id: "facilitation", label: "Group Facilitation", icon: Users },
                { id: "engagement", label: "Creative Rapport", icon: Smile }
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as "tutorial" | "facilitation" | "engagement")}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#7b1113] text-white border-[#7b1113] shadow-md font-semibold"
                        : "bg-white dark:bg-[#1a1515] text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-800 hover:border-[#d4af37]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${isActive ? "text-[#f3e5ab]" : "text-[#7b1113] dark:text-[#d4af37]"}`} />
                      <span className="text-sm sm:text-base font-serif">{tab.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90" : ""}`} />
                  </button>
                );
              })}
            </div>

            {/* Rendered Tab Content Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-[#1a1515] rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-md space-y-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#d4af37]" />

                  <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block">
                    Strategic Focus
                  </span>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {tabData[activeTab].title}
                  </h4>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                    {tabData[activeTab].desc}
                  </p>

                  <div className="pt-4 mt-2 border-t border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7b1113] dark:text-[#f3e5ab] block">
                      Observed Learner Impact:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic">
                      &ldquo;{tabData[activeTab].impact}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
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
