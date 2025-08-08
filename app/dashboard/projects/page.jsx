"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const [token, setToken] = useState("");
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null); // project currently being edited
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      router.push("/");
    } else {
      setToken(t);
      fetchProjects(t);
    }
  }, [router]);

  const fetchProjects = async (authToken) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProject = async () => {
    if (!editProject) return;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${editProject._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editProject),
        }
      );

      if (!res.ok) throw new Error("Failed to update project");

      // Refresh project list after update
      fetchProjects(token);
      setEditProject(null);
    } catch (err) {
      console.error(err);
    }
  };
  const handleCreateProject = () => {
    router.push("/dashboard/projects/new");
  };
  const deleteProject = async (project) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${project._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to delete project");
      // Refresh project list after deletion
      fetchProjects(token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="text-white flex flex-col items-center py-10 w-full">
      <button
        onClick={handleCreateProject}
        className="my-10 px-10 py-2 border-4 border-main-color bg-main-color text-white rounded-md cursor-pointer transition-all duration-300 active:scale-85"
      >
        Create New Project
      </button>
      {editProject ? (
        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <h2 className="text-xl mb-4">Edit Project</h2>
          <input
            className="w-full mb-2 p-2 text-black"
            name="title"
            value={editProject.title}
            onChange={handleEditChange}
            placeholder="Title"
          />
          <textarea
            className="w-full mb-2 p-2 text-black"
            name="description"
            value={editProject.description}
            onChange={handleEditChange}
            placeholder="Description"
          />
          <input
            className="w-full mb-2 p-2 text-black"
            name="image"
            value={editProject.image}
            onChange={handleEditChange}
            placeholder="Image URL"
          />
          <input
            className="w-full mb-2 p-2 text-black"
            name="livelink"
            value={editProject.livelink}
            onChange={handleEditChange}
            placeholder="Live Link"
          />
          <input
            className="w-full mb-2 p-2 text-black"
            name="githublink"
            value={editProject.githublink}
            onChange={handleEditChange}
            placeholder="GitHub Link"
          />
          <input
            className="w-full mb-2 p-2 text-black"
            name="technologies"
            value={editProject.technologies.join(", ")}
            onChange={(e) =>
              setEditProject((prev) => ({
                ...prev,
                technologies: e.target.value.split(",").map((t) => t.trim()),
              }))
            }
            placeholder="Technologies (comma separated)"
          />
          <div className="flex gap-4">
            <button
              onClick={saveProject}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditProject(null)}
              className="bg-gray-500 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-800 p-6 rounded-lg w-72">
              <img
                src="/front-end-project.webp"
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditProject(project)}
                  className="cursor-pointer bg-transparent border border-main-color px-4 py-2 rounded w-full"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProject(project)}
                  className="cursor-pointer bg-main-color px-4 py-2 rounded w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
