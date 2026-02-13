const skillsByCategory = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  "Herramientas": ["Git", "GitHub", "VS Code", "Figma"],
  "Habilidades": ["Comunicación", "Trabajo en equipo", "Resolución de problemas"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#F5F5F5]">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-medium mb-3 text-[#1A1A1A] uppercase tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-[#E5E5E5] rounded-md text-sm text-[#6B6B6B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
