import React from 'react';
import image from '../../../../assets/images/GraduatProgramimage/image1.jpg';

const HealthCareExplore = () => {
  return (
    <div className="w-full bg-black px-4 lg:px-20 py-16 text-white">
      <div
        className="w-full rounded-[30px] mx-auto px-6 md:px-16 py-30 mt-13 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for same color tone & blur effect */}
        <div className="absolute inset-0 bg-[#5d7f6f]/95 backdrop-blur-sm rounded-[30px]"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Health Care</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Step into the world where every second counts and lives are changed. Whether it's assisting in patient care,
            supporting medical research, or exploring health tech innovation our internships put you at the heart of the action.
            Join the frontlines of impact and make your mark in the future of healthcare.
          </p>
        </div>
        
      </div>
      <div className='flex flex-col gap-4 items-center justify-center mt-15' >
            <h3 className='text-4xl font-bold'>Explore Internship Subcategories</h3>
            <p className='text-xl text-gray-300'>Discover opportunities under the Health Care category.</p>
        </div>
    </div>
  );
};

export default HealthCareExplore;
