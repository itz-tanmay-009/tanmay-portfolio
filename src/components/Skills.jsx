import { Braces, Code2, Database, Server, ShieldCheck, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/profile";

const iconMap = {
  Programming: Code2,
  Frontend: Braces,
  Backend: Server,
  Database: Database,
  Cybersecurity: ShieldCheck,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding bg-white/[0.015]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I"
          accent="Work With"
          description="A practical stack for building application features, backend services, security tooling, and deployment-ready web experiences."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.title];
            return (
              <article key={group.title} className="group gradient-border rounded-lg p-6 transition hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-white/8 text-cyan-100 transition group-hover:bg-cyan-200 group-hover:text-zinc-950">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition group-hover:border-white/18"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
