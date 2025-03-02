"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log("Path changed:", path);
  }, [path]);

  return (
    <div className="sticky top-0 z-50 p-4 md:p-6 bg-gradient-to-r from-[#FF4A4A] to-[#0e771a] shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* logo styling */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="transform transition-transform duration-300 hover:scale-125">
            <Image src="/logo.png" width={60} height={60} alt="logo" />
          </div>
          <span className="text-white text-2xl font-bold tracking-wide">
            BerryVision
          </span>
        </Link>

        {/* nav inks */}
        <ul className="flex gap-6 text-white text-lg">
          <li>
            <Link
              href="/checkBerries"
              className={`${
                path === "/checkBerries"
                  ? "border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1 transition duration-300"
              }`}
            >
              Check Berries
            </Link>
          </li>
          <li>
            <Link
              href="/guide"
              className={`${
                path === "/guide"
                  ? "border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1 transition duration-300"
              }`}
            >
              Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
