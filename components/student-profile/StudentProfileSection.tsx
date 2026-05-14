"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, Users, Star, Mail, CheckCircle2 } from "lucide-react";

export function StudentProfileSection() {
  // Dummy data configuration
  const studentData = {
    name: "Michelle F. Estillero",
    course: "Bachelor of Secondary Education Major in Social Studies 1",
    nstp: "National Service Training Program (Literacy Training Service)",
    committee: "Technical Committee",
    makaGroup: "Group 1 — Maka-Diyos",
    role: "Lead Student Documentarian & Creator",
    email: "michelleestillero90@gmail.com",
    // contact: "+63 912 345 6789",
    skills: [
      "Maka-Diyos Reporter",
      "Technical Committee",
      "Facilitator",
      "Preparation for the Graduation",
      "Cleaning the Gardern",
      "Designing the Garden"
    ],
  };

  return (
    <section
      id="profile"
      className="relative overflow-hidden bg-gradient-to-b from-[#ebe6e1] via-[#f4f0ec] to-[#e8e2dc] py-24 dark:from-[#0d0909] dark:via-[#121010] dark:to-[#151111]"
    >

      {/* Decorative background vectors */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#7b1113]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
      
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1515] dark:text-white relative inline-block pb-4">
            Student Profile
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </h2>
          <p className="mt-4 text-base text-[#3d3535] dark:text-gray-300">
            Dedicated to uplifting community literacy and nurturing deep-rooted academic awareness through core values.
          </p>
        </motion.div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Student Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Info Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-[#fdfcfa] p-6 shadow-[0_12px_40px_rgba(58,6,7,0.12)] transition-all duration-300 hover:shadow-xl dark:border-[#d4af37]/25 dark:bg-[#1a1616] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:p-8">
              <div className="absolute top-0 left-0 h-full w-2 bg-[#7b1113]" />

              <h3 className="font-serif text-2xl font-bold text-[#3d0a0c] sm:text-3xl dark:text-white">
                {studentData.name}
              </h3>

              <div className="mt-4 space-y-3 border-t border-[#e5ddd6] pt-4 dark:border-[#2a2424]">
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#9a7218] dark:text-[#e8c347]" />
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-[#5c4038] dark:text-[#e8c347]">
                      Year & Course
                    </span>
                    <span className="text-sm font-medium text-[#141010] sm:text-base dark:text-gray-100">
                      {studentData.course}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#9a7218] dark:text-[#e8c347]" />
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-[#5c4038] dark:text-[#e8c347]">
                      Program Assignment
                    </span>
                    <span className="text-sm font-medium text-[#141010] dark:text-gray-100">{studentData.nstp}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-[#7b1113] dark:text-[#e8c347]" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#5c4038] dark:text-[#e8c347]">
                        Committee
                      </span>
                      <span className="text-sm font-semibold text-[#141010] dark:text-gray-100">{studentData.committee}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="mt-0.5 h-5 w-5 shrink-0 text-[#7b1113] dark:text-[#e8c347]" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#5c4038] dark:text-[#e8c347]">
                        MAKA Group
                      </span>
                      <span className="text-sm font-semibold text-[#141010] dark:text-gray-100">{studentData.makaGroup}</span>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#7b1113]/10 dark:bg-[#d4af37]/10 text-[#7b1113] dark:text-[#f3e5ab] text-xs font-bold uppercase tracking-wider">
                    Role: {studentData.role}
                  </span>
                </div> */}
              </div>
            </div>

            {/* Contact & Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Contact Card */}
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#fdfcfa] p-5 shadow-[0_8px_28px_rgba(58,6,7,0.1)] transition-transform duration-300 hover:-translate-y-1 dark:border-[#d4af37]/25 dark:bg-[#1a1616] dark:shadow-[0_8px_28px_rgba(0,0,0,0.45)] border-l-4 border-l-[#c9a227] dark:border-l-[#d4af37]">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#5c4038] dark:text-[#e8c347]">
                  Contact Channels
                </h4>
                <div className="space-y-2.5">
                  <a
                    id="profile-email-link"
                    href={`mailto:${studentData.email}`}
                    className="flex items-center gap-2 text-xs text-[#141010] transition-colors hover:text-[#580a0b] sm:text-sm dark:text-gray-100 dark:hover:text-[#f3e5ab]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#9a7218] dark:text-[#e8c347]" />
                    <span className="truncate font-medium underline-offset-2 hover:underline">{studentData.email}</span>
                  </a>
                  {/* <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>{studentData.contact}</span>
                  </div> */}
                </div>
              </div>

              {/* Core Skills Summary */}
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#fdfcfa] p-5 shadow-[0_8px_28px_rgba(58,6,7,0.1)] transition-transform duration-300 hover:-translate-y-1 dark:border-[#d4af37]/25 dark:bg-[#1a1616] dark:shadow-[0_8px_28px_rgba(0,0,0,0.45)] border-l-4 border-l-[#7b1113]">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#5c4038] dark:text-[#e8c347]">
                  Activities Handled
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {studentData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 rounded-full border border-[#3d3535]/15 bg-[#2f2a2a] px-2.5 py-1 text-[11px] font-medium text-white dark:border-[#d4af37]/20 dark:bg-[#262121]"
                    >
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-[#e8c347]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side: Student Picture with Floating Border Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Animated Glow Backdrop */}
            <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#7b1113] to-[#d4af37] rounded-full filter blur-2xl opacity-20 dark:opacity-30 animate-pulse mx-auto my-auto" />

            {/* Picture Container with Gold Floating Border */}
            <div className="relative z-10 w-72 h-80 sm:w-80 sm:h-96 rounded-2xl p-2.5 bg-gradient-to-b from-[#d4af37] via-[#f3e5ab] to-[#7b1113] shadow-2xl group">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-gray-900">
                <Image
                  src="/images/profile/student-1.png"
                  alt={studentData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay highlight label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
                  <span className="text-white font-serif font-medium text-sm block">
                    BEd Social Studies
                  </span>
                  <span className="text-[#f3e5ab] text-[10px] tracking-widest uppercase block">
                    Student Showcase
                  </span>
                </div>
              </div>

              {/* Floating Abstract Accents */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#580a0b] border-2 border-[#d4af37] flex items-center justify-center text-[#f3e5ab] shadow-lg font-serif font-bold text-xs"
              >
                BU
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 rounded-lg border border-[#d4af37] bg-white px-3 py-1.5 text-[11px] font-bold text-[#580a0b] shadow-lg dark:bg-[#1a1616] dark:text-[#f3e5ab]"
              >
                LTS 1 Scholar
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
