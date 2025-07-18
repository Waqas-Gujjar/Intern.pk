import React from 'react';
import Rebortimage from "../../assets/images/rebort.jpg";
import { LuBrain } from "react-icons/lu";

const AiCareer = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={Rebortimage}
        alt="AI Career"
        className="w-full h-full object-cover opacity-30"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 space-y-6">
        {/* Tagline */}
        <div className="text-center text-[#43a624] bg-[#192216] px-4 py-2 rounded-3xl flex items-center gap-2 text-sm md:text-base">
          <LuBrain size={20} />
          <p>Your AI Career Journey</p>
        </div>

        {/* Headings */}
        <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold space-y-2">
          <h1>AI Career Coach: Your</h1>
          <h1>Ultimate Guide to Building a</h1>
          <h1>Successful AI Career</h1>
        </div>

        {/* Description */}
        <div className="text-gray-300 text-sm sm:text-base md:text-lg">
          <p>
            Looking to kickstart your career in the AI industry? Our AI Career Coach
            platform offers expert guidance in resume building, cover letter creation,
            interview preparation, quizzes, and industry insights—all designed to help
            you land your dream job in Artificial Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiCareer;
