"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { TimelineCard, TimelineEvent } from "@/components/timeline/TimelineCard";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Sparkles, Play, Flag, CalendarCheck } from "lucide-react";

export default function KickoffPage() {
  const timelineEvents: TimelineEvent[] = [
    {
      id: "event-1",
      time: "08:00 AM",
      title: "Registration & Assembly",
      location: "Bicol University Gubat Campus Covered Court",
      description: "Arrival of BEd Social Studies students, NSTP/LTS coordinators, and community literacy partners for the formal logging and kit distribution.",
      tag: "Assembly",
    },
    {
      id: "event-2",
      time: "09:00 AM",
      title: "Opening Ceremony & National Anthem",
      location: "Main Auditorium",
      description: "Formal invocation following the Maka-Diyos core value, presentation of colors, and welcoming remarks by campus leadership.",
      tag: "Ceremony",
    },
    {
      id: "event-3",
      time: "10:30 AM",
      title: "M.A.K.A. Project Framework Unveiling",
      location: "Main Auditorium",
      description: "Comprehensive introduction to the core objectives: Made to Aspire Kabataan in Adhering to the Filipino Core Values. Designation of student teams.",
      tag: "Keynote",
    },
    {
      id: "event-4",
      time: "01:00 PM",
      title: "Literacy Training Service Kick Off Drive",
      location: "Adopted Community Centers",
      description: "Deployment of student documentarians and instructional teams for diagnostic literacy assessments and civic service orientation.",
      tag: "Deployment",
    },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: "ko-gal-1",
      src: "/images/gallery/community.png",
      title: "Community Literacy & Green Drive",
      category: "Field Action",
      description: "Students enthusiastically collaborating during the introductory civic orientation and community cleanup protocol.",
    },
    {
      id: "ko-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Group 1 — Siklab Assembly",
      category: "Showcase",
      description: "Official documentation portrait of passionate student leaders prepared for deployment under the core heritage framework.",
    },
    {
      id: "ko-gal-3",
      src: "/images/hero/preface-bg.png",
      title: "Auditorium Briefing Session",
      category: "Instructional",
      description: "Setting robust pedagogical blueprints in history and core Filipino identity before community immersion.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Project Kick Off"
        subtitle="Igniting the passion for civic leadership and literacy instruction at Bicol University Gubat Campus."
        imageSrc="/images/gallery/community.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Event Introduction Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#1a1515] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-md mb-16"
        >
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#7b1113]/10 text-[#7b1113] dark:bg-[#d4af37]/10 dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
              <Flag className="w-3.5 h-3.5" />
              <span>Inaugural Protocol</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
              Setting the Foundations for Immersion
            </h2>
            <div className="w-12 h-1 bg-[#7b1113] dark:bg-[#d4af37] rounded-full" />
          </div>

          <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
            <p>
              The official kick-off program marked the active commencement of the M.A.K.A. e-portfolio tracking system. Designed specifically for Bachelor of Secondary Education majors in Social Studies, the launch served to unify the batch under a standard moral and operational objective.
            </p>
            <p>
              Through interactive briefings, real-time community assignments, and oath-taking rites, the student teachers affirmed their readiness to render authentic service inside local elementary districts.
            </p>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Chronological Flow
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <CalendarCheck className="w-6 h-6 text-[#d4af37]" />
              <span>Event Schedule & Milestones</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          {/* Render Timeline Cards */}
          <div className="max-w-3xl mx-auto px-2">
            {timelineEvents.map((ev, index) => (
              <TimelineCard
                key={ev.id}
                event={ev}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Video Section Placeholder */}
        <section className="mb-20">
          <div className="bg-[#580a0b] rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f3e5ab] block">
                Multimedia Highlight
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Kick Off Documentary Reel
              </h3>

              {/* Simulated Video Player Embed Box */}
              <div className="w-full aspect-video rounded-xl bg-black/80 border-2 border-white/20 shadow-inner flex flex-col items-center justify-center p-6 group cursor-pointer hover:border-[#d4af37] transition-all">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] text-[#580a0b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                  <Play className="w-6 h-6 ml-1 fill-[#580a0b]" />
                </div>
                <span className="text-xs font-mono text-gray-300 block">
                  [ Click to Play Cinematic Recap ]
                </span>
                <span className="text-[10px] text-gray-500 block mt-1">
                  Duration: 04m:15s | High Definition MP4 Preview
                </span>
              </div>

              <p className="text-xs text-white/70 italic">
                Video presentation includes real-time interviews with student group leads, coordinators, and community principals.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Visual Archives
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <span>Event Photo Gallery</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
