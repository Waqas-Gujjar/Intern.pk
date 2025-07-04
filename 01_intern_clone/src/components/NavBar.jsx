import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile_image.png';
import { LuMoonStar } from 'react-icons/lu';
import { LuSunDim } from "react-icons/lu";

const NavBar = () => {
  const currentPage = 'Home'; // Replace with useLocation() in real routing
  const [theme, setTheme] = useState('dark');
  const [shineClass, setShineClass] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handlers for shine animation
  const handleMouseEnter = () => {
    setShineClass('shine-down');
  };

  const handleMouseLeave = () => {
    setShineClass('shine-up');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-[#121212] px-[3rem] py-3 w-full">
        <div className="logo">
          <img className="logo-img cursor-pointer w-60" src={logo} alt="Logo" />
        </div>

        <div className="menu">
          <ul className="flex gap-8 text-gray-300">
            {['Home', 'Internship', 'Graduate Program', 'Student Ambassador'].map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-[#42a824] ${
                  currentPage === item ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile flex gap-4 items-center">
          <div className="gap-4 flex">
            <button className="bg-[#42a824] text-white px-4 py-2 rounded-xl hover:bg-black border border-green-600">
              Job Portal
            </button>
            <button className="text-white px-4 py-2 rounded-xl hover:bg-[#42a824] border border-green-600">
              Dashboard
            </button>
          </div>

          <div className="flex gap-4 items-center">
            {/* Profile Image with Vertical Shine Effect */}
            <div
              className="relative group w-10 h-10 overflow-hidden rounded-full cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={profile}
                alt="Profile"
              />
              <span className={`shine-vertical absolute inset-0 rounded-full ${shineClass}`} />
            </div>

            {/* Theme Toggle Icon */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 bg-[#27272a] p-3 rounded-full cursor-pointer transition bg-opacity-90 hover:bg-[#3a3a3a]"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <LuSunDim className='text-yellow-400' size={25} /> : <LuMoonStar size={25} />}
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
