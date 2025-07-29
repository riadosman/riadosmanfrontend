import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ blog }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <article className="group bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm hover:shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          src={blog.image || "/placeholder-blog.jpg"}
          alt={blog.title}
          width={400}
          height={208}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {blog.featured && (
          <div className="absolute top-3 left-3 bg-[#8e1616] text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags?.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-[#e8c899] transition-colors duration-300">
            {blog.title}
          </h2>

          <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
            {blog.description}
          </p>
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {blog.authorAvatar && (
                  <Image
                    src={blog.authorAvatar}
                    alt={blog.author}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="text-gray-400 text-xs font-medium">
                    By {blog.author}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {blog.publishedAt
                      ? formatDate(blog.publishedAt)
                      : "Recently"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-gray-400 text-xs">
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formatNumber(blog.views || 0)}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formatNumber(blog.likes || 0)}
                </span>
                <span className="text-gray-500">
                  {blog.readTime || "5 min read"}
                </span>
              </div>

              <Link
                href={`/blogs/${blog._id}`}
                className="inline-flex items-center bg-[#8e1616] hover:bg-[#e8c899] text-white hover:text-black text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8e1616] focus:ring-opacity-50"
                aria-label={`Read more about ${blog.title}`}
              >
                Read More
                <svg
                  className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
