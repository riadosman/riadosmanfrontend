export default function FAQs() {
  return (
    <div className="relative w-full min-h-screen px-6 py-20  text-white max-w-6xl mx-auto mt-24 px-6 opacity-0 animate-fade-in-up delay-800">
      {/* Glowing Background */}
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-[#8e1616] -z-20 top-0 left-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] blur-[150px] bg-[#e8c899] -z-20"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-300">
        {[
          {
            question: "How long does it take to develop a website?",
            answer:
              "It depends on the complexity. Basic websites may take 1–2 weeks, while custom platforms with dashboards or integrations can take 4–8 weeks.",
          },
          {
            question: "Will my website be mobile-friendly?",
            answer:
              "Yes, all websites are fully responsive and designed to work smoothly across desktops, tablets, and smartphones.",
          },
          {
            question: "Is SEO included in the development?",
            answer:
              "Yes. I apply SEO best practices, including meta tags, proper heading structure, fast loading speed, and semantic HTML to improve search visibility.",
          },
          {
            question: "Can I update content on my own?",
            answer:
              "Definitely. I can use a CMS like WordPress or build a custom admin panel so you can manage your content easily — no coding needed.",
          },
          {
            question: "What technologies do you use?",
            answer:
              "I use modern technologies like React, Next.js, Tailwind CSS, Node.js, Firebase, and CMS tools, depending on project needs.",
          },
          {
            question: "Do you offer ongoing maintenance?",
            answer:
              "Yes. I provide support and maintenance packages for updates, security patches, backups, and performance monitoring.",
          },
          {
            question: "How much does a website cost?",
            answer:
              "Pricing depends on your goals, number of pages, features, and integrations. Custom quotes are provided after reviewing your needs.",
          },
          {
            question: "Will the website load fast?",
            answer:
              "Yes. I optimize every site for performance using lazy loading, asset compression, CDN integration, and clean code architecture.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-white/20 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.question}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
