import React from "react";

export function Footer () {
    return <footer className="bg-gray-950 text-gray-400 py-8">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        <span className="font-semibold text-lg">Appointment Scheduler</span>
      </div>
      <nav className="flex gap-4">
        <a className="hover:text-gray-50" href="#">
          Home
        </a>
        <a className="hover:text-gray-50" href="#">
          Services
        </a>
        <a className="hover:text-gray-50" href="#">
          About
        </a>
        <a className="hover:text-gray-50" href="#">
          Contact
        </a>
      </nav>
    </div>
  </footer>;
}