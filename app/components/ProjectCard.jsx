import React from "react";
import Image from "next/image";
import Link from "next/link";

async function ProjectCard(props) {
  const { title, description, projectLink, githubLink } = await props;
  return (
    <div className="bg-white/30 h-96 max-w-[350px] rounded-2xl p-6 shadow-[0_4px_50px_rgba(255,0,0,0.1)]">
      <Image
        src="/front-end-project.webp"
        alt="Service 1"
        className="h-44 rounded-2xl object-cover"
        width={500}
        height={500}
      />
      <p className="text-2xl font-bold mt-4">{title}</p>
      <p className="text-sm my-3">{description}</p>
      {projectLink && (
        <Link
          href={projectLink || "/"}
          target="_blank"
          className="cursor-pointer text-main-secondary-color font-bold  hover:underline mr-2 duration-500"
        >
          Project Link
        </Link>
      )}
      <Link
        href={githubLink}
        target="_blank"
        className="cursor-pointer text-main-secondary-color font-bold  hover:underline duration-500"
      >
        Github Link
      </Link>
    </div>
  );
}

export default ProjectCard;
