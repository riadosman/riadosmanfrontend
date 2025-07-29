export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud solutions.",
      technologies: ["React", "Next.js", "TypeScript", "AWS", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects, implemented responsive designs, and optimized application performance.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description:
        "Built modern, responsive user interfaces and collaborated with design teams to implement pixel-perfect designs.",
      technologies: ["React", "JavaScript", "CSS3", "Figma"],
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8e1616] to-[#e8c899]"></div>
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-12 pb-12 last:pb-0">
          <div className="absolute left-2 w-4 h-4 bg-[#8e1616] rounded-full border-4 border-gray-900 shadow-lg"></div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <span className="text-sm text-[#e8c899] font-semibold">
                {exp.period}
              </span>
            </div>
            <h4 className="text-lg text-gray-300 mb-3">{exp.company}</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#8e1616]/20 border border-[#8e1616]/30 text-[#e8c899] text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
