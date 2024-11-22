import { Button } from '@/components/ui/button'
import { LogIn} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-6 px-10'>
      <div className='flex gap-10 items-center'>
        <Image src = {'/logo.png'} 
        width={150} 
        height={150} 
        alt='logo'/>
        <ul className='hidden md:flex gap-10'>
          <li className='hover:text-primary font-bold text-lg cursor-pointer'>Check Berries</li>
          <li className='hover:text-primary font-bold text-lg cursor-pointer'>About</li>
          <li className='hover:text-primary font-bold text-lg cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div className='flex gap-2'>
        <Button><LogIn/>Login</Button>
      </div>
    </div>
  )
}

export default Header
