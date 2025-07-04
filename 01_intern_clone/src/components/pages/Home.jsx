import React from 'react';
import image from '../../assets/images/Group.png';
import Collaborated from './Collaborated';
import { FaArrowRight } from "react-icons/fa";
import Internsection from './Internsection';
import Portfolio from './Portfolio';
import TechSection from './TechSection';
import Career from './Career';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen w-full flex items-center">
        <div className="flex w-full justify-between items-center">

          {/* Left Side */}
          <div className="w-1/2 px-18 space-y-6 pr-12">
            <div className='space-y-6 mt-20'>
              <h1 className="text-7xl font-bold text-white leading-[4.7rem]">
                Looking for <br />
                <span className="text-[#42a824]">Dream internship?</span>
              </h1>

              <p className="text-lg 2xl:text-xl text-gray-200 md:w-10/12">
                Internee.pk kickstarts students' tech careers with first internships, providing industry exposure,
                practical skills, and networking opportunities.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#42a824] text-xl hover:bg-green-700 cursor-pointer text-white px-8 py-4 rounded-2xl font-semibold">
                Our Job Portal
              </button>
              <button className="bg-[#1e2536] flex justify-between items-center gap-2 hover:bg-gray-500 cursor-pointer text-white px-10 py-4 rounded-2xl text-xl font-semibold transition">
                Dashboard
                <FaArrowRight size={20} className='text-white rounded-full' />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 pt-24">
            <img src={image} alt="Internship illustration" className="w-[42rem] h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Sections with spacing */}
      <div className="mt-20">
        <Collaborated />
      </div>

      <div className="mt-20">
        <Internsection />
      </div>

      <div className=" relative z-10">
        <Portfolio />
      </div>

      <div className=" relative z-20">
        <TechSection />
      </div>

      <div className="relative z-20">
        <Career />
      </div>
    </>
  );
};

export default Home;
