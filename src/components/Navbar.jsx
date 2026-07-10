"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navigationItems, profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navigationItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      activeSection === id
        ? "bg-white/10 text-white"
        : "text-zinc-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        isScrolled
          ? "border-b border-white/10 bg-[#050506]/78 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 items-center justify-between">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" aria-label="Tanmay.dev home">
          <span className="grid h-9 w-9 place-items-center rounded-md gradient-border text-sm font-bold text-white">
            TM
          </span>
          <span className="text-lg font-bold text-white">{profile.brand}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a key={item.id} href={item.href} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="button-shine ml-2 inline-flex items-center gap-2 rounded-md border border-cyan-300/40 bg-cyan-300/12 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/20 focus-ring"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="container-shell mb-3 rounded-lg border border-white/10 bg-[#0b0b0f]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={linkClass(item.id)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/40 bg-cyan-300/12 px-4 py-3 text-sm font-semibold text-cyan-50"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
