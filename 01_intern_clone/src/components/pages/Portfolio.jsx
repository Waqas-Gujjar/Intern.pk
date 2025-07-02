import React from 'react';
import bgImage from '../../assets/images/main.jpg'; // replace with your actual path

const TaskHeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-16 max-w-4xl">
        <div className="inline-block mb-5 px-4 py-2 rounded-full bg-green-800/50 text-green-300 text-sm font-medium">
          🔗 Task Management Platform
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Master Real-World Skills with Our Task Portal at <br /> <span className="text-white">internee.pk</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-normal leading-relaxed">
          Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn,
          and grow with industry-standard projects from our <span className="font-semibold text-white">virtual internships</span> on <span className="font-semibold text-white">internee.pk</span>.
        </p>
      </div>
    </div>
  );
};

export default TaskHeroSection;
