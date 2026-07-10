"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning"
          accent="Signals"
          description="Certificate placeholders arranged for quick replacement with official credential details as they become available."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              className="rounded-lg border border-white/10 bg-[#0c0c10]/82 p-6 transition hover:-translate-y-1 hover:border-cyan-200/40"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-white/8 text-amber-200">
                {index % 2 === 0 ? <Award size={22} /> : <ShieldCheck size={22} />}
              </div>
              <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm font-semibold text-cyan-200">{certificate.issuer}</p>
              <p className="mt-4 leading-7 text-zinc-400">{certificate.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
