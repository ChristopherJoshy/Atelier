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
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(now.toLocaleTimeString("en-GB", options) + " IST");
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
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
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
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-paper/90 backdrop-blur-md border-b border-ink/10 text-ink">
        {/* Top-Left: CJ/ */}
        <div className="flex items-baseline gap-3">
          <Link
            href="/"
            className="font-bold tracking-tighter text-xl md:text-2xl hover:text-signal-red transition-colors"
          >
            CJ/
          </Link>
          <span className="hidden sm:inline-block font-mono text-[0.65rem] tracking-widest text-ink-muted uppercase">
            [SYS.ENG · KERALA]
          </span>
        </div>

        {/* Top-Right: INDEX button */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block font-mono text-[0.65rem] tracking-widest text-ink-faint uppercase">
            {istTime || "KERALA, IN"}
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest uppercase py-1.5 px-3 border border-ink/30 hover:border-ink transition-all bg-paper shadow-sm"
            aria-label={isOpen ? "Close Navigation Index" : "Open Navigation Index"}
            aria-expanded={isOpen}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                isOpen ? "bg-signal-red" : "bg-ink group-hover:bg-signal-red"
              }`}
            />
            <span>{isOpen ? "CLOSE [X]" : "INDEX"}</span>
          </button>
        </div>
      </header>

      {/* Full-Screen Navigation Composition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-50 bg-ink text-paper flex flex-col justify-between p-6 md:p-14 overflow-y-auto"
          >
            {/* Top Index Header Metadata */}
            <div className="border-b border-paper/15 pb-6 pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="meta-mono-sm text-paper/40 block mb-1">SYSTEM DIRECTORY // 2026</span>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
                  Christopher Joshy — Index
                </h2>
              </div>
              <div className="flex items-center gap-8 font-mono text-xs text-paper/60">
                <div>
                  <span className="text-paper/30 block text-[0.6rem]">LOCATION</span>
                  <span>9.9816° N, 76.2999° E</span>
                </div>
                <div>
                  <span className="text-paper/30 block text-[0.6rem]">TIME</span>
                  <span>{istTime}</span>
                </div>
                <div>
                  <span className="text-paper/30 block text-[0.6rem]">ROLE</span>
                  <span className="text-paper">Nexus Tech Lead</span>
                </div>
              </div>
            </div>

            {/* Navigation Routes List */}
            <nav className="my-auto py-10">
              <ul className="space-y-3 md:space-y-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline justify-between py-2 border-b border-paper/10 hover:border-paper/40 transition-colors"
                      >
                        <div className="flex items-baseline gap-4 md:gap-8">
                          <span className={`font-mono text-xs md:text-sm tracking-widest ${isActive ? "text-signal-red font-bold" : "text-paper/40 group-hover:text-signal-red"} transition-colors`}>
                            {item.num}
                          </span>
                          <span className={`text-2xl sm:text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-transform group-hover:translate-x-2 duration-300 ${isActive ? "text-signal-red" : "text-paper"}`}>
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="hidden sm:inline-block font-mono text-xs text-paper/40 tracking-wider">
                            {item.count}
                          </span>
                          <span className={`text-base md:text-xl transition-transform group-hover:translate-x-1 ${isActive ? "text-signal-red" : "text-paper/40 group-hover:text-paper"}`}>
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
            <div className="border-t border-paper/15 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-paper/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
                <span>PRIMARY: AI / SYSTEMS / SECURITY / OPEN SOURCE</span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://github.com/ChristopherJoshy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-joshy-272a77290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="mailto:christopherjoshy4@gmail.com"
                  className="hover:text-paper transition-colors"
                >
                  EMAIL ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
