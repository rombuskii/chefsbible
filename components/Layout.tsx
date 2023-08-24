import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='relative min-h-screen bg-red-500 flex flex-col'>
    <Navbar/>
    <main className='px-2 flex-1'>
    {children}
    </main>
    <Footer/>
    </div>
  )
}

export default Layout