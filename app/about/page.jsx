import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaCode,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default async function About() {
  const res = await fetch("http://localhost:3000/api/languages");
  const data = await res.json();

  // Mock data for schools - replace with your actual data
  const schools = [
    {
      name: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2019 - 2023",
      location: "Istanbul, Turkey",
      gpa: "3.8/4.0",
      description:
        "Focused on software engineering, algorithms, and web development. Graduated with honors.",
    },
    {
      name: "Technical High School",
      degree: "Information Technology Diploma",
      period: "2015 - 2019",
      location: "Istanbul, Turkey",
      gpa: "4.2/5.0",
      description:
        "Specialized in programming fundamentals and computer networks.",
    },
  ];

  // Mock data for certificates - replace with your actual data
  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SAA-2024-001",
      description: "Advanced cloud architecture and deployment strategies",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-2023-456",
      description: "Advanced React development patterns and best practices",
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-FSWD-2023-789",
      description:
        "Complete web development stack including frontend and backend",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-JSADS-2022-123",
      description: "Advanced JavaScript programming and algorithmic thinking",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL"],
    },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Git"] },
    { category: "Mobile", items: ["React Native", "Flutter"] },
  ];

  const achievements = [
    {
      title: "Best Innovation Award",
      organization: "Tech Conference 2024",
      description: "Awarded for developing an AI-powered web application",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Active contributor to popular React and Node.js projects",
    },
    {
      title: "Hackathon Winner",
      organization: "Istanbul Tech Hackathon",
      description: "First place in 48-hour coding competition",
    },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Effects */}
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-main-color -z-20 top-0 left-0"></div>
      <div className="absolute bottom-0 right-2 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color -z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] blur-[150px] bg-purple-500/20 -z-20"></div>

      <div className="px-8 py-20 h-fit w-full  -z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">About Me!</h1>
          <p className="text-xl text-main-primary-color max-w-3xl mx-auto">
            Passionate developer dedicated to creating innovative solutions and
            building meaningful digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Languages and Personal Info Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-3xl text-blue-500" />
                <h2 className="text-3xl font-bold">My Languages</h2>
              </div>
              <div className="flex flex-col gap-4">
                {data.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold text-white">
                        {lang.name}
                      </p>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium">
                        {lang.proficiency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <FaLightbulb className="text-3xl text-yellow-500" />
                <h2 className="text-3xl font-bold">My Values & Goals</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                <p className="text-lg leading-relaxed">
                  I am a passionate developer who values creativity, innovation,
                  and continuous learning. My goal is to create impactful
                  applications that enhance user experience and solve real-world
                  problems. I believe in the power of technology to transform
                  lives and am committed to contributing positively to the tech
                  community.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaCode className="text-3xl text-green-500" />
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-3xl text-purple-500" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {schools.map((school, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {school.name}
                      </h3>
                      <p className="text-lg font-semibold text-blue-200 mb-2">
                        {school.degree}
                      </p>
                      <p className="text-gray-300 mb-2">{school.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt />
                          <span>{school.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt />
                          <span>{school.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaAward />
                          <span>GPA: {school.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaCertificate className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-bold">Certificates & Credentials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg">
                      <FaCertificate className="text-orange-400 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-blue-200 font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-300 text-sm mb-3">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                        <span>Issued: {cert.date}</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaAward className="text-3xl text-yellow-500" />
              <h2 className="text-3xl font-bold">Achievements & Recognition</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FaAward className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-200 font-semibold mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News and Contact Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <FaUsers className="text-3xl text-indigo-500" />
                <h2 className="text-3xl font-bold">Latest News</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                <p className="text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur quam, ratione dolor magnam obcaecati explicabo
                  laboriosam neque fugit ad suscipit dolores eos labore
                  molestiae natus! Iure voluptas totam sint labore ipsum,
                  aperiam nesciunt consequuntur{" "}
                  <span className="font-bold text-black">omnis</span> omnis
                  eaque quibusdam reiciendis distinctio, quod obcaecati odit
                  architecto quas nulla nihil vitae dignissimos, nostrum iste.
                  Lorem ipsum{" "}
                  <span className="font-bold text-black">dolor</span> sit amet
                  consectetur adipisicing elit. Consequatur quam, ratione dolor
                  magnam obcaecati explicabo laboriosam neque fugit ad suscipit
                  dolores eos labore molestiae natus! Iure voluptas totam sint
                  labore ipsum, aperiam nesciunt consequuntur omnis eaque
                  quibusdam reiciendis distinctio, quod obcaecati odit
                  architecto quas nulla nihil vitae dignissimos, nostrum iste.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <FaUsers className="text-3xl text-pink-500" />
                <h2 className="text-3xl font-bold">Let's Connect</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                <p className="text-lg mb-6 text-gray-300">
                  I'm always open to discussing new opportunities,
                  collaborations, or just having a chat about technology and
                  innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.facebook.com"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebook size={24} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.instagram.com"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.github.com"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.twitter.com"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaXTwitter size={24} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.linkedin.com"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
