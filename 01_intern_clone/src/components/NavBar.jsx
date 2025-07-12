import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile_image.png';
import { LuMoonStar, LuSunDim } from 'react-icons/lu';

const NavBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const [shineClass, setShineClass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set login status here (or via auth)

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

  const handleMouseEnter = () => setShineClass('shine-down');
  const handleMouseLeave = () => setShineClass('shine-up');

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between border-b border-gray-800  items-center bg-[#121212] px-[3rem] py-3 w-full">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img className="logo-img cursor-pointer w-60" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Menu */}
        <div className="menu">
          <ul className="flex gap-8 text-gray-300">
            <li>
              <Link
                to="/"
                className={`hover:text-[#42a824] ${
                  location.pathname === '/' ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/internships"
                className={`hover:text-[#42a824] ${
                  location.pathname === '/internships' ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                Internship
              </Link>
            </li>
            <li>
              <Link
                to="/graduate-program"
                className={`hover:text-[#42a824] ${
                  location.pathname === '/graduate-program' ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                Graduate Program
              </Link>
            </li>
            <li>
              <Link
                to="/student-ambassador"
                className={`hover:text-[#42a824] ${
                  location.pathname === '/student-ambassador' ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                Student Ambassador
              </Link>
            </li>
          </ul>
        </div>

        {/* Profile Section */}
        <div className="profile flex gap-4 items-center">
          {/* Buttons */}
          <div className="gap-4 flex">
            <Link to="/job-portal">
              <button className="bg-[#42a824] text-white px-4 py-2 rounded-xl hover:bg-black border border-green-600 cursor-pointer">
                Job Portal
              </button>
            </Link>

            {isLoggedIn ? (
              <Link to="/dashboard">
                <button className="text-white px-4 py-2 rounded-xl hover:bg-[#42a824] border border-green-600 cursor-pointer">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/signup">
                <button className="text-white px-4 py-2 rounded-xl hover:bg-[#42a824] border border-green-600 cursor-pointer">
                  Sign Up
                </button>
              </Link>
            )}
          </div>

          {/* Profile Image with Shine */}
          <div
            className="relative group w-10 h-10 overflow-hidden rounded-full cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img className="w-30 object-cover rounded-full" src={profile} alt="Profile" />
            <span className={`shine-vertical absolute inset-0 rounded-full ${shineClass}`} />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 bg-[#27272a] p-3 rounded-full cursor-pointer transition bg-opacity-90 hover:bg-[#3a3a3a]"
            title="Toggle Theme"
          >
            {theme === 'dark' ? (
              <LuSunDim className="text-yellow-400" size={25} />
            ) : (
              <LuMoonStar size={25} />
            )}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
