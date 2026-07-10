"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected"
          accent="Builds"
          description="Project cards shaped around backend development, cybersecurity tooling, practical applications, and problem-solving foundations."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#0c0c10]/82 shadow-2xl shadow-black/18"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-56 overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={`${project.title} visual placeholder`}
                  width={760}
                  height={420}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/8"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button-shine focus-ring inline-flex items-center gap-2 rounded-md border border-emerald-300/40 bg-emerald-300/12 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-300/20"
                  >
                    <ExternalLink size={16} />
                    {project.demoLabel ?? "Live Demo"}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
