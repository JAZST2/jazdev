import type { Skill } from "@/domain/entities/skill";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="border-y border-white/10 bg-neutral-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Tech Stack</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-400">
            Tools and technologies I use to build resilient products.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-3xl border border-white/10 bg-neutral-900 p-6 text-center transition hover:border-orange-500/40"
            >
              <p className={`text-lg font-semibold ${skill.colorClass}`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
