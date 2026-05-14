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
    <section id="profile" className="py-24 bg-gradient-to-b from-white via-[#fdfbfb] to-[#f5f2f2] dark:from-[#0d0909] dark:to-[#151111] relative overflow-hidden">

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
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
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
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#7b1113]" />

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7b1113] dark:text-[#f3e5ab]">
                {studentData.name}
              </h3>

              <div className="mt-4 space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block uppercase font-medium">Year & Course</span>
                    <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">{studentData.course}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block uppercase font-medium">Program Assignment</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{studentData.nstp}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#7b1113] dark:text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-400 block uppercase font-medium">Committee</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{studentData.committee}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#7b1113] dark:text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-400 block uppercase font-medium">MAKA Group</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{studentData.makaGroup}</span>
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
              <div className="glass-panel rounded-xl p-5 border-l-4 border-l-[#d4af37] hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Contact Channels</h4>
                <div className="space-y-2.5">
                  <a
                    id="profile-email-link"
                    href={`mailto:${studentData.email}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-[#7b1113] dark:hover:text-[#d4af37] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#d4af37]" />
                    <span className="truncate">{studentData.email}</span>
                  </a>
                  {/* <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>{studentData.contact}</span>
                  </div> */}
                </div>
              </div>

              {/* Core Skills Summary */}
              <div className="glass-panel rounded-xl p-5 border-l-4 border-l-[#7b1113] hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Activities Handled</h4>
                <div className="flex flex-wrap gap-1.5">
                  {studentData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white dark:bg-black/40 text-[11px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
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
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-white dark:bg-black border border-[#d4af37] shadow-lg text-[11px] font-bold text-[#7b1113] dark:text-[#d4af37]"
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
