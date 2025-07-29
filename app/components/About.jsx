import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quam, ratione dolor magnam obcaecati explicabo
              laboriosam neque fugit ad suscipit dolores eos labore molestiae
              natus! Iure voluptas totam sint labore ipsum, aperiam nesciunt
              consequuntur <span className="font-bold text-black ">omnis</span>{" "}
              omnis eaque quibusdam reiciendis distinctio, quod obcaecati odit
              architecto quas nulla nihil vitae dignissimos, nostrum iste. Lorem
              ipsum <span className="font-bold text-black ">dolor</span> sit
              amet consectetur adipisicing elit. Consequatur quam, ratione dolor
              magnam obcaecati explicabo laboriosam neque fugit ad suscipit
              dolores eos labore molestiae natus! Iure voluptas totam sint
              labore ipsum, aperiam nesciunt consequuntur omnis eaque quibusdam
              reiciendis distinctio, quod obcaecati odit architecto quas nulla
              nihil vitae dignissimos, nostrum iste.
            </p>
            <div className="mt-10">
              <h1 className="mb-10 text-3xl font-bold">Contact :</h1>
              <div className="flex flex-row gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.facebook.com"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.facebook.com"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.facebook.com"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.facebook.com"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaXTwitter size={24} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.facebook.com"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg"
                >
                  <FaLinkedinIn size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
