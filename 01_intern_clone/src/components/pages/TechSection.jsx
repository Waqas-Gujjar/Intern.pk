import React from 'react';
import { FiUploadCloud, FiDollarSign } from "react-icons/fi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdOutlineVerified, MdNavigateNext } from "react-icons/md";

const cardData = [
  {
    icon: <FiUploadCloud className='text-[#43a724] text-3xl' />,
    title: 'Upload Tutorials & Exercises',
    description: 'Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.',
    link: '#'
  },
  {
    icon: <FiDollarSign className='text-[#43a724] text-3xl' />,
    title: 'Earn from Your Expertise',
    description: 'Internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge.',
    link: '#'
  },
  {
    icon: <FaHandshakeAngle className='text-[#43a724] text-3xl' />,
    title: 'Build Your Instructor Profile',
    description: 'Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space.',
    link: '#'
  },
  {
    icon: <MdOutlineVerified className='text-[#43a724] text-3xl' />,
    title: 'Fair Revenue Sharing',
    description: 'We keep it transparent. Join internee.pk and benefit from a fair model that pays you well — all while gaining experience in virtual internships.',
    link: '#'
  }
];

const TechSection = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#121212] py-16 px-4'>

      {/* Heading */}
      <div className='flex flex-col items-center text-center gap-4 max-w-4xl'>
        <h1 className='text-5xl text-white font-bold'>Tech Instructor or Content Creator?</h1>

        <p className='text-gray-300 text-base max-w-2xl leading-relaxed'>
          Join Internee.pk’s mission to educate and empower tech enthusiasts. 
          Whether you're a software engineer, UI/UX designer, or cloud expert, 
          start teaching in your own language and inspire the next generation.
        </p>

        <p className='text-[#43a724] text-xl font-semibold'>
          Create in Your Native Language & Start Earning
        </p>

        <button className='bg-[#43a724] text-white text-xl font-semibold px-6 py-3 rounded-2xl hover:bg-[#2e8e1a] transition-colors mt-4 cursor-pointer'>
          Start Teaching Today
        </button>
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-6xl'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='bg-[#1e1e1e] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col gap-4 text-left'
          >
            {/* Icon with background */}
            <div className='bg-[#2c2c2c] p-3 rounded-xl w-fit'>
              {card.icon}
            </div>

            <h2 className='text-white text-2xl font-bold'>{card.title}</h2>

            {/* Description limited to 3 lines */}
            <p className="text-gray-300 text-sm leading-[1.6rem] max-h-[4.8rem] overflow-hidden">
              {card.description}
            </p>

            <a
              href={card.link}
              className='text-[#43a724] flex items-center gap-1 text-sm font-medium hover:underline'
            >
              Learn More <MdNavigateNext className='text-xl' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
