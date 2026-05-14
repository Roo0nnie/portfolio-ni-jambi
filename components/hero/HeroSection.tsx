"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export function HeroSection() {
  // Deterministic particle configuration for light effects to ensure strict component purity
  const particles = [
    { top: "12%", left: "20%", duration: 5.2, delay: 0.1 },
    { top: "85%", left: "15%", duration: 6.5, delay: 0.8 },
    { top: "45%", left: "82%", duration: 4.8, delay: 1.2 },
    { top: "60%", left: "35%", duration: 7.1, delay: 0.4 },
    { top: "25%", left: "65%", duration: 5.9, delay: 1.5 },
    { top: "75%", left: "75%", duration: 6.2, delay: 0.9 },
    { top: "35%", left: "10%", duration: 4.5, delay: 0.2 },
    { top: "90%", left: "45%", duration: 7.5, delay: 1.8 },
    { top: "15%", left: "88%", duration: 5.0, delay: 0.6 },
    { top: "50%", left: "50%", duration: 6.8, delay: 1.1 },
    { top: "70%", left: "5%", duration: 5.5, delay: 0.3 },
    { top: "5%", left: "45%", duration: 7.0, delay: 1.4 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#580a0b]">
      {/* Background Image Showcase with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="M.A.K.A Group Showcase Background"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 animate-pulse-slow"
        />
        {/* Deep Maroon & Gold Radiant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7b1113]/90 via-[#580a0b]/80 to-[#1a1515]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Corner Shapes inspired by sample */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#d4af37]/40 z-10 m-6 rounded-tl-lg pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#d4af37]/40 z-10 m-6 rounded-tr-lg pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#d4af37]/40 z-10 m-6 rounded-bl-lg pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#d4af37]/40 z-10 m-6 rounded-br-lg pointer-events-none hidden md:block" />

      {/* Floating Particles/Light Effects */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#f3e5ab] z-10 pointer-events-none blur-[1px]"
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        
        {/* Academic Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/30 text-[#f3e5ab] text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          Bicol University Gubat Campus
        </motion.div>

        {/* Large M.A.K.A Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-lg mb-6"
        >
          <span className="gold-gradient-text block">M.A.K.A.</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow"
        >
          “Made to Aspire Kabataan in Adhering to the{" "}
          <span className="text-[#f3e5ab] font-medium underline decoration-[#d4af37] underline-offset-4">
            Filipino Core Values
          </span>”
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            id="hero-btn-explore"
            href="#preface"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#1a1515] font-semibold text-base shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            id="hero-btn-profile"
            href="#profile"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:bg-white/20 hover:border-[#d4af37] transition-all duration-300 transform hover:-translate-y-1 gap-2"
          >
            <User className="w-5 h-5 text-[#d4af37]" />
            <span>View Student Profile</span>
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] text-white/60 tracking-widest uppercase mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 bg-black/20 backdrop-blur-xs"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
