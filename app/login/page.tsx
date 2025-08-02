import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { ThemeToggle } from '../theme-toggle'
import Link from 'next/link';

const page = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h1>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login Button */}
        <button
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle size={22}/>
          <span className="text-sm text-gray-700 font-medium">Continue with Google</span>
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Not registered?{' '}
          <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page