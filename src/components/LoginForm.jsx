"use client"

import { useState } from "react"
import { Lock, Mail, Eye, EyeOff } from "lucide-react"
import Toast from "./Toast"

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [toast, setToast] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setToast({
        message: "Login not successful",
        type: "error",
      })
      setTimeout(() => setToast(null), 3000)
      return
    }

    if (!email.includes("@") || password.length < 6) {
      setToast({
        message: "Login not successful",
        type: "error",
      })
      setTimeout(() => setToast(null), 3000)
      return
    }

    setToast({
      message: "Login Successful",
      type: "success",
    })

    setTimeout(() => {
      setToast(null)
      setEmail("")
      setPassword("")
      setShowPassword(false)
      setRememberMe(false)
      onLoginSuccess(email)
    }, 2000)
  }

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-lg mb-3">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-indigo-600">LoginFlow</h1>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Enter your credentials to access your account.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Sign Up */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="currentColor">
              G
            </text>
          </svg>
          Sign up with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </>
  )
}
