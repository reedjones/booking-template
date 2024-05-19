import React from "react";

export function Header () {
    return <header className="bg-gray-950 shadow text-white">
    <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
      <a className="flex items-center gap-2 font-semibold text-lg" href="#">
  <img src="/logo.png" className="text-white w-auto h-5"/>
        Appointment Scheduler
      </a>
      <nav className="hidden md:flex items-center gap-4">
        <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          Home
        </a>
        <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          Services
        </a>
        <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          About
        </a>
        <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          Contact
        </a>
      </nav>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
        Book Now
      </button>
    </div>
  </header>;
}