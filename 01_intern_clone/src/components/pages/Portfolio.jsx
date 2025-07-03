import React from 'react';
import bgImage from '../../assets/images/main.jpg';
import { GrLink } from "react-icons/gr";
import { PiBag } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

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

      {/* Main Content */}
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
          <h1 className='text-white text-5xl font-semibold leading-tight'>
            Master Real-World Skills with Our Task Portal at
          </h1>
          <h1 className='text-white text-5xl font-semibold leading-tight'>internee.pk</h1>
          <p className='text-gray-300 text-lg max-w-3xl mx-auto'>
            Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our virtual <br />
            <span className='font-bold'>internships</span> on <span className='font-bold'>internee.pk.</span>
          </p>
        </div>

        {/* Top Cards Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-8 mt-10">
          {/* First Card */}
          <div className="flex flex-col gap-4 p-8 w-full md:w-[40rem] bg-[#1f1f1f] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-[#002e06] p-3 w-fit">
                <PiBag className="text-[#319c1c] text-3xl" />
              </div>
              <h2 className="text-white text-2xl font-semibold text-left">
                Hands-on Industry Projects with internee.pk
              </h2>
            </div>
            <p className="text-[#8A99A5] text-base text-left">
              Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our virtual internships.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {["Project-based learning", "Industry-standard practices", "Portfolio building"].map((item, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <FaRegCheckCircle className="text-[#319c1c] text-xl" />
                  <span className="text-[#8A99A5]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col gap-4 p-8 w-full md:w-[40rem] bg-[#1f1f1f] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-[#002e06] p-3 w-fit">
                <GiClockwork className="text-[#319c1c] text-3xl" />
              </div>
              <h2 className="text-white text-2xl font-semibold text-left">
                Skill Verification System by internee.pk
              </h2>
            </div>
            <p className="text-[#8A99A5] text-base text-left">
              Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our virtual internships and comprehensive tracking system.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {["Skill verification", "Progress tracking", "Achievement badges"].map((item, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <FaRegCheckCircle className="text-[#319c1c] text-xl" />
                  <span className="text-[#8A99A5]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className='grid md:grid-cols-2 gap-6 mt-16'>

          {/* SDLC Card */}
          <div className='bg-[#1f1f1f] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6'>
            <div className='flex gap-6 items-start'>
              <div className='bg-[#002e06] p-3 rounded-2xl'>
                <GrLink className="text-[#319c1c] text-3xl" />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-white text-2xl font-semibold text-left'>
                  SDLC Implementation via internee.pk
                </h1>
                <p className='text-[#8A99A5] text-base text-left'>
                  Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our virtual internship offerings.
                </p>
              </div>
            </div>
          </div>

          {/* Guided Learning Card */}
          <div className='bg-[#1f1f1f] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6'>
            <div className='flex gap-6 items-start'>
              <div className='bg-[#002e06] p-3 rounded-2xl'>
                <IoBookOutline className="text-[#319c1c] text-3xl" />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-white text-2xl font-semibold text-left'>
                  Guided Learning Path at internee.pk
                </h1>
                <p className='text-[#8A99A5] text-base text-left'>
                  Follow a structured learning path designed for both beginners and advanced learners as part of our virtual internship curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA as a Card */}
        <div className='flex justify-center mt-16 px-4 mb-20'>
          <div className='bg-[#1f1f1f] rounded-2xl shadow-lg p-10 w-full max-w-7xl hover:scale-105 transition-transform duration-300'>

            <div className='flex flex-col gap-4 items-center text-center'>

              <h1 className='text-white text-3xl font-bold'>
                Ready to Build Your Professional Portfolio with internee.pk?
              </h1>

              <p className='text-[#8A99A5] text-base max-w-3xl'>
                Join our virtual internships and get access to industry-standard tasks that will help you build a remarkable portfolio, only at <span className='font-semibold text-white'>internee.pk</span>.
              </p>

              <div className='flex items-center gap-2 mt-4'>
                <button className='bg-[#319c1c] flex items-center text-white px-6 py-3 rounded-2xl cursor-pointer hover:bg-[#267c15] transition-colors font-medium text-lg'>
                  Start Your Journey Now
                  <span className="ml-2"><MdNavigateNext size={22} className='text-white' /></span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TaskHeroSection;
