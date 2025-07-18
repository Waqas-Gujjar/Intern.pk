import React from 'react';
import InternShipCard from './InternShipCard';

const Internship = () => {
  return (
    <div className="bg-black text-white w-full px-4 sm:px-6 lg:px-20 py-16 max-w-[1400px] mx-auto">
      {/* Top Hero Section */}
      <div className="flex flex-col lg:flex-row mt-30 justify-between items-center gap-10 mb-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Unlock Your Future
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-medium mb-6">
            Discover world-class internships and gain hands-on experience with top{' '}
            <br className="hidden lg:block" /> industry leaders.
          </p>
          <button className="bg-[#43a724] text-white px-6 py-3 font-semibold text-lg rounded-xl hover:bg-green-700 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="lg:w-[40%] flex justify-center w-full">
          <div className="bg-[#43a724] text-white px-8 sm:px-10 py-6 rounded-xl text-center shadow-lg max-w-xs sm:max-w-sm w-full">
            <h2 className="text-xl sm:text-2xl font-bold">
              Find Your Dream Internship Today!
            </h2>
          </div>
        </div>
      </div>

      {/* Internship Category Section */}
      <div className="bg-[#121212] p-8 sm:p-16 rounded-2xl">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-500 mb-4">
            Explore Internship Categories
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Choose from a wide range of internship opportunities and kickstart your professional journey.
          </p>
        </div>

        {/* Cards Section */}
        <InternShipCard />
      </div>
    </div>
  );
};

export default Internship;
