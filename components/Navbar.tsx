import React from 'react'
import Link from 'next/link'
import {useUser} from "@auth0/nextjs-auth0/client"
import Image from 'next/image'

const Navbar = () => {
    const {user, error, isLoading} = useUser();
    let pic: string = user?.picture ? user.picture.toString() : ""
  return (
    <div className='z-20 sticky top-0 left-0 font-black border-b-4  sm:text-lg md:text-xl lg:text-2xl p-2 flex justify-between items-center bg-red-500'>
        <h3 className='duration-300 hover:scale-110 cursor-pointer'><Link href="/">Chef's Bible</Link></h3>
        <div className='flex gap-x-5 items-center'>
            {user && 
            <>
            <Image className='rounded-xl duration-300 hover:scale-110 cursor-pointer' src={pic} width={50} height={50} alt="user" />
            </>
            }
            {!user && <h3 className='duration-300 hover:scale-110 cursor-pointer'><a href="/api/auth/login">Login</a></h3>}
            {user && <h3 className='duration-300 hover:scale-110 cursor-pointer'><Link href="/recipe">Recipes</Link></h3>}
            {user && <h3 className='duration-300 hover:scale-110 cursor-pointer'><a href="/api/auth/logout">Logout</a></h3>}
        </div>
    </div>
  )
}

export default Navbar