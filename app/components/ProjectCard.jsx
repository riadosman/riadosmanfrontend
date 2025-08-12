"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  const [showFullText, setShowFullText] = useState(false);
  function truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="min-h-[380px] max-w-[373px] p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm hover:shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
      <Image
        src={project.image}
        alt="Service 1"
        className="h-44 rounded-2xl object-cover"
        width={500}
        height={500}
      />
      <p className="text-2xl font-bold mt-4">{project.title}</p>
      <p className="text-sm my-3">
        {showFullText
          ? project.description
          : truncateText(project.description, 100)}
        {project.description.length > 100 && (
          <span
            className="text-main-secondary-color"
            onClick={() => {
              setShowFullText(!showFullText);
            }}
          >
            {showFullText ? "Show Less" : "Show More"}
          </span>
        )}
      </p>
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
