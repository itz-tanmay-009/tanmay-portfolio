"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/profile";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding bg-white/[0.015]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Internship"
          accent="Timeline"
          description="Professional practice focused on backend thinking, API workflows, testing habits, and reliable implementation."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/12 md:block" aria-hidden="true" />
          <div className="grid gap-5">
            {experiences.map((item, index) => (
              <motion.article
                key={item.role}
                className="relative rounded-lg border border-white/10 bg-[#0c0c10]/82 p-6 md:ml-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 place-items-center rounded-md border border-white/10 bg-[#0c0c10] text-cyan-100 md:grid">
                  <BriefcaseBusiness size={18} />
                </span>
                <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.summary}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <span key={highlight} className="inline-flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-emerald-200" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
