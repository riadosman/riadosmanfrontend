import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

function TopProjects() {
  return (
    <div className="p-8 flex items-center flex-col justify-center">
      <h1 className="text-6xl font-bold my-10">Top Projects</h1>
      <div className="flex items-center flex-col md:flex-row justify-between gap-10 my-10">
        <ProjectCard
          title="Service 1"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          projectLink="/"
          githubLink="/"
        />
        <ProjectCard
          title="Service 1"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          projectLink="/"
          githubLink="/"
        />
        <ProjectCard
          title="Service 1"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          githubLink="/"
        />
        <ProjectCard
          title="Service 1"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          projectLink="/"
          githubLink="/"
        />
      </div>
      <Link
        href="/experience"
        className="text-white active:scale-95 duration-500 bg-main-color py-4 px-8 rounded-2xl mt-10"
      >
        See More
      </Link>
    </div>
  );
}

export default TopProjects;
