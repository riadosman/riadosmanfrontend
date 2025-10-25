import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

async function TopProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    cache: "no-store",
  });
  const data = await res.json();
  const topPro = data.filter((p) => p.top === true);

  return (
    <div className="p-8 flex items-center flex-col justify-center">
      <h1 className="text-6xl font-bold my-10">Top Projects</h1>
      <div className="flex items-center flex-col md:flex-row justify-between gap-10 my-10">
        {topPro.length > 0 ? (
          topPro.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p className="text-2xl font-bold">No Top Projects Found</p>
        )}
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
