"use client";

import React from "react";

import { motion } from "framer-motion";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { Heart, Award } from "lucide-react";

export default function AcknowledgementPage() {
  const officers = [
    { name: "Prof. Gerry F. Guardian,", role: "NSTP / LTS Coordinator", desc: "For unwavering mentorship and academic oversight.", university: "Bicol University Gubat Campus" },
    { name: "Ma'am Eleonora Polo, ", role: "School Head, BNHS", desc: "For inspiring visionary leadership and regional service.", university: "Bulacao National High School" },
    { name: "Grade 8-Matapat/Masipag, ", role: "Student Participants", desc: "For enthusiastic engagement and active participation in the learning activities.", university: "Students" },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pb-24">
      {/* Hero Banner */}
      <HeroBanner
        title="Acknowledgement"
        subtitle="With heartfelt gratitude to the pillars who made this portfolio showcase possible."
        imageSrc="/images/hero/preface-bg.png"
      />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

        {/* Appreciation Message Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#1a1515] rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-lg relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heart className="w-12 h-12 text-[#7b1113] dark:text-[#d4af37] mx-auto fill-[#7b1113]/10 dark:fill-[#d4af37]/10" />

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              A Message of Sincere Appreciation
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              The <strong className="text-[#7b1113] dark:text-[#d4af37]">BSED Social Studies 1</strong> would like to express their heartfelt gratitude to all the Individuals who contributed to the success of this event, including the <strong className="text-[#7b1113] dark:text-[#d4af37]">Bicol University Institution</strong> who grant authority and travel Order needed to formally conduct this Immersion. Special appreciation are also given to the <strong className="text-[#7b1113] dark:text-[#d4af37]">Bicol University Gubat Campus (BUGC)</strong> for allowing and supporting this kind of activities. BUGC become a helping hand of BSED Social Studies 1 when it comes to the preparation and approving all the Important documents and other academic requirements. Furthermore, BSED Social Studies 1 are sincerely grateful to their Instructor, <strong className="text-[#7b1113] dark:text-[#d4af37]">Sir Gerry F. Guardian</strong> for his unwavering guidance, encouragement, patience, and valuable advice throughout the entire immersion process. His dedication and supervision greatly contributed to the success of the activity. And also, to all the Student of BSED Social studies 1 who gave effort, knowledge, and dedication to implement this memorable and meaningful event. The BSED Social studies 1 really did an amazing immersion that helps students to understand the core values of being a Filipino.
            </p>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              Moreover, to <strong className="text-[#7b1113] dark:text-[#d4af37]">Bulacao National High School</strong>, the BSED Social Studies 1 are very much thankful for giving the opportunity to conduct the immersion within their school community, as well as to the <strong className="text-[#7b1113] dark:text-[#d4af37]">Grade 8 Matapat and Masipag students</strong> for becoming a participants. Their involvement, participation, cooperation, and enthusiasm made the immersion more meaningful and successful. Lastly, to the <strong className="text-[#7b1113] dark:text-[#d4af37]">Almighty God</strong> who gave his endless guidance, wisdom, strength, protection, and blessing throughout the conduct of this event. Without this amazing Individual, Institution, and the guidance from Almighty God, the event will not be successful as it is.
            </p>

            {/* <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              The completion of the <strong className="text-[#7b1113] dark:text-[#d4af37]">M.A.K.A. E-Portfolio System</strong> stands as a testament to collective endeavor, shared passion, and unyielding support. We extend our deepest gratitude to the Almighty God for providing wisdom, strength, and grace throughout this transformative academic journey.
            </p>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              To our esteemed professors, administrative officers, and community partners in Gubat, Sorsogon: your guidance has shaped not only our instructional frameworks but also our personal commitment to embodying the core Filipino values of being Maka-Diyos, Maka-Tao, Maka-Kalikasan, and Maka-Bansa.
            </p> */}
          </div>
        </motion.section>

        {/* Officers / Teachers Cards Grid */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1113] dark:text-[#d4af37] block mb-2">
              Mentorship Panel
            </span>
            <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
              Esteemed Faculty & Advisers
            </h3>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <motion.div
                key={officer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-gradient-to-b from-white to-gray-50 dark:from-[#1a1515] dark:to-black rounded-xl p-6 border-t-4 border-t-[#7b1113] dark:border-t-[#d4af37] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#7b1113]/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-[#7b1113] dark:text-[#d4af37] mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                    {officer.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#d4af37] block mt-1 uppercase tracking-wider">
                    {officer.role}
                  </span>
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {officer.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 dark:border-gray-800 text-[10px] text-gray-400 uppercase tracking-widest">
                  {officer.university}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contributors Grid */}
        {/* <section className="mb-12">
          <div className="bg-[#580a0b] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent)]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <Sparkles className="w-8 h-8 text-[#f3e5ab] mx-auto mb-3 animate-spin-slow" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f3e5ab] mb-2">
                Collaborators & Supporting Units
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-8">
                Recognizing the active groups, classes, and administrative frameworks contributing directly to the Literacy Training Service initiatives.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                {contributors.map((contrib, i) => (
                  <motion.div
                    key={contrib}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-3.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-2.5 hover:bg-white/20 transition-colors"
                  >
                    <UserCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                      {contrib}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Thank You Footer Note */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400">
          <p className="italic font-serif">&ldquo;Maraming salamat sa inyong walang-sawang pagsuporta sa pangarap ng kabataang Pilipino.&rdquo;</p>
        </div>

      </div>
    </main>
  );
}
