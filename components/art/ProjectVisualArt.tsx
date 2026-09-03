"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AnchorArt } from "./AnchorArt";
import { ChadmanArt } from "./ChadmanArt";
import { AivaArt } from "./AivaArt";
import { SahayiArt } from "./SahayiArt";
import { VoiceShieldArt } from "./VoiceShieldArt";
import { GhostDepsArt } from "./GhostDepsArt";
import { JosanshiArt } from "./JosanshiArt";
import { TypeloArt } from "./TypeloArt";
import { ChrisCodeArt } from "./ChrisCodeArt";
import { NexusWarsArt } from "./NexusWarsArt";
import { ForgeArt } from "./ForgeArt";
import { CampusPulseArt } from "./CampusPulseArt";
import { OrixArt } from "./OrixArt";
import { AcpiaArt } from "./AcpiaArt";
import { AuraArt } from "./AuraArt";
import { ZShooterArt } from "./ZShooterArt";
import { WikiRunAIArt } from "./WikiRunAIArt";
import { NeerNadiArt } from "./NeerNadiArt";

interface ProjectVisualArtProps {
  slug: string;
}

const CROP_EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectVisualArt({ slug }: ProjectVisualArtProps) {
  const renderArt = () => {
    switch (slug) {
      case "anchor":
        return <AnchorArt />;
      case "chadman":
        return <ChadmanArt />;
      case "ghost-deps":
        return <GhostDepsArt />;
      case "typelo":
        return <TypeloArt />;
      case "chris-code":
        return <ChrisCodeArt />;
      case "nexus-wars":
        return <NexusWarsArt />;
      case "forge":
        return <ForgeArt />;
      case "campuspulse":
        return <CampusPulseArt />;
      case "orix":
        return <OrixArt />;
      case "acpia":
        return <AcpiaArt />;
      case "aura":
        return <AuraArt />;
      case "aiva":
        return <AivaArt />;
      case "sahayi":
        return <SahayiArt />;
      case "voiceshield":
        return <VoiceShieldArt />;
      case "z-shooter":
        return <ZShooterArt />;
      case "wikirunai":
        return <WikiRunAIArt />;
      case "neernadi":
        return <NeerNadiArt />;
      case "josanshi":
      default:
        return <JosanshiArt />;
    }
  };

  return (
    <div className="w-full h-full min-h-[360px] lg:min-h-[420px] relative overflow-hidden bg-paper-tint border border-ink/15">
      <AnimatePresence mode="wait">
        <motion.div
          key={slug}
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
          transition={{ duration: 0.52, ease: CROP_EASE }}
          className="w-full h-full"
        >
          {renderArt()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
