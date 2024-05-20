import React from "react";
import { NavLink } from "react-router-dom";



export function Header () {
    const cN = "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50";
    const urls = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const names = [
"Home",
        "AppointmentManagement",
        "AppointmentManagement2",
        "AppointmentManager3",
        "Availability",
        "Availability2",
        "BookingCalender",
        "BookingCalender2",
        "BookingCalender3",
        "BookingCalender4 ",
        "BookingCalender5",
        "SchedulingComponent"
    ];
    const zip = (a1, a2) => a1.map ((x, i) => [x.toString (), a2[i]]);
    const links = zip (urls, names)

    return (<header className="bg-gray-950 shadow text-white">
    <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
      <a className="flex items-center gap-2 font-semibold text-lg" href="#">
  {/*<img src="/logo.JPG" className="text-white w-auto h-5" alt='appointment scheduler'/>*/}
<span className="logo-text">APPOINTED</span>
      </a>
      <nav className="ml-3 p-1 hidden md:flex items-center gap-4 flex-wrap">
          {links.map ((link) => (
            <NavLink to={`/${link[0]}`} className={cN} key={link[0]}> {link[1]}</NavLink>
          ))}

      </nav>

    </div>
  </header>);
}