"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { GalleryGrid, GalleryItem } from "@/components/gallery/GalleryGrid";
import { Sparkles, Trophy, Film } from "lucide-react";

export default function CulminatingPage() {
  const galleryItems: GalleryItem[] = [
    {
      id: "cul-gal-1",
      src: "/images/gallery/Culminating-1.jpg",
      title: "Awarding for Best In M.A.K.A- Diyos",
      category: "Celebration",
    },
    {
      id: "cul-gal-2",
      src: "/images/gallery/Culminating-2.jpg",
      title: "Interactive games for student",
      category: "Recognition",
    },
    {
      id: "cul-gal-3",
      src: "/images/gallery/Culminating-3.jpg",
      title: "Photo opportunity (M.A.K.A-Diyos)",
      category: "Celebration",
    },
    {
      id: "cul-gal-4",
      src: "/images/gallery/Culminating-4.jpg",
      title: "The opening segment",
      category: "Recognition",
    },
    {
      id: "cul-gal-5",
      src: "/images/gallery/Culminating-5.jpeg",
      title: "Warm message given by the student",
      category: "Celebration",
    },
    {
      id: "cul-gal-6",
      src: "/images/gallery/Culminating-6.jpeg",
      title: "Photo opportunity of BSED SS 1",
      category: "Recognition",
    },
    {
      id: "cul-gal-7",
      src: "/images/gallery/Culminating-7.jpeg",
      title: "M.A.K.A design",
      category: "Celebration",
    },
    {
      id: "cul-gal-8",
      src: "/images/gallery/Culminating-8.jpeg",
      title: "Simple token of appreciation",
      category: "Recognition",
    },
    {
      id: "cul-gal-9",
      src: "/images/gallery/Culminating-9.jpeg",
      title: "Prizes",
      category: "Celebration",
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Culminating"
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

          <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b1113]/10 dark:bg-[#d4af37]/10 text-[#7b1113] dark:text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>Program Culmination</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              The culminating Activity served as a meaningful celebrations of all the lessons, experiences, and memories that the facilitators and student shared throughout the program. The event formally started at 2:05 In the afternoon and was filled with Inspiring message from our guests, Including Sir Gerry F. Guardian, our NSTP adviser, Kagawad Christian Jay Gasilio, on behalf of Hon. Joseph Enconado, Ma&apos;am Elenita Catoy, Grade 8 adviser, and Ma&apos;am Eleonora Polo, School head of Bulacao National High School, wherein she create her own definition of M.A.K.A, &ldquo;Mayroon Akong Kaagapay Araw araw,&rdquo; In which It symbolizes collaboration and unity between individual that can create a positive change within the community. In addition, Interactive activities are also conducted such as games, performances, question and answer portion, awardings, and giving a token of appreciation for students who brought success to this event.
            </p>

            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#221c1c] border-l-4 border-[#7b1113] dark:border-[#d4af37] space-y-2">
              <div className="flex items-center gap-2 text-[#7b1113] dark:text-[#d4af37]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">Reflection</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                As one of the Master of the Ceremony during the culminating activity together with Ralph Vincent Dolot, I experienced being pressured during culminating, since we need to create an Interactive environment for us to enjoy the rest of the event. Despite the pressured that I felt.  I&apos;m beyond honored and proud to witness the enjoyment, cooperation, and enthusiasm of the students throughout this activity. This experience also brought a realization that being an educator is not only about teaching lessons inside the classroom, but also about inspiring students, creating meaningful connections, and becoming part of memorable experiences that they will treasure. The culminating activity wrap up with smiles, pictures, gratitude, and valuable lessons that will always treasure by the Individuals involved.
              </p>
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
