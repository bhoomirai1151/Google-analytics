"use client"

import { X, CheckCircle, AlertCircle } from "lucide-react"

export default function Toast({ message, type = "success", onClose }) {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg z-50 ${
        type === "success"
          ? "bg-purple-100 text-purple-800 border border-purple-200"
          : "bg-red-100 text-red-800 border border-red-200"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700 flex-shrink-0">
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}
