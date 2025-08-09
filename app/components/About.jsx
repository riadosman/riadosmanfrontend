import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default async function About() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/languages`);
  const data = await res.json();

  return (
    <div className="relative w-full">
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-main-color -z-20"></div>
      <div className="absolute bottom-0 right-2 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color -z-20"></div>
      <div className="mt-24 px-8 py-20 h-fit w-full bg-white/30 -z-10">
        <h1 className="text-6xl font-bold">About Me!</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
          <div className="flex-1">
            <p className="mb-10 text-3xl font-bold">My languages</p>
            <div className="flex flex-col gap-4">
              {data.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
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
            <p className="my-10 md:my-8 text-3xl font-bold">
              My Values & Goals
            </p>
            <div>
              <p className="text-lg">
                I am a passionate developer who values creativity, innovation,
                and continuous learning. My goal is to create impactful
                applications that enhance user experience and solve real-world
                problems. I believe in the power of technology to transform
                lives and am committed to contributing positively to the tech
                community.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="mb-10 text-3xl font-bold">Last News !</h1>
            <p>
              I am currently a software engineering student at Gedik University
              in Istanbul, and I’m working as an intern at 180 Degree Company. I
              have worked on many projects with the company, mainly websites
              featuring AI integration and SaaS ideas. I share my projects on
              LinkedIn—you’re welcome to check them out. In my free time, I love
              learning new things, such as personal finance management and
              exploring AI tools with today’s technologies. I try to embrace
              these technologies rather than avoid or fear them. During the busy
              and crowded transportation rides in Istanbul, I make it a point to
              read new books. I enjoy self-improvement, money management, and
              Islamic books.
            </p>
            <div className="mt-10">
              <h1 className="mb-10 text-3xl font-bold">My Social :</h1>
              <div className="flex flex-row gap-4 flex-wrap">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/riyad.osman.35/"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/riad_osman__developer/"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/riadosman"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/Rmagic19649744"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaXTwitter size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/riad-osman-b54343226/"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaLinkedinIn size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UC_U4hWaqh7jEHpUVyU4VbxA"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
