import { GraduationCap, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Builder With A"
          accent="Security Mindset"
          description="A portfolio shaped for software development, backend engineering, cybersecurity, and full stack opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-lg p-6 md:p-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-zinc-200">
                <GraduationCap size={16} className="text-cyan-200" />
                BCA Student
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-zinc-200">
                <MapPin size={16} className="text-emerald-200" />
                {profile.location}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Studying at {profile.university} and building toward real engineering impact.
            </h3>
            <p className="mt-5 leading-8 text-zinc-300">{profile.summary}</p>
            <p className="mt-4 leading-8 text-zinc-400">
              I like projects where application engineering meets systems thinking: clean APIs,
              structured data, reliable tooling, and security-aware decisions from the start.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {profile.passions.map((passion) => (
                <span
                  key={passion}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200"
                >
                  {passion}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.stats.map((stat, index) => (
              <div key={stat.label} className="gradient-border rounded-lg p-5">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-md bg-white/8 text-cyan-100">
                  {index % 2 === 0 ? <Sparkles size={20} /> : <ShieldCheck size={20} />}
                </div>
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
