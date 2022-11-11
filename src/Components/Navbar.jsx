import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white nav__container flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-800 text-6xl font-bold font-sans cursor-pointer'>Rachidflix</h1>
        <div className="log__block">
        <button className="bg-white px-6 py-2 text-red-400 ">Sign In</button>
        <button className='bg-red-600 px-6 py-2'>Register</button>
        </div>
    </div>
  )
}

export default Navbar
