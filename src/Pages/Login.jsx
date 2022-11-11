import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="w-full h-screen">
    <img
      className="hidden sm:block absolute w-full h-full object-cover "
      src="https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/b1500f35-f97f-40a6-a75a-bca6ce2fb9af/BE-nl-20221107-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt=""
    />

    <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold ">Login</h1>
          <form className="w-full flex flex-col py-4">
            <input
              className="p-3 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              className="p-3 my-2 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <button className="bg-red-600 py-3 my-6 rounded font-bold">
              Login
            </button>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <p>
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Need Help ?</p>
            </div>
            <p className="py-10">
              <span className="text-gray-500">
                New to Netflix?
              </span>
              <Link to="/signup" className="hover:cursor-pointer">Register</Link>
            </p>
          </form>
      </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login