"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Sparkles, Heart, Award, Users, Mic } from "lucide-react";

export default function KickoffPage() {

  const galleryItems: GalleryItem[] = [
    {
      id: "ko-gal-1",
      src: "/images/gallery/KICKOFF-1.jpg",
      title: "Picture taking together with The Kindness Station (TKS)",
      category: "Engagement",
    },
    {
      id: "ko-gal-2",
      src: "/images/gallery/KICKOFF-2.jpg",
      title: "Attendance",
      category: "Leadership",
    },
    {
      id: "ko-gal-3",
      src: "/images/gallery/KICKOFF-3.jpg",
      title: "Face painting made By TKS",
      category: "Stewardship",
    },
    {
      id: "ko-gal-4",
      src: "/images/gallery/KICKOFF-4.jpg",
      title: "Snacks for students, guests, and facilitator",
      category: "Stewardship",
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
            As part of the <strong className="text-[#7b1113] dark:text-[#d4af37]">BSED Social studies 1</strong>, a lot of responsibilities were taken on the first day of immersion, from preparing the venue, providing entertainment to students, and cleaning the venue after the activity. The Kick off program conducted last <strong className="text-[#7b1113] dark:text-[#d4af37]">February 26, 2026</strong> at <strong className="text-[#7b1113] dark:text-[#d4af37]">Bulacao National High School</strong>, which serves as the foundation for building closeness and cooperation to students. During this day. We are also honored by the presence of <strong className="text-[#7b1113] dark:text-[#d4af37]">The Kindness Station (TKS)</strong> in which they've volunteer to make a creative face painting for both students and facilitators. Aside from these, we are also honored to hear some inspiring message from our beloved CSAS Coordinator, <strong className="text-[#7b1113] dark:text-[#d4af37]">Ma'am Cristine Ann D. Laguardia</strong>, Brgy Captain of Bulacao, <strong className="text-[#7b1113] dark:text-[#d4af37]">Sir Joseph Enconado</strong>, the school principal of Bulacao National High School, <strong className="text-[#7b1113] dark:text-[#d4af37]">Ma'am Eleonora Polo</strong>, and our NSTP adviser, <strong className="text-[#7b1113] dark:text-[#d4af37]">Sir Gerry F. Guardian</strong>. After delivering their messages, the students and facilitators begun to enjoy the rest of the event with a series of Interactive activities, question and answer portion, distribution of snacks and token of appreciation to express gratitude and strengthen the bond between facilitators and the participants. The event concluded with a picture taking and assembling the place.
            </p>
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
                As someone becoming an educator, hearing myself respectfully addressed <strong className="text-white font-bold underline decoration-[#d4af37] underline-offset-4 text-base">&ldquo;Ma&apos;am Michelle&rdquo;</strong>  for the very first time by the learners  made my heart proud and inspired of pursuing the path of teaching.
                </p>
              </div>

              <p className="text-xs text-white/80 pt-2">
                Beyond individual epiphanies, the entire schedule reinforced the absolute necessity of shared effort, cohesive preparation, and unyielding teamwork in achieving real instructional success.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Kick off event video (hosted on YouTube) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block">
              Event recording
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Mic className="w-5 h-5 text-[#d4af37]" />
              <span>Project kick off highlight</span>
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full" />
            <p className="text-sm text-gray-600 dark:text-gray-400 pt-2">
              Full coverage is on{" "}
              <a
                href="https://youtu.be/CqZLaQNVy_Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7b1113] dark:text-[#d4af37] font-semibold underline underline-offset-2 hover:opacity-90"
              >
                YouTube
              </a>
              .
            </p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/CqZLaQNVy_Q"
              title="Project kick off at Bulacao National High School"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
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
