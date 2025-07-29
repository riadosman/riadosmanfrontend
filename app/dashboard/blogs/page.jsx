"use client";

import { useEffect, useState } from "react";

export default function BlogsDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    tags: "",
    author: "",
    isPublished: false,
  });
  const [editingBlogId, setEditingBlogId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    setLoading(true);
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddOrEditBlog = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.content ||
      !formData.author
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()), // convert string to array
    };

    try {
      if (editingBlogId) {
        await fetch(`http://localhost:3000/api/blogs/${editingBlogId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("http://localhost:3000/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setFormData({
        title: "",
        description: "",
        image: "",
        content: "",
        tags: "",
        author: "",
        isPublished: false,
      });
      setEditingBlogId(null);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "DELETE",
      });
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      image: blog.image,
      content: blog.content,
      tags: blog.tags.join(", "),
      author: blog.author,
      isPublished: blog.isPublished,
    });
    setEditingBlogId(blog._id);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Blog Management</h1>

      {/* Add/Edit Blog Form */}
      <form
        onSubmit={handleAddOrEditBlog}
        className="space-y-4 bg-secondary-primary-color p-4 rounded"
      >
        <h2 className="text-xl font-semibold mb-2">
          {editingBlogId ? "Edit Blog" : "Add New Blog"}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleInputChange}
          />
          Published
        </label>

        <button
          type="submit"
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          {editingBlogId ? "Update Blog" : "Add Blog"}
        </button>

        {editingBlogId && (
          <button
            type="button"
            onClick={() => {
              setFormData({
                title: "",
                description: "",
                image: "",
                content: "",
                tags: "",
                author: "",
                isPublished: false,
              });
              setEditingBlogId(null);
            }}
            className="ml-2 bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Blog List */}
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <table className="w-full table-auto border border-gray-700 text-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Author</th>
              <th className="border px-4 py-2">Published</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.author}</td>
                <td className="border px-4 py-2">
                  {blog.isPublished ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
