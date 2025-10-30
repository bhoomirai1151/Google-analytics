"use client"

export default function Dashboard({ userEmail, onLogout, onStartInterview }) {
  // Extract name from email (part before @)
  const userName = userEmail.split("@")[0].charAt(0).toUpperCase() + userEmail.split("@")[0].slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 relative">
      {/* Purple accent bar on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-600"></div>

      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Welcome, {userName}!</h1>
        <button
          onClick={onStartInterview}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-200"
        >
          Start Interview
        </button>

        {/* Logout button */}
        <button onClick={onLogout} className="mt-8 text-indigo-600 hover:text-indigo-700 font-medium text-sm">
          Logout
        </button>
      </div>
    </div>
  )
}
