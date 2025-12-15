import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <nav className="mt-3 md:mt-0">
          <Link
            href="/cmtofeet"
            className="text-gray-300 hover:text-white transition"
          >
            Tools
          </Link>
        </nav>

      </div>
    </footer>
  );
};
