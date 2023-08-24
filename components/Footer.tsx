import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-4 z-20 p-2 flex justify-center gap-x-5 items-center'>
        <a href={'https://instagram.com/'}><i className="fa-brands text-lg sm:text-2xl fa-instagram duration-300 hover:scale-110 cursor-pointer"></i></a>
        <a href={'https://github.com/ekedayen-e'}><i className="fa-brands text-lg sm:text-2xl fa-github hover:scale-110 cursor-pointer"></i></a>
        <a href={'https://www.linkedin.com/in/ekedayen-e/'}> <i className="fa-brands text-lg sm:text-2xl fa-linkedin hover:scale-110 cursor-pointer"></i></a>
    </div>
  )
}

export default Footer