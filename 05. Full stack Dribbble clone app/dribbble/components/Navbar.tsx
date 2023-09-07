import React from 'react'
import Image from "next/image";
import Link from "next/link";



export const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
    <div className='flex-1 flexStart gap-10'>
      <Link href='/'>
        <Image
          src='/logo.svg'
          width={116}
          height={43}
          alt='logo'
        />
      </Link>
      <ul className='xl:flex hidden text-small gap-7'>
     
     
      </ul>
    </div>

    <div className='flexCenter gap-4'>
    
    </div>
  </nav>
  )
}
