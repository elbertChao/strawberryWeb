"use client"
import { Button } from '@/components/ui/button'
import { LogIn} from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from "next/link"

function Header() {
  const path = usePathname();

  useEffect(()=> {
    console.log(path);    
  }, []);

  return (
    <div className='p-6 px-10 bg-[#FFE6D1] flex items-center justify-center'>
      <div className='flex items-center space-x-16'>
        <Link href="/" className="hover:scale-110 transition-transform duration-300">
          <Image src={"/logo.png"} width={150} height={150} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-10 text-center">
          <li>
            <Link
              href="/checkBerries"
              className={`${
                path === "/checkBerries"
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              } text-lg cursor-pointer`}
            >
              Check Berries
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                path === "/about"
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              } text-lg cursor-pointer`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                path === "/contact"
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              } text-lg cursor-pointer`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className='px-10 flex gap-2 justify-between'>
        <Button className='hover:bg-red-400'><LogIn/>Login</Button>
      </div>
    </div>
  )
}

export default Header
