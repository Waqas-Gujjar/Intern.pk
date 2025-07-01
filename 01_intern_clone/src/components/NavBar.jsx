import React from 'react';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile_image.png';
import { LuMoonStar } from 'react-icons/lu';

const NavBar = () => {
  // Simulate current page (replace with real route check)
  const currentPage = 'Home'; // you can use useLocation().pathname

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
            <div className="relative group">
              <img
                className="w-8 h-8 rounded-full cursor-pointer transition-all duration-300 group-hover:animate-shine"
                src={profile}
                alt="Profile"
              />
              {/* Optional overlay or animation elements can go here */}
            </div>
            <i className="text-gray-300 bg-[#27272a] p-3 rounded-full cursor-pointer">
              <LuMoonStar size={'25px'} />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
