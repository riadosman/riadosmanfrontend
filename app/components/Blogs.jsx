import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";

async function Blogs() {
  let blogs = [];
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
    .then((res) => res.json())
    .then((data) => {
      blogs = data || [];
    })
    .catch((err) => {
      console.error("Error fetching blogs:", err);
    });

  return (
    <>
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-main-color -z-20"></div>
      <div className="absolute bottom-0 right-2 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color -z-20"></div>
      <div className="min-h-screen  text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-[var(--color-main-color)] mb-4">
              Blog & Insights
            </h1>
            <p className="text-[var(--color-light-gray)] text-lg max-w-2xl mx-auto">
              Explore the latest articles, insights, and practical resources to
              boost your skills and stay inspired.
            </p>
          </div>

          {/* Blog Grid */}
          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          ) : (
            <p className="text-2xl font-bold flex items-center justify-center mx-auto min-h-[50vh]">
              No Blogs Found
            </p>
          )}
          <Link
            className="text-white active:scale-95 duration-500 bg-main-color py-4 px-8 rounded-2xl mt-10"
            href="/blogs"
          >
            Find out more
          </Link>
        </div>
      </div>
    </>
  );
}

export default Blogs;
