import React from 'react';
import image from '../../assets/images/Group.png';
import Collaborated from './Collaborated';
import { FaArrowRight } from "react-icons/fa";
import Internsection from './Internsection';
import Portfolio from './Portfolio';
import TechSection from './TechSection';
import Career from './Career';
import MockInterviews from './MockInterviews';
import Work from './Work';
import AiCareer from './AiCareer';
import Coach from './Coach';
import Review from './Review';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row w-full justify-between items-center gap-12">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className='space-y-6 mt-10 md:mt-20 text-center lg:text-left'>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight md:leading-[4.7rem]">
                Looking for <br />
                <span className="text-[#42a824]">Dream internship?</span>
              </h1>

              <p className="text-base md:text-lg xl:text-xl text-gray-200 md:w-10/12 mx-auto lg:mx-0">
                Internee.pk kickstarts students' tech careers with first internships, providing industry exposure,
                practical skills, and networking opportunities.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 bg-[#42a824] text-lg md:text-xl hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold transition-all">
                Our Job Portal
              </button>
              <button className="bg-[#1e2536] flex items-center justify-center gap-2 hover:bg-gray-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl text-lg md:text-xl font-semibold transition-all">
                Dashboard
                <FaArrowRight size={18} className='text-white' />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-24">
            <img src={image} alt="Internship illustration" className="w-full max-w-[26rem] md:max-w-[36rem] xl:max-w-[42rem] h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="mt-20">
        <Collaborated />
      </div>

      <div className="mt-20">
        <Internsection />
      </div>

      <div className="relative z-10">
        <Portfolio />
      </div>

      <div className="relative z-20">
        <TechSection />
      </div>

      <div className="relative z-20">
        <Career />
      </div>

      <div className="relative z-20">
        <MockInterviews />
      </div>

      <div className="relative z-20">
        <Work />
      </div>

      <div className="relative z-20">
        <AiCareer />
      </div>

      <div className="relative z-20">
        <Coach />
      </div>

      <div className="relative z-20">
        <Review />
      </div>
    </>
  );
};

export default Home;
