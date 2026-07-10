"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <motion.p
        className="mb-3 text-sm font-semibold uppercase text-cyan-200"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="text-3xl font-bold text-white md:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        {title} <span className="gradient-text">{accent}</span>
      </motion.h2>
      <motion.p
        className="mt-5 text-base leading-7 text-zinc-400 md:text-lg"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        {description}
      </motion.p>
    </div>
  );
}
