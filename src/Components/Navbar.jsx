import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} = UserAuth()
  console.log(user)
  return (
    <div className='text-white nav__container flex items-center justify-between p-4 z-[100] w-full absolute'>
    <Link to='/'>
    <h1 className='text-red-800 text-6xl font-bold font-sans cursor-pointer'>Rachidflix</h1>
    </Link>
        <div className="log__block">
        <Link to='/login'>
        <button className="bg-white px-6 py-2 text-red-400 ">Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='bg-red-600 px-6 py-2'>Register</button>
        </Link>   
    
        </div>
    </div>
  )
}

export default Navbar
