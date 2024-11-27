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
        <Link href="/" className="hover:scale-110 transition-transform duration-300"> {/* Link with hover effect */}
          <Image src={"/logo.png"} width={150} height={150} alt="logo" />
        </Link>
        <ul className='hidden md:flex gap-10 text-center'>
          <li className={`${
            path==='/checkBerries' 
            ? 'text-primary text-lg'
            : 'hover:text-primary font-bold text-lg cursor-pointer'}`}>Check Berries</li>
          <li className={`${
            path==='/about' 
            ? 'text-primary text-lg'
            : 'hover:text-primary font-bold text-lg cursor-pointer'}`}>About</li>
          <li className={`${
            path==='/contact' 
            ? 'text-primary text-lg'
            : 'hover:text-primary font-bold text-lg cursor-pointer'}`}>Contact</li>
        </ul>
      </div>

      <div className='px-10 flex gap-2 justify-between'>
        <Button className='hover:bg-red-400'><LogIn/>Login</Button>
      </div>
    </div>
  )
}

export default Header
