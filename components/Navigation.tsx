"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "/work", num: "01", label: "Selected Work", count: "07 Case Studies" },
  { href: "/achievements", num: "02", label: "Achievements", count: "Top 3% Global" },
  { href: "/experiments", num: "03", label: "Experiments", count: "Research Notebook" },
  { href: "/archive", num: "04", label: "Archive", count: "17 Repos & Projects" },
  { href: "/about", num: "05", label: "About", count: "Philosophy & Systems" },
  { href: "/notes", num: "06", label: "Notes", count: "Field Observations" },
  { href: "/contact", num: "07", label: "Contact", count: "Encrypted & Direct" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [istTime, setIstTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setIstTime(
        ist.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when overlay open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-paper text-ink">
        <div className="container-editorial section-pad py-3.5 md:py-4 flex justify-between items-center">
          {/* Top-Left: CJ/ */}
          <div className="flex items-baseline gap-3">
            <Link
              href="/"
              className="font-bold tracking-tighter text-[22px] md:text-2xl hover:text-signal-red transition-colors leading-none"
            >
              CJ/
            </Link>
            <span className="hidden sm:inline-block font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase">
              [SYS.ENG · KERALA]
            </span>
          </div>

          {/* Top-Right: INDEX button */}
          <div className="flex items-center gap-3 md:gap-5">
            <span className="hidden md:inline-block font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
              {istTime || "KERALA, IN"} — 09°58′N 76°31′E
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center justify-center gap-2.5 font-mono text-[12px] md:text-[13px] tracking-[0.14em] uppercase py-2.5 px-3.5 min-h-[44px] min-w-[44px] border border-line hover:border-ink hover:bg-ink hover:text-paper transition-all bg-paper"
              aria-label={isOpen ? "Close Navigation Index" : "Open Navigation Index"}
              aria-expanded={isOpen}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isOpen ? "bg-signal-red" : "bg-ink group-hover:bg-signal-red group-hover:bg-paper"
                }`}
              />
              <span>{isOpen ? "CLOSE [X]" : "INDEX"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Composition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col p-0 overflow-hidden"
          >
            {/* Top bar inside overlay */}
            <div className="border-b border-paper/10">
              <div className="container-editorial section-pad py-3.5 md:py-4 flex justify-between items-center">
                <Link href="/" onClick={() => setIsOpen(false)} className="font-bold tracking-tighter text-[22px] text-paper">
                  CJ/
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 font-mono text-[12px] tracking-[0.14em] uppercase py-2.5 px-3.5 min-h-[44px] min-w-[44px] border border-paper/20 hover:border-paper hover:bg-paper hover:text-ink transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-red" />
                  CLOSE [X]
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col">
              <div className="container-editorial section-pad flex-1 flex flex-col">
                {/* Top Index Header Metadata */}
                <div className="border-b border-paper/10 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
                  <div>
                    <span className="meta-mono-sm text-paper/40 block mb-2">SYSTEM DIRECTORY // 2026</span>
                    <h2 className="text-[18px] md:text-2xl font-bold tracking-tight uppercase text-paper">
                      Christopher Joshy — Index
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 md:gap-8 font-mono text-[11px] text-paper/60">
                    <div>
                      <span className="text-paper/30 block text-[10px] tracking-[0.12em] uppercase mb-0.5">LOCATION</span>
                      <span className="text-paper/90">9.9816° N, 76.2999° E</span>
                    </div>
                    <div>
                      <span className="text-paper/30 block text-[10px] tracking-[0.12em] uppercase mb-0.5">TIME</span>
                      <span className="text-paper/90">{istTime}</span>
                    </div>
                    <div>
                      <span className="text-paper/30 block text-[10px] tracking-[0.12em] uppercase mb-0.5">ROLE</span>
                      <span className="text-paper">Nexus Tech Lead</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Routes List */}
                <nav className="my-auto py-8 md:py-12">
                  <ul className="space-y-1 md:space-y-2">
                    {NAV_ITEMS.map((item, idx) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-baseline justify-between py-3 md:py-4 border-b border-paper/10 hover:border-paper/25 transition-colors"
                          >
                            <div className="flex items-baseline gap-4 md:gap-8">
                              <span
                                className={`font-mono text-[11px] md:text-[13px] tracking-[0.14em] ${
                                  isActive ? "text-signal-red font-bold" : "text-paper/40 group-hover:text-signal-red"
                                } transition-colors`}
                              >
                                {item.num}
                              </span>
                              <span
                                className={`text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase transition-all duration-300 group-hover:translate-x-1.5 ${
                                  isActive ? "text-signal-red" : "text-paper group-hover:text-paper"
                                }`}
                              >
                                {item.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 md:gap-5 shrink-0">
                              <span className="hidden sm:inline-block font-mono text-[11px] md:text-xs text-paper/35 tracking-wider group-hover:text-paper/60 transition-colors">
                                {item.count}
                              </span>
                              <span
                                className={`text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1 ${
                                  isActive ? "text-signal-red" : "text-paper/35 group-hover:text-paper"
                                }`}
                              >
                                →
                              </span>
                            </div>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Bottom Footer Metadata in Index */}
                <div className="border-t border-paper/10 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[11px] tracking-wide text-paper/50">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse shrink-0" />
                    <span className="uppercase tracking-[0.1em]">PRIMARY: AI / SYSTEMS / SECURITY / OPEN SOURCE</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-5 md:gap-6">
                    <a
                      href="https://github.com/ChristopherJoshy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-paper transition-colors underline decoration-paper/20 underline-offset-4 hover:decoration-paper/60"
                    >
                      GITHUB ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/in/christopher-joshy-272a77290/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-paper transition-colors underline decoration-paper/20 underline-offset-4 hover:decoration-paper/60"
                    >
                      LINKEDIN ↗
                    </a>
                    <a href="mailto:christopherjoshy4@gmail.com" className="hover:text-paper transition-colors underline decoration-paper/20 underline-offset-4 hover:decoration-paper/60">
                      EMAIL ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
