"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Users, Heart, MessageSquare } from "lucide-react";

export default function MakaTaoPage() {
  const eventCards = [
    {
      title: "Diagnostic Reading Protocols",
      target: "Gubat Elementary Pupils",
      desc: "Conducted individualized basic reading diagnostic sessions to gauge instructional levels and design tailor-fit modules.",
      stats: "45 Pupils Guided",
    },
    {
      title: "Parent-Teacher Dialogue Sessions",
      target: "Community Stakeholders",
      desc: "Engaged parents in supportive conversations emphasizing home-based literacy reinforcement and academic follow-up.",
      stats: "100% Attendance Rate",
    },
    {
      title: "Peer Tutoring Circles",
      target: "BEd Social Studies Freshmen",
      desc: "Organized cooperative learning loops where advanced learners facilitate interactive review sessions for standard courses.",
      stats: "Weekly Review Cycles",
    },
  ];

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

        {/* Sliding / Expanding Event Cards */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Field Realities
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Student Participation Initiatives
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-[#1a1515] rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-[#7b1113] dark:bg-[#d4af37] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                    Target: {card.target}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-[#7b1113] dark:group-hover:text-[#d4af37] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#7b1113] dark:text-[#f3e5ab]">
                    {card.stats}
                  </span>
                  <MessageSquare className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-[#d4af37] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
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
