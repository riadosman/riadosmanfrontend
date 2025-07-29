"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="p-8 text-xl flex items-center justify-between">
      <nav className="hidden md:flex">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "text-main-color" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/service">My Service</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Nav */}
      <nav className="h-20 md:hidden flex items-center justify-between w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setMobileNav(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>

        <button className="px-4 py-2 bg-transparent border-4 border-main-color text-white hover:bg-main-color duration-400 rounded-md cursor-pointer active:scale-85">
          Download Free
        </button>
      </nav>
      {mobileNav && (
        <div className="mobile-nav md:hidden duration-500 ease-in-out">
          <ul className="absolute top-0 left-0 w-[80%] h-screen text-left flex p-20  flex-col gap-10 bg-secondary-color ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer absolute top-10 right-10"
              onClick={() => setMobileNav(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <li className="mt-6">
              <Link
                href="/"
                className={pathname === "/" ? "text-main-color" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/service">My Service</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="hidden md:flex items-center justify-between gap-8">
        <button className="px-10 py-2 border-4 border-main-color bg-main-color text-white rounded-md cursor-pointer transition-all duration-300 active:scale-85">
          My CV
        </button>

        <button className="px-4 py-2 bg-transparent border-4 border-main-color text-white hover:bg-main-color duration-400 rounded-md cursor-pointer active:scale-85">
          Download Free
        </button>
      </div>
    </header>
  );
}
