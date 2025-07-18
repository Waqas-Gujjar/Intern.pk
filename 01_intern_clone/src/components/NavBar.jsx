import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile_image.png';
import { LuMoonStar, LuSunDim } from 'react-icons/lu';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NavBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const [shineClass, setShineClass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth logic
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleMouseEnter = () => setShineClass('shine-down');
  const handleMouseLeave = () => setShineClass('shine-up');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gray-800 bg-[#121212] px-4 md:px-12 py-3 w-full">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img
            className="w-32 sm:w-40 md:w-48 cursor-pointer"
            src={logo}
            alt="Logo"
            loading="lazy"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-lg font-medium">
          {[
            { to: '/', label: 'Home' },
            { to: '/internships', label: 'Internship' },
            { to: '/graduate-program', label: 'Graduate Program' },
            { to: '/student-ambassador', label: 'Student Ambassador' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`hover:text-[#42a824] ${
                  location.pathname === item.to ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle - visible on all screen sizes */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 bg-[#27272a] p-2 sm:p-3 rounded-full hover:bg-[#3a3a3a] transition"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <LuSunDim className="text-yellow-400" size={24} />
            ) : (
              <LuMoonStar size={24} />
            )}
          </button>

          {/* Profile image - visible on all screen sizes */}
          <div
            className="relative w-10 h-10 overflow-hidden rounded-full cursor-pointer hidden md:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={profile}
              alt="Profile"
              className="object-cover rounded-full"
              loading="lazy"
            />
            <span className={`shine-vertical absolute inset-0 rounded-full ${shineClass}`} />
          </div>

          {/* Desktop Buttons - only md+ */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/job-portal" onClick={closeMobileMenu}>
              <button className="bg-[#42a824] text-white px-4 py-2 rounded-xl hover:bg-black border border-green-600 transition">
                Job Portal
              </button>
            </Link>

            {isLoggedIn ? (
              <Link to="/dashboard" onClick={closeMobileMenu}>
                <button className="text-white px-4 py-2 rounded-xl hover:bg-[#42a824] border border-green-600 transition">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/signup" onClick={closeMobileMenu}>
                <button className="text-white px-4 py-2 rounded-xl hover:bg-[#42a824] border border-green-600 transition">
                  Sign Up
                </button>
              </Link>
            )}
          </div>

          {/* Profile image on mobile - show inside menu or next to hamburger? */}
          {/* Let's show a smaller profile image next to hamburger on mobile */}
          <div
            className="relative w-8 h-8 overflow-hidden rounded-full cursor-pointer md:hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={profile}
              alt="Profile"
              className="object-cover rounded-full"
              loading="lazy"
            />
            <span className={`shine-vertical absolute inset-0 rounded-full ${shineClass}`} />
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[4.5rem] left-0 w-full bg-[#121212] z-40 py-6 px-6 border-t border-gray-700 shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-white text-lg font-medium">
          {[
            { to: '/', label: 'Home' },
            { to: '/internships', label: 'Internship' },
            { to: '/graduate-program', label: 'Graduate Program' },
            { to: '/student-ambassador', label: 'Student Ambassador' },
            { to: '/job-portal', label: 'Job Portal' },
            { to: isLoggedIn ? '/dashboard' : '/signup', label: isLoggedIn ? 'Dashboard' : 'Sign Up' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={closeMobileMenu}
                className={`block px-4 py-2 rounded hover:bg-[#1f1f1f] ${
                  location.pathname === item.to ? 'text-[#42a824] font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
