"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CreateProject = () => {
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    livelink: "",
    githublink: "",
    technologies: "",
  });
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      router.push("/");
    } else {
      setToken(t);
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to create project");

      // Redirect to projects list after creation
      router.push("/dashboard/projects");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="text-white flex flex-col items-center py-10 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 p-6 rounded-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-xl mb-4">Create New Project</h2>

        <input
          className="w-full mb-2 p-2 border-main-color border-2 rounded-lg "
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <textarea
          className="w-full mb-2 p-2 border-main-color border-2 rounded-lg "
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />

        <input
          className="w-full mb-2 p-2 border-main-color border-2 rounded-lg "
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />

        <input
          className="w-full mb-2 p-2 border-main-color border-2 rounded-lg "
          name="livelink"
          value={formData.livelink}
          onChange={handleChange}
          placeholder="Live Link"
        />

        <input
          className="w-full mb-2 p-2 border-main-color border-2 rounded-lg "
          name="githublink"
          value={formData.githublink}
          onChange={handleChange}
          placeholder="GitHub Link"
        />

        <input
          className="w-full mb-2 p-2 border-main-color border-2 rounded-lg "
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="Technologies (comma separated)"
        />

        <button
          type="submit"
          className="w-full px-10 py-2 border-4 border-main-color bg-main-color text-white rounded-md cursor-pointer transition-all duration-300 active:scale-85"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
