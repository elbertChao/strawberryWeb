"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="p-4 md:p-6 bg-gradient-to-r from-[#FF4A4A] to-[#FF6B6B] shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <span className="text-white text-2xl font-bold tracking-wide">
            BerryVision
          </span>
        </Link>

        {/* Navigation Links */}
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
              href="/about"
              className="hover:border-b-2 hover:border-white pb-1 transition duration-300"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
