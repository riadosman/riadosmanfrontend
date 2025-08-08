import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog = data.find((b) => b._id === id);
  const sameBlogs = data.filter((b) =>
    b.tags.some((tag) => blog.tags.includes(tag))
  );

  return (
    <div className="p-8  flex flex-col-reverse md:flex-row-reverse items-start justify-end gap-10">
      <div className="w-[400px] border-2 border-white h-screen rounded-4xl mt-10 p-8">
        <p className="text-3xl border-b-2 pb-5">مقالات اخرى من اجلك</p>
        <div className="flex flex-col">
          {sameBlogs.map((b, i) => (
            <Link
              href={`/blogs/${b._id}`}
              key={i}
              className="my-2 py-4 hover:text-main-color cursor-pointer duration-300 border-b-2 border-main-secondary-color"
            >
              {b.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 ">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={400}
          className="h-fit md:h-[400px] md:w-[600px] object-cover rounded"
        />
        <h1 className="text-3xl my-5 capitalize font-bold">{blog.title}</h1>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
}
