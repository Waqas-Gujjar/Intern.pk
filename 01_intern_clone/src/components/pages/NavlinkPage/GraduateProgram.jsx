import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import healthcare from '../../../assets/images/GraduatProgramimage/image1.jpg';
import engineering from '../../../assets/images/GraduatProgramimage/image2.jpg';
import technology from '../../../assets/images/GraduatProgramimage/image3.jpg';

const categories = [
  {
    title: 'Healthcare',
    image: healthcare,
    description:
      'Step into the world where every second counts and lives are changed. Whether it\'s assisting in patient care, supporting medical research, or exploring health tech innovation — our internships put you at the heart of the action.',
    path: '/healthcare-explore'
  },
  {
    title: 'Engineering',
    image: engineering,
    description:
      'Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver\'s seat of innovation.',
    path: '/engineering-explore'
  },
  {
    title: 'Technology',
    image: technology,
    description:
      'Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity and data analytics, our IT internships equip you to lead the tech revolution.',
    path: '/it-explore'
  },
];

const GraduateProgram = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white w-full mt-30 px-4 sm:px-6 lg:px-20 py-16 flex justify-center text-center flex-col items-center gap-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-5 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold">Graduate Programs</h1>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
          Explore our comprehensive graduate programs designed to advance your career and <br /> expand your knowledge.
        </p>
      </div>

      {/* Section Title */}
      <div className="mt-10">
        <h3 className="text-2xl sm:text-3xl font-semibold">Explore Categories</h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-6 w-full px-2 sm:px-0">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(category.path)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col gap-4 bg-[#111] p-5 rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 sm:h-56 object-cover rounded-xl"
            />

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold hover:text-green-400 transition-colors duration-300">
              {category.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{category.description}</p>

            {/* Glow Light Effect Under Card */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[80%] h-[4px] bg-green-500/30 blur-lg rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GraduateProgram;
