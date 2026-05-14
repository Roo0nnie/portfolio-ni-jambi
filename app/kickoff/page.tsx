"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Sparkles, Play, Heart, Award, Users, Mic } from "lucide-react";

export default function KickoffPage() {

  const galleryItems: GalleryItem[] = [
    {
      id: "ko-gal-1",
      src: "/images/gallery/community.png",
      title: "Bulacao Immersion Orientation",
      category: "Engagement",
      description: "Fostering collaboration and warmth among the Grade 8 Matapat and Masipag students during interactive games.",
    },
    {
      id: "ko-gal-2",
      src: "/images/hero/hero-bg.png",
      title: "Inspirational Program Flow",
      category: "Leadership",
      description: "Delivering educational milestones and setting active values formation inside the local high school venue.",
    },
    {
      id: "ko-gal-3",
      src: "/images/hero/preface-bg.png",
      title: "Assembling & Venue Cleanup",
      category: "Stewardship",
      description: "Demonstrating true Maka-Kalikasan and Maka-Tao responsibilities by restoring and organizing the school spaces post-event.",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Premium Hero Banner */}
      <HeroBanner
        title="Project Kick Off"
        subtitle="Igniting the passion for civic leadership, values formation, and literacy instruction at Bulacao National High School."
        imageSrc="/images/gallery/community.png"
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">

        {/* Enhanced Narrative Overview Block */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#1a1515] dark:via-[#1f1919] dark:to-[#151111] rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-xl"
        >
          {/* Subtle decorative background vector */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#7b1113]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Title Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b1113]/10 dark:bg-[#d4af37]/10 text-[#7b1113] dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Inaugural Protocol</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Setting the Foundations for Immersion
              </h2>

              <div className="w-16 h-1.5 bg-gradient-to-r from-[#7b1113] to-[#d4af37] rounded-full mt-2" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              <p>
                As part of the BSED Social studies 1, a lot of responsibilities were taken on the first day of immersion, from preparing the venue, providing entertainment to students, and cleaning the venue after the activity. The Kick off program conducted last February 26, 2026 at Bulacao National High School, which serves as the foundation for building closeness and cooperation to students. During this day. We are also honored by the presence of The Kindness Station (TKS) in which they've volunteer to make a creative face painting for both students and facilitators. Aside from these, we are also honored to hear some inspiring message from our beloved CSAS Coordinator, Ma'am Cristine Ann D. Laguardia, Brgy Captain of Bulacao, Sir Joseph Enconado, the school principal of Bulacao National High School, Ma'am Eleonora Polo, and our NSTP adviser, Sir Gerry F. Guardian. After delivering their messages, the students and facilitators begun to enjoy the rest of the event with a series of Interactive activities, question and answer portion, distribution of snacks and token of appreciation to express gratitude and strengthen the bond between facilitators and the participants. The event concluded with a picture taking and assembling the place.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Premium Personal Reflection Spotlight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#580a0b] via-[#7b1113] to-[#580a0b] text-white p-8 sm:p-12 shadow-2xl"
        >
          {/* Background overlay matrix */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_60%)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Title side */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Personal Connection</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                A Vocation Confirmed
              </h2>
              <p className="text-xs text-white/80 uppercase tracking-widest font-mono">
                Student Documentarian&apos;s Realization
              </p>
              <div className="w-12 h-1 bg-[#f3e5ab] rounded-full mt-1" />
            </div>

            {/* Narrative side with stunning emphasis */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-white/95 leading-relaxed font-sans">
              <p className="text-lg font-serif italic text-[#f3e5ab] leading-snug">
                &ldquo;During the first day of immersion, I witnessed the authentic beauty of Bulacao National High School—seen not merely in their pristine natural surroundings, but in the pure hearts of students dedicated to respectful learning.&rdquo;
              </p>

              <div className="p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#f3e5ab]">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="font-serif font-bold text-base tracking-wide">The Proudest Moment</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90">
                  As someone training to become a professional educator, hearing myself respectfully addressed as <strong className="text-white font-bold underline decoration-[#d4af37] underline-offset-4 text-base">&ldquo;Ma&apos;am Michelle&rdquo;</strong> for the very first time by the learners filled my heart with profound pride and cemented my lifelong inspiration to pursue the noble art of teaching.
                </p>
              </div>

              <p className="text-xs text-white/80 pt-2">
                Beyond individual epiphanies, the entire schedule reinforced the absolute necessity of shared effort, cohesive preparation, and unyielding teamwork in achieving real instructional success.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Cinematic Video Highlight Reel Placeholder */}
        <section>
          <div className="bg-white dark:bg-[#1a1515] rounded-3xl p-8 sm:p-12 text-center border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block">
                Multimedia Recaps
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                <Mic className="w-5 h-5 text-[#7b1113] dark:text-[#d4af37]" />
                <span>Kick Off Documentary Reel</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Capturing real-time student interaction loops, creative face painting stations, and local stakeholder perspectives.
              </p>
            </div>

            {/* Custom Video Mock Player Container */}
            <div className="max-w-3xl mx-auto aspect-video rounded-2xl bg-gradient-to-tr from-gray-900 via-black to-gray-900 border-2 border-gray-800 shadow-2xl flex flex-col items-center justify-center p-6 group cursor-pointer hover:border-[#d4af37] transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)]" />

              <div className="w-16 h-16 rounded-full bg-[#d4af37] text-[#580a0b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3 z-10">
                <Play className="w-6 h-6 ml-1 fill-[#580a0b]" />
              </div>

              <span className="text-xs font-mono text-[#f3e5ab] block z-10 tracking-wider">
                [ Click to Play High-Definition Recap ]
              </span>

              <span className="text-[10px] text-gray-400 block mt-1 z-10">
                Total Runtime: 04m:15s | Stereo Audio Track Enabled
              </span>
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
              <span>Event Documentation Gallery</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <GalleryGrid items={galleryItems} />
        </section>

      </div>
    </main>
  );
}
