"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WebDevelopmentService() {
  return (
    <div className="relative w-full min-h-screen px-6 py-20  text-white">
      {/* Glowing Background */}
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-[#8e1616] -z-20 top-0 left-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] blur-[150px] bg-[#e8c899] -z-20"></div>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* SEO Title */}
        <div className="text-center opacity-0 animate-fade-in-down">
          <h1 className="text-5xl font-bold mb-4">Web Development Services</h1>
          <p className="text-[#f8eddf] text-xl">
            Professional and custom-built websites optimized for performance,
            SEO, and scalability — tailored for startups, creators, and modern
            businesses.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-up delay-300">
          {[
            "Responsive Design",
            "SEO Optimized",
            "Performance Focused",
            "Admin Dashboard",
            "Authentication + Authorization",
            "Integrations & APIs",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <FaCheckCircle className="text-green-400 text-xl mt-1" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="text-center max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Why Work With Me?</h2>
          <p className="text-gray-300 mb-6">
            Every website I create is built from the ground up to reflect your
            unique vision and business goals. You’ll get clean code, responsive
            layouts, excellent performance, and SEO best practices baked in from
            the start.
          </p>
        </div>

        {/* Split Form & Guidance */}
        <div className="flex flex-col lg:flex-row gap-12 bg-white/5 rounded-xl p-8 max-w-6xl mx-auto border border-white/10 opacity-0 animate-fade-in-up delay-700">
          {/* Form Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Request a Custom Quote
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-main-secondary-color"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-main-secondary-color"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium mb-2"
                >
                  Project Type
                </label>
                <input
                  type="text"
                  id="projectType"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-main-secondary-color"
                  placeholder="e.g. Portfolio, Blog, Store, Dashboard..."
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium mb-2"
                >
                  Project Description
                </label>
                <textarea
                  id="details"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-main-secondary-color"
                  placeholder="Mention your business goals, features you need, design inspirations, deadline, and budget if available."
                ></textarea>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="bg-[#8e1616] hover:bg-[#e8c899] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:text-black"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Guidance Section */}
          <div className="flex-1 text-sm text-gray-300 space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Need assistance crafting a clear project description?
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                What type of website are you aiming to build (e.g., portfolio,
                e-commerce, blog, etc.)?
              </li>
              <li>
                Do you have any design inspirations or reference websites you'd
                like to emulate?
              </li>
              <li>
                What core features are required (e.g., contact form, user
                authentication, admin panel)?
              </li>
              <li>
                Are there any specific deadlines or launch dates to consider?
              </li>
              <li>
                Do you have a preferred technology stack or platform in mind?
              </li>
              <li>What is your estimated budget for this project?</li>
            </ul>
            <p>
              Providing a detailed and well-structured project description will
              help ensure your requirements are fully understood, allowing me to
              deliver an accurate proposal with clear expectations.
            </p>
          </div>
        </div>
        {/* Freelancer Collaboration PDF Section */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-600">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Collaborating with Me as a Freelancer?
          </h2>
          <p className="text-gray-300 mb-6">
            If you're looking to team up on web projects or need a reliable
            developer for freelance work, you can download my detailed service
            brochure. It includes my working process, collaboration terms, and
            previous project examples.
          </p>
          <a
            href="/freelancer-profile.pdf" // Replace with your actual PDF path
            download
            className="inline-block bg-[#e8c899] text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#8e1616] hover:text-white transition-all duration-300"
          >
            Download Freelancer Profile (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
