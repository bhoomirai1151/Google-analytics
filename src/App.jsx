"use client"

import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import Interview from "./pages/interview"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [isInterviewStarted, setIsInterviewStarted] = useState(false)

  const handleLoginSuccess = (email) => {
    setUserEmail(email)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail("")
    setIsInterviewStarted(false)
  }

  const handleStartInterview = () => {
    setIsInterviewStarted(true)
  }

  const handleBackFromInterview = () => {
    setIsInterviewStarted(false)
  }

  if (isLoggedIn && isInterviewStarted) {
    return <Interview userEmail={userEmail} onBack={handleBackFromInterview} />
  }

  return isLoggedIn ? (
    <Dashboard userEmail={userEmail} onLogout={handleLogout} onStartInterview={handleStartInterview} />
  ) : (
    <LoginPage onLoginSuccess={handleLoginSuccess} />
  )
}

export default App
