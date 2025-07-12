import React from 'react';
// import { LuUserCheck, LuFileText, LuRocket } from 'react-icons/lu';

const steps = [
  {
    title: "Sign Up & Choose a Domain",
    description: 'Explore a wide range of internships across various industries, tailored to match your skills.',
  },
  {
    title: 'Fill out the Desired Form',
    description: 'Fill out a quick application form to and secure your internship opportunity.',
  },
  {
    title: 'Earn Your Certificate',
    description: 'Complete your internship, gain valuable hands-on experience, and receive a certificate',
  },
];

const Work = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left: Heading */}
        <div className=" mt-38 md:w-1/2">
          <p className="text-sm font-semibold bg-gray-700 text-white px-3 py-1 rounded-full w-max mb-4">
            How it works
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-snug">
            A Simple and Seamless <br />
            Process to Start Your <br />
            Internship Journey
          </h1>
        </div>

        {/* Center: Vertical Steps Diagram */}
        <div className="hidden lg:flex flex-col items-center justify-center ml-12">
          <div className="h-15 border-l-2 border-dashed border-gray-600"></div>
          <div className="w-22 h-12 rounded-3xl bg-[#41a223] flex items-center justify-center text-white font-semibold">
            Step 1
          </div>
          <div className="h-35 border-l-2 border-dashed border-gray-600"></div>
          <div className="w-22 h-12 rounded-3xl bg-[#1b1b1b] flex items-center justify-center text-white font-semibold">
            Step 2
          </div>
          <div className="h-35 border-l-2 border-dashed border-gray-600"></div>
          <div className="w-22 h-12 rounded-3xl bg-[#1b1b1b] flex items-center justify-center text-white font-semibold">
            Step 3
          </div>
          <div className="h-20 border-l-2 border-dashed border-gray-600"></div>
        </div>

        {/* Right: Steps Content */}
        <div className="md:w-1/2 grid grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <div className='bg-[#132f0a] px-10 py-8 rounded-2xl' key={index}>
              <h1 className='text-xl font-semibold mt-2 text-white'>{step.title}</h1>
              <p className='text-gray-300 mt-5 text-sm'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button Below Steps */}
      {/* Button Below Steps */}
<div className='flex items-center justify-center ml-28 -mt-10 mb-12'>
  <button className='bg-[#41a223] text-white text-lg font-semibold px-10 py-5 rounded-3xl hover:bg-green-700 transition cursor-pointer'>
    Get Started Now
  </button>
</div>

    </>
  );
};

export default Work;
