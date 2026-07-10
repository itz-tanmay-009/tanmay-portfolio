"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the message ready.");
    setForm(initialForm);
  };

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build"
          accent="Something Useful"
          description="Reach out for software development roles, backend internships, cybersecurity opportunities, or project collaboration."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  className="focus-ring rounded-md border border-white/10 bg-white/6 px-4 py-3 text-white placeholder:text-zinc-500"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  className="focus-ring rounded-md border border-white/10 bg-white/6 px-4 py-3 text-white placeholder:text-zinc-500"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-medium text-zinc-300">
              Subject
              <input
                required
                name="subject"
                value={form.subject}
                onChange={updateField}
                className="focus-ring rounded-md border border-white/10 bg-white/6 px-4 py-3 text-white placeholder:text-zinc-500"
                placeholder="Opportunity or project topic"
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-medium text-zinc-300">
              Message
              <textarea
                required
                name="message"
                value={form.message}
                onChange={updateField}
                rows={6}
                className="focus-ring resize-none rounded-md border border-white/10 bg-white/6 px-4 py-3 text-white placeholder:text-zinc-500"
                placeholder="Tell me about the role, project, or collaboration."
              />
            </label>
            <button
              type="submit"
              className="button-shine focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-300/45 bg-cyan-300/14 px-5 py-3 font-semibold text-cyan-50 transition hover:bg-cyan-300/22 sm:w-auto"
            >
              <Send size={18} />
              Send Message
            </button>
            {status ? <p className="mt-4 text-sm text-emerald-200">{status}</p> : null}
          </form>

          <div className="grid gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded-lg border border-white/10 bg-[#0c0c10]/82 p-5 transition hover:border-cyan-200/40"
            >
              <Mail className="mb-5 text-cyan-200" size={24} />
              <p className="font-semibold text-white">Email</p>
              <p className="mt-2 text-sm text-zinc-400">{profile.email}</p>
            </a>
            <a
              href="https://github.com/itz-tanmay-009"
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-lg border border-white/10 bg-[#0c0c10]/82 p-5 transition hover:border-cyan-200/40"
            >
              <FaGithub className="mb-5 text-cyan-200" size={24} />
              <p className="font-semibold text-white">GitHub</p>
              <p className="mt-2 text-sm text-zinc-400">Open source profile link</p>
            </a>
            <a
              href="https://www.linkedin.com/in/tanmay-ku-mallick-858405334"
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-lg border border-white/10 bg-[#0c0c10]/82 p-5 transition hover:border-cyan-200/40"
            >
              <FaLinkedin className="mb-5 text-cyan-200" size={24} />
              <p className="font-semibold text-white">LinkedIn</p>
              <p className="mt-2 text-sm text-zinc-400">Professional network profile link</p>
            </a>
            <div className="rounded-lg border border-white/10 bg-[#0c0c10]/82 p-5">
              <MapPin className="mb-5 text-emerald-200" size={24} />
              <p className="font-semibold text-white">Location</p>
              <p className="mt-2 text-sm text-zinc-400">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
