"use client"

import { useState } from "react"

export default function Interview({ userEmail, onBack }) {
  const [isPushToTalk, setIsPushToTalk] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 relative">
      {/* Purple accent bar on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-600"></div>

      {/* Push to Talk Toggle - Top Right */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <span className="text-sm text-gray-600">Push to Talk</span>
        <button
          onClick={() => setIsPushToTalk(!isPushToTalk)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isPushToTalk ? "bg-indigo-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isPushToTalk ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Back Button - Top Left */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
      >
        ← Back
      </button>

      {/* Main Content */}
      <div className="text-center max-w-2xl">
        {/* Interviewer Profile */}
        <div className="mb-8">
          {/* Profile Image */}
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img src="/professional-woman-interviewer.jpg" alt="Interviewer" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Interviewer Name */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sarah Johnson</h2>

          {/* Status */}
          <p className="text-gray-400 text-lg">Interview in Progress</p>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          {/* Microphone Button */}
          <button className="w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-lg">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 16.91c-1.48 1.46-3.51 2.36-5.7 2.36-2.2 0-4.2-.9-5.7-2.36l-1.41 1.41c1.84 1.84 4.35 2.98 7.11 2.98s5.27-1.13 7.11-2.98l-1.41-1.41zM12 20c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1z" />
            </svg>
          </button>

          {/* Mute Button */}
          <button className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-lg">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19.86 5.14L5.14 19.86m0-14.72L19.86 19.86"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Interview Question */}
        <p className="text-xl text-gray-700 leading-relaxed">
          Tell me about yourself, including your strengths and weaknesses.
        </p>
      </div>
    </div>
  )
}
