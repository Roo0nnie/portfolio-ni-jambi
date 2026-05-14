import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { StudentProfileSection } from "@/components/student-profile/StudentProfileSection";
import { PrefaceSection } from "@/components/preface/PrefaceSection";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <StudentProfileSection />
      <PrefaceSection />
    </main>
  );
}
