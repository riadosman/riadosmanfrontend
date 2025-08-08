import React from "react";
import Link from "next/link";
import { isAuthenticated } from "../../Utils/Auth";
function DashboardLayout({ children }) {
  return (
    <>
      {isAuthenticated && (
        <header className="p-8 text-xl flex items-center justify-between">
          <nav className="flex">
            <ul className="flex items-center justify-between gap-12">
              <li>
                <Link href="/dashboard/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/dashboard/lastnews">last News</Link>
              </li>
              <li>
                <Link href="/dashboard/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
      {children}
    </>
  );
}

export default DashboardLayout;
