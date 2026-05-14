"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Sparkles, Compass } from "lucide-react";

export function PrefaceSection() {
  return (
    <section id="preface" className="relative py-32 overflow-hidden bg-[#1a1515] text-white">

      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/preface-bg.png"
          alt="Elegant Academic Library Preface Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-overlay"
        />
        {/* Soft linear gradient overlays for ultimate readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1515] via-[#1a1515]/90 to-[#580a0b]/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Preface & Overview
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main content: single column, top to bottom */}
        <div className="flex flex-col gap-12 lg:gap-14 max-w-3xl mx-auto w-full">

          {/* Quote panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full pb-8"
          >
            <div className="glass-panel-maroon rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <Quote className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 transform -rotate-12 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <Compass className="w-10 h-10 text-[#f3e5ab]" />

                <blockquote className="font-serif text-lg sm:text-xl leading-relaxed italic text-white/95">
                  &ldquo;The true essence of education transcends academic brilliance; it is deeply rooted in our constant aspiration to live out our core national heritage and moral responsibility.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-white/20">
                  <span className="font-serif font-bold text-base text-[#f3e5ab] block">
                    M.A.K.A. E-Portfolio
                  </span>
                  <span className="text-xs text-white/70 block">
                    Literacy Training Service Blueprint
                  </span>
                </div>
              </div>
            </div>

            {/* Absolute badge overlay */}
            <div className="absolute -bottom-5 left-6 px-4 py-2 rounded-lg bg-[#d4af37] text-[#1a1515] font-bold text-xs shadow-lg uppercase tracking-wider">
              Bicol University 2026
            </div>
          </motion.div>

          {/* Overview copy + link cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">

              <h3 className="font-serif text-2xl font-bold text-[#f3e5ab] flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                Adhering to the Filipino Core Values
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                <p>
                  This <strong className="text-white font-semibold">E-Portfolio</strong> covers the <em className="text-[#f3e5ab] font-medium">
                    experiences</em>, <em className="text-[#f3e5ab] font-medium">
                    learnings</em>, <em className="text-[#f3e5ab] font-medium">
                    realization</em>, <em className="text-[#f3e5ab] font-medium">
                    collaborations</em>, and <em className="text-[#f3e5ab] font-medium">
                    achievements</em> of the <em className="text-[#f3e5ab] font-medium">
                    Bachelor of Secondary Education (BSED) Major in Social Studies 1 students</em> of Bicol University Gubat Campus, as their requirements for the subject Literacy Training Service (LTS) under the National Service Training Program (NSTP). This activity highlights the implementation of the M.A.K.A Project: &ldquo;Made to Aspire Kabataan in Adhering to the Filipino Core Values&rdquo; and was participated by the Grade 8- Matapat/Masipag students of Bulacao National High School.
                </p>
                <p>
                  <strong className="text-white font-semibold">M.A.K.A.</strong> —{" "}  <em className="text-[#f3e5ab] font-medium">
                    Made to Aspire Kabataan in Adhering to the Filipino Core Values</em> a project designed to transfer information and guide the Grade 8 students about the four Filipino core values: MAKA-DIYOS, MAKA-TAO, MAKA-KALIKASAN, and MAKA-BANSA, that strengthen their understanding and awareness when it comes to the values of being a Filipino citizens. This program is not just merely about discussion, but it creates learning and experiences through engaging activities, entertainment, assessment, collaboration, and meaningful token of appreciation to students who become our source of success.
                </p>

                <p>
                  Overall, this <strong className="text-white font-semibold">E-Portfolio</strong> reflects the commitment of the BSED Social Studies 1 to conduct a such wonderful and memorable events that are connected to the vision, mission, and goals of Bicol University Institution. It also serves as a documentation of their dedication, collaborative efforts, and meaningful contribution to the community through education and values formation.
                </p>
                {/* <p>
                  Welcome to the official electronic portfolio for the project{" "}
                  <strong className="text-white font-semibold">M.A.K.A.</strong> —{" "}
                  <em className="text-[#f3e5ab] font-medium">
                    Made to Aspire Kabataan in Adhering to the Filipino Core Values
                  </em>. This curated collection represents our dedication to active national citizenship, personal stewardship, and community literacy instruction under the Gubat Campus curriculum.
                </p>

                <p>
                  As future educators majoring in Social Studies, we recognize that academic excellence must be complemented by the four essential pillars of the Filipino moral identity. Through rigorous reflection and civic engagement, this showcase explores our milestones across four distinct spheres:
                </p> */}

                {/* Highlight Grid — core values + immersion milestones */}
                <div className="grid grid-cols-2 gap-3 pt-2 pb-2">
                  <Link
                    id="preface-link-diyos"
                    href="/maka-diyos"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Maka-Diyos
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Spiritual fidelity & moral depth</span>
                  </Link>

                  <Link
                    id="preface-link-tao"
                    href="/maka-tao"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Maka-Tao
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Respect for humanity & civic service</span>
                  </Link>

                  <Link
                    id="preface-link-kalikasan"
                    href="/maka-kalikasan"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Maka-Kalikasan
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Environmental conservation drive</span>
                  </Link>

                  <Link
                    id="preface-link-bansa"
                    href="/maka-bansa"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Maka-Bansa
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Patriotic leadership & identity</span>
                  </Link>

                  <Link
                    id="preface-link-culminating"
                    href="/culminating"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Culminating
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Capstone celebration & program closure</span>
                  </Link>

                  <Link
                    id="preface-link-assisting-students"
                    href="/assisting-students"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Assisting Students
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Ceremony support & learner engagement</span>
                  </Link>

                  <Link
                    id="preface-link-preparation-graduation"
                    href="/preparation-completion-graduation"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      Preparation &amp; Graduation
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Completion rites & venue readiness</span>
                  </Link>

                  <Link
                    id="preface-link-garden"
                    href="/garden"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-white/10 transition-all group"
                  >
                    <span className="font-serif font-bold text-[#d4af37] block group-hover:translate-x-1 transition-transform">
                      The Garden
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">School bio-intensive stewardship</span>
                  </Link>
                </div>

                <p className="text-xs text-gray-400 italic pt-1">
                  Click any card to open pillar archives, culminating milestones, preparation and graduation notes, assisting-student roles, garden stewardship, and galleries.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
