import React from 'react';
import bgImage from '../../assets/images/main.jpg'; // Make sure this path is correct
import { GrLink } from "react-icons/gr";
import { PiBag } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";


const TaskHeroSection = () => {
  return (
    <div className="relative w-full flex justify-center items-start pt-8 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Main content */}
      <div className='relative z-10 text-center mt-20 max-w-6xl'>
        {/* Top Badge */}
        <div className='mb-8'>
          <div className='inline-flex justify-center items-center border bg-green-800/50 rounded-full px-4 py-1 gap-2'>
            <GrLink className='text-[#319c1c]' />
            <h1 className='text-[#319c1c]'>Task Management Platform</h1>
          </div>
        </div>

        {/* Headings and Description */}
        <div className='space-y-6'>
          <div>
            <h1 className='text-white text-5xl font-semibold leading-tight'>
              Master Real-World Skills with Our Task Portal at
            </h1>
            <h1 className='text-white text-5xl font-semibold leading-tight'>internee.pk</h1>
          </div>

          <p className='text-gray-300 text-lg max-w-3xl mx-auto'>
            Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our virtual <br />
            <span className='font-bold'>internships</span> on <span className='font-bold'>internee.pk.</span>
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-8 mt-10">
          {/* First Card */}
          <div className="flex flex-col gap-4 p-8 w-full md:w-[40rem] bg-[#1f1f1f] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-[#002e06] p-3 w-fit">
                <PiBag className="text-[#319c1c] text-3xl" />
              </div>
              <h2 className="text-white text-2xl font-semibold text-left">Hands-on Industry Projects with internee.pk</h2>
            </div>
            <p className="text-[#8A99A5] text-base text-left">
              Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our virtual internships.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-[#319c1c] text-xl"><FaRegCheckCircle /></span>
                <span className="text-[#8A99A5]">Project-based learning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#319c1c] text-xl"><FaRegCheckCircle /></span>
                <span className="text-[#8A99A5]">Industry-standard practices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#319c1c] text-xl"><FaRegCheckCircle /></span>
                <span className="text-[#8A99A5]">Portfolio building</span>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col gap-4 p-8 w-full md:w-[40rem] bg-[#1f1f1f] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-[#002e06] p-3 w-fit">
                <GiClockwork className="text-[#319c1c] text-3xl" />
              </div>
              <h2 className="text-white text-2xl font-semibold text-left">Skill Verification System by internee.pk</h2>
            </div>
            <p className="text-[#8A99A5] text-base text-left">
              Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our virtual internships and comprehensive tracking system.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-[#319c1c] text-xl"><FaRegCheckCircle /></span>
                <span className="text-[#8A99A5]">Skill verification</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#319c1c] text-xl"><FaRegCheckCircle /></span>
                <span className="text-[#8A99A5]">Progress tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#319c1c] text-xl"><FaRegCheckCircle /></span>
                <span className="text-[#8A99A5]">Achievement badges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHeroSection;
