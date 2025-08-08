"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm hover:shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
      <Image
        src="/front-end-project.webp"
        alt="Service 1"
        className="h-44 rounded-2xl object-cover"
        width={500}
        height={500}
      />
      <p className="text-2xl font-bold mt-4">{project.title}</p>
      <p className="text-sm my-3">{project.description}</p>
      {project.livelink && (
        <Link
          href={project.livelink || "/"}
          target="_blank"
          className="cursor-pointer text-main-secondary-color font-bold  hover:underline mr-2 duration-500"
        >
          Project Link
        </Link>
      )}
      <Link
        href={project.githublink || "/"}
        target="_blank"
        className="cursor-pointer text-main-secondary-color font-bold  hover:underline duration-500"
      >
        Github Link
      </Link>
    </div>
  );
}

export default ProjectCard;
