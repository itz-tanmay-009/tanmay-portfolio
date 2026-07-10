"use client";

import { motion } from "framer-motion";
import { Languages, LineChart } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { githubHighlights } from "@/data/profile";

const cells = Array.from({ length: 182 }, (_, index) => {
  const level = (index * 7 + Math.floor(index / 6)) % 5;
  return level;
});

const icons = [FaGithub, LineChart, Languages];

export default function GitHubShowcase() {
  return (
    <AnimatedSection id="github" className="section-padding bg-white/[0.015]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="GitHub"
          title="Code Activity"
          accent="Snapshot"
          description="Local placeholders for contribution history, repository statistics, and top language highlights."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Contribution Graph</h3>
                <p className="mt-1 text-sm text-zinc-400">A visual placeholder for GitHub activity.</p>
              </div>
              <FaGithub className="text-cyan-200" size={24} />
            </div>
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1 overflow-hidden">
              {cells.map((level, index) => (
                <motion.span
                  key={`${level}-${index}`}
                  className="contribution-cell"
                  data-level={level}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.003 }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {githubHighlights.map((item, index) => {
              const Icon = icons[index] ?? FaGithub;
              return (
                <div key={item.label} className="gradient-border rounded-lg p-5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-white/8 text-cyan-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
