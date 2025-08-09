import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/experience/SkillBar";
import useCountUp from "../components/experience/useCountUp";
import StatsSection from "../components/experience/StatsSection";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

export default async function ExperiencePage() {
  const tools = [
    { name: "React", level: 90, icon: "⚛️" }, // مناسبة جداً
    { name: "Next.js", level: 85, icon: "⏭️" }, // سهم "التالي"
    { name: "Express.js", level: 90, icon: "🚂" }, // يعبر عن "السيرفر السريع"
    { name: "Tailwind CSS", level: 95, icon: "🌬️" }, // "ريح" = Tailwind
    { name: "Node.js", level: 90, icon: "🌳" }, // شجرة = node
    { name: "MongoDB", level: 90, icon: "🍃" }, // شعار MongoDB الفعلي ورقي
    { name: "GIT/GITHUB", level: 80, icon: "🔧" }, // أداة برمجة / أو استخدم 🐙 لجيت هب
    { name: "Mongoose", level: 60, icon: "🐍" }, // مكتبة ODM للـMongoDB، رمز الأفعى مناسب
    { name: "Docker", level: 50, icon: "🐳" }, // رسمياً رمز Docker
    { name: "Figma", level: 40, icon: "🎨" }, // رمز التصميم مناسب
    { name: "TypeScript", level: 30, icon: "📘" }, // كتاب أزرق = TypeScript
    { name: "N8N", level: 30, icon: "🔗" }, // "ربط العمليات"
    { name: "Socket.io", level: 20, icon: "📡" }, // البث والتواصل
    { name: "Shadcn UI", level: 40, icon: "🧩" }, // مكتبة واجهات = قطع UI
  ];

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
  const projects = await res.json();

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
                <ProjectCard project={project} />
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
          <Link
            href="/Cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-main-color bg-main-color text-white rounded-md cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-main-color active:scale-95"
          >
            My CV
          </Link>
        </div>
      </section>
    </div>
  );
}
