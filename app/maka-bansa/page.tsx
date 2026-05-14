"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Flag, ShieldCheck, Landmark, CheckSquare, ChevronRight } from "lucide-react";

export default function MakaBansaPage() {
  const [activeTab, setActiveTab] = useState<"identity" | "citizenship" | "leadership">("identity");

  const tabContents = {
    identity: {
      title: "Promoting Local Heritage & Flag Honor",
      desc: "Integrated structured curriculum review sessions focusing on significant Philippine historical milestones, regional Bicolano contributions, and deep respect for the national flag symbolisms.",
      action: "Conducted flag ceremonies and civic singing protocols inside our adopted elementary districts.",
    },
    citizenship: {
      title: "Civic Literacy & Voting Education Awareness",
      desc: "Designed specialized teaching modules tailored for adult literacy programs, preparing community stakeholders for active participatory governance and informed regional representation.",
      action: "Facilitated mock town-hall forums emphasizing community consensus and basic human rights.",
    },
    leadership: {
      title: "Youth Leadership & Community Taskforces",
      desc: "Headed group formations ensuring systematic distribution of literacy reading kits, establishing reliable communication channels with Local Government Unit representatives in Gubat.",
      action: "Mentored aspiring young students to adopt proactive task leadership during community immersion schedules.",
    },
  };

  const galleryItems: GalleryItem[] = [
    {
      id: "mb-gal-1",
      src: "/images/hero/hero-bg.png",
      title: "Civic Leadership Assembly",
      category: "Patriotism",
      description: "Official documentation portrait of passionate BEd Social Studies student leaders embodying the core national spirit.",
    },
    {
      id: "mb-gal-2",
      src: "/images/hero/preface-bg.png",
      title: "History Curriculum Integration",
      category: "Heritage",
      description: "Reviewing comprehensive regional Bicol history files inside the university archive prior to public dissemination.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner with patriotic styling */}
      <HeroBanner
        title="Maka-Bansa Pillar"
        subtitle="Upholding authentic national pride, active civic responsibility, and visionary youth leadership."
        imageSrc="/images/hero/hero-bg.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Intro banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#1a1515] rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-md mb-16 text-center max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b1113]/10 text-[#7b1113] dark:bg-[#d4af37]/10 dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5" />
            <span>Civic Allegiance</span>
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
            Rooting Pedagogy in Authentic Patriotism
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans max-w-2xl mx-auto">
            As future Social Studies educators, upholding the Maka-Bansa core value represents our direct professional legacy. We are not just instructing reading protocols; we are actively forming informed, responsible, and nation-loving citizens.
          </p>
        </motion.section>

        {/* Interactive Tabbed Sections */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Strategic Domains
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Patriotic Literacy Activities
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Tab controls */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                id="tab-btn-identity"
                onClick={() => setActiveTab("identity")}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === "identity"
                    ? "bg-[#7b1113] text-white border-[#7b1113] shadow-md font-semibold"
                    : "bg-white dark:bg-[#1a1515] text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-800 hover:border-[#d4af37]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Flag className={`w-5 h-5 ${activeTab === "identity" ? "text-[#f3e5ab]" : "text-[#7b1113] dark:text-[#d4af37]"}`} />
                  <span className="text-sm sm:text-base font-serif">National Identity</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === "identity" ? "rotate-90" : ""}`} />
              </button>

              <button
                id="tab-btn-citizenship"
                onClick={() => setActiveTab("citizenship")}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === "citizenship"
                    ? "bg-[#7b1113] text-white border-[#7b1113] shadow-md font-semibold"
                    : "bg-white dark:bg-[#1a1515] text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-800 hover:border-[#d4af37]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className={`w-5 h-5 ${activeTab === "citizenship" ? "text-[#f3e5ab]" : "text-[#7b1113] dark:text-[#d4af37]"}`} />
                  <span className="text-sm sm:text-base font-serif">Citizenship Awareness</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === "citizenship" ? "rotate-90" : ""}`} />
              </button>

              <button
                id="tab-btn-leadership"
                onClick={() => setActiveTab("leadership")}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === "leadership"
                    ? "bg-[#7b1113] text-white border-[#7b1113] shadow-md font-semibold"
                    : "bg-white dark:bg-[#1a1515] text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-800 hover:border-[#d4af37]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CheckSquare className={`w-5 h-5 ${activeTab === "leadership" ? "text-[#f3e5ab]" : "text-[#7b1113] dark:text-[#d4af37]"}`} />
                  <span className="text-sm sm:text-base font-serif">Leadership Protocols</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === "leadership" ? "rotate-90" : ""}`} />
              </button>
            </div>

            {/* Tab view portal */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-[#1a1515] rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#d4af37]" />

                  <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block">
                    Domain Overview
                  </span>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {tabContents[activeTab].title}
                  </h4>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                    {tabContents[activeTab].desc}
                  </p>

                  <div className="pt-4 mt-2 border-t border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7b1113] dark:text-[#f3e5ab] block mb-1">
                      Verified Impact Record:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic">
                      &ldquo;{tabContents[activeTab].action}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* Closing Reflection block */}
        <section className="mb-16">
          <div className="bg-[#580a0b] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl text-center max-w-4xl mx-auto space-y-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.15),transparent)]" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f3e5ab] block">
                Closing Reflection
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                The Educator as a Steward of National Destiny
              </h3>

              <div className="h-0.5 w-16 bg-[#d4af37] mx-auto" />

              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto font-sans">
                Through the integration of the four pillars—Maka-Diyos, Maka-Tao, Maka-Kalikasan, and Maka-Bansa—the electronic portfolio fulfills its purpose. It demonstrates that the Literacy Training Service is not merely an institutional requirement but a profound national service designed to light the spark of collective civic aspiration across Sorsogon and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Visual Archives
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Maka-Bansa Photo Roster
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
