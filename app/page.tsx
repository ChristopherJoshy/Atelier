"use client";

import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { AchievementsSpotlight } from "@/components/AchievementsSpotlight";
import { ExperimentsSpotlight } from "@/components/ExperimentsSpotlight";
import { ArchiveSpotlight } from "@/components/ArchiveSpotlight";
import { AboutSpotlight } from "@/components/AboutSpotlight";
import { EditorialEnding } from "@/components/EditorialEnding";

export default function HomePage() {
  const scrollToWork = () => {
    const workSection = document.getElementById("selected-work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink relative">
      {/* 01. Editorial Poster Hero */}
      <Hero onScrollToWork={scrollToWork} />

      {/* 02. Selected Work (Interactive Vector Art Installation & Index) */}
      <SelectedWork />

      {/* 03. Key Benchmark Achievements */}
      <AchievementsSpotlight />

      {/* 04. Engineering Research Notebook */}
      <ExperimentsSpotlight />

      {/* 05. Comprehensive Systems Archive */}
      <ArchiveSpotlight />

      {/* 06. Systems Philosophy & Engineering Pillars */}
      <AboutSpotlight />

      {/* 07. Inverted Dramatic Monograph Ending */}
      <EditorialEnding />
    </div>
  );
}
