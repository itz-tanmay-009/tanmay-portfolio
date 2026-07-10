"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 17) % 96}%`,
  top: `${10 + ((index * 23) % 76)}%`,
  delay: index * 0.18,
}));

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="soft-grid absolute inset-0" />
      <motion.div
        className="aurora-band absolute left-1/2 top-16 h-80 w-[64rem] -translate-x-1/2"
        animate={{ y: [0, 18, 0], opacity: [0.74, 0.95, 0.74] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-shape absolute right-[10%] top-28 h-16 w-16"
        animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-shape absolute bottom-24 left-[12%] h-20 w-20 opacity-70"
        animate={{ y: [0, 18, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="particle absolute"
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.18, 0.8, 0.18], y: [0, -12, 0] }}
          transition={{
            duration: 3.4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
