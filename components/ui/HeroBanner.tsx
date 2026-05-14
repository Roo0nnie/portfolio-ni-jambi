"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
}

export function HeroBanner({ title, subtitle, imageSrc = "/images/hero/preface-bg.png" }: HeroBannerProps) {
  return (
    <div className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#580a0b] flex items-center justify-center text-center text-white">
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7b1113]/95 via-[#580a0b]/85 to-transparent" />
      </div>

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-60 h-60 rounded-full border border-[#d4af37]/20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-[#d4af37]/15 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-1 bg-[#d4af37] mx-auto mb-4 rounded-full"
        />
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-var(--background) to-transparent" />
    </div>
  );
}
