"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import BackgroundEffects from "@/components/BackgroundEffects";
import { profile } from "@/data/profile";
import { useTypingText } from "@/hooks/useTypingText";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  email: Mail,
};

export default function Hero() {
  const typedRole = useTypingText(profile.roles);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <BackgroundEffects />
      <div className="container-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-cyan-100 backdrop-blur"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={16} className="text-amber-200" />
            Available for internships and developer roles
          </motion.div>

          <p className="mb-3 text-lg font-semibold text-cyan-200">Hello, I&apos;m</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white md:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-5 flex min-h-10 items-center text-2xl font-semibold text-zinc-200 md:text-3xl">
            <span className="gradient-text">{typedRole}</span>
            <span className="ml-1 h-8 w-[2px] animate-pulse bg-cyan-200" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            {profile.intro} The work here is aimed at recruiters hiring software developers,
            backend developers, cybersecurity interns, and full stack developers.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="button-shine focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/45 bg-cyan-300/14 px-5 py-3 font-semibold text-cyan-50 transition hover:bg-cyan-300/22"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/6 px-5 py-3 font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/12 px-5 py-3 font-semibold text-white transition hover:border-emerald-200/50 hover:bg-white/8"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
            {profile.socials.map((social) => {
              const Icon = socialIconMap[social.kind];
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/6 text-zinc-200 transition hover:border-cyan-200/50 hover:text-white"
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-full border border-white/10 bg-white/5 blur-xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-full gradient-border p-2">
            <Image
              src="/assets/profile-photo-clear.jpg"
              alt="Tanmay Kumar Mallick profile photo"
              width={1000}
              height={1000}
              quality={100}
              priority
              className="aspect-square w-full rounded-full object-cover object-center"
            />
          </div>
          <motion.div
            className="absolute -bottom-5 left-5 rounded-lg border border-white/10 bg-[#0b0b0f]/90 px-4 py-3 shadow-2xl backdrop-blur"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-zinc-400">Focus</p>
            <p className="font-semibold text-white">Backend + Cybersecurity</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
