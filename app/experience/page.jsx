import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/experience/SkillBar";
import useCountUp from "../components/experience/useCountUp";
import StatsSection from "../components/experience/StatsSection";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  const tools = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
    { name: "TypeScript", level: 80, icon: "📘" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "FastAPI", level: 70, icon: "⚡" },
    { name: "PostgreSQL", level: 65, icon: "🐘" },
    { name: "Docker", level: 50, icon: "🐳" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      projectLink: "https://demo-ecommerce.com",
      githubLink: "https://github.com/username/ecommerce",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      projectLink: "https://taskapp-demo.com",
      githubLink: "https://github.com/username/taskapp",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      projectLink: "https://weather-dashboard.com",
      githubLink: "https://github.com/username/weather",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Blog CMS",
      description:
        "A headless CMS for blogs with markdown support, SEO optimization, and admin dashboard for content management.",
      projectLink: "https://blog-cms-demo.com",
      githubLink: "https://github.com/username/blog-cms",
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "MDX"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      projectLink: "https://portfolio-demo.com",
      githubLink: "https://github.com/username/portfolio",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with group messaging, file sharing, emoji support, and end-to-end encryption.",
      projectLink: "https://chat-app-demo.com",
      githubLink: "https://github.com/username/chat-app",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-[#8e1616]/30 -z-20 top-0 left-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] blur-[150px] bg-[#e8c899]/30 -z-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-[300px] bg-gradient-to-r from-[#8e1616]/20 to-[#e8c899]/20 -z-30"></div>

      <section className="px-4 py-16 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#e8c899] to-white bg-clip-text text-transparent">
            My Experience
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web
            technologies. I create scalable, user-friendly applications that
            solve real-world problems.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#8e1616] to-[#e8c899] bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <StatsSection />
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#8e1616] to-[#e8c899] bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <ExperienceTimeline />
        </div>

        {/* Tools & Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#8e1616] to-[#e8c899] bg-clip-text text-transparent">
              Tools & Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <SkillBar key={i} skill={tool} index={i} />
            ))}
          </div>
        </div>

        {/* Top Projects */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#8e1616] to-[#e8c899] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  projectLink={project.projectLink}
                  githubLink={project.githubLink}
                  technologies={project.technologies}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <button className="px-10 py-2 border-4 border-main-color bg-main-color text-white rounded-md cursor-pointer transition-all duration-300 active:scale-85">
            My CV
          </button>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Download Resume
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
