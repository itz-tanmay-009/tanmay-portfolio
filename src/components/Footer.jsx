"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data/profile";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  email: Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050506] py-8">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">{profile.brand}</p>
          <p className="mt-2 text-sm text-zinc-500">
            Copyright 2026 {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.kind];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-cyan-200/50 hover:text-white"
              >
                <Icon size={18} />
              </a>
            );
          })}
          <button
            type="button"
            aria-label="Back to top"
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-cyan-300/40 bg-cyan-300/12 text-cyan-50 transition hover:bg-cyan-300/20"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
