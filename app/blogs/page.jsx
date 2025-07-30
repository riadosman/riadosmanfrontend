import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import BlogCard from "../components/BlogCard";
export const dynamic = "force-dynamic";

// Loading skeleton component
function BlogSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm animate-pulse">
      <div className="w-full h-52 bg-gray-700"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded mb-4 w-3/4"></div>
        <div className="h-3 bg-gray-700 rounded mb-4 w-1/2"></div>
        <div className="h-9 bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  );
}

// Error boundary component
function ErrorMessage({ message }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          Unable to Load Articles
        </h2>
        <p className="text-gray-300 mb-6">
          {message ||
            "We're having trouble loading the blog articles. Please try again later."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#8e1616] hover:bg-[#e8c899] text-white hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// Main blogs component
export default async function Blogs() {
  let data = [];
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      cache: "no-store", // or 'force-cache' for static generation
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
    }

    data = await res.json();

    // Validate data structure
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format received from API");
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
    error = err.message;
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Latest Blog Articles
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No Articles Yet
            </h2>
            <p className="text-gray-300">
              Check back soon for our latest blog posts and insights.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blog Articles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our latest insights, tutorials, and thoughts on technology,
            design, and innovation.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[...Array(6)].map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {data.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
