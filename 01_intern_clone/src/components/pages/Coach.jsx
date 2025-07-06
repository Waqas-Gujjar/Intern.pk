import React from 'react';
import { FiPenTool, FiBookOpen, FiDollarSign } from 'react-icons/fi';
import { GoPeople } from 'react-icons/go';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { LuTrophy } from "react-icons/lu";
import { BsStars } from "react-icons/bs";


const Coach = () => {
  const cards = [
    {
      title: "AI Resume Building",
      description: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
      icon: <FiPenTool size={30} className="text-[#42a824]" />
    },
    {
      title: "Cover Letter Creation",
      description: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
      icon: <FiBookOpen size={30} className="text-[#42a824]" />
    },
    {
      title: "Interview Preparation",
      description: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
      icon: <GoPeople size={30} className="text-[#42a824]" />
    },
    {
      title: "Industry Insights",
      description: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
      icon: <RiLightbulbFlashLine size={30} className="text-[#42a824]" />
    }
  ];

  const whyChoose = [
    {
      title: "Comprehensive Guidance",
      description: "Everything you need to succeed in the AI industry",
      icon: <LuTrophy size={30} className="text-[#42a824]" />
    },
    {
      title: "Industry-Ready Insights",
      description: "Stay updated on the latest AI trends",
      icon: <BsStars size={30} className="text-[#42a824]" />
    },
    {
      title: "Monetization Options",
      description: "Share your AI knowledge and earn income",
      icon: <FiDollarSign size={28} className="text-[#42a824]" />
    }
  ];

  return (
    <div className="bg-[#121212] py-20 px-6">
      {/* First Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-14">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-2xl p-6 h-full border border-gray-800 hover:scale-[1.02] transition-all duration-300 flex flex-col items-start"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-[#2c2c2c] rounded-2xl p-3">
                {card.icon}
              </div>
              <h2 className="text-white text-xl font-semibold">{card.title}</h2>
            </div>
            <p className="text-gray-300 text-sm">{card.description}</p>
          </div>
        ))}

        {/* Monetize Section */}
        <div className="sm:col-span-2 mt-20">
          <div className="flex flex-col justify-center bg-[#1e1e1e] p-10 rounded-2xl items-center w-full">
            <div className="bg-[#222c1f] rounded-2xl px-6 py-2 flex items-center gap-2">
              <FiDollarSign size={20} className="text-[#42a824]" />
              <p className="text-[#42a824] font-semibold">Monetize Your Expertise</p>
            </div>
            <h1 className="text-gray-200 text-3xl md:text-4xl font-semibold mt-7 text-center">
              Share Your Knowledge & Earn
            </h1>
            <p className="text-gray-300 mt-6 font-semibold text-center leading-relaxed">
              Are you an AI expert? Share your knowledge through courses, tutorials, or content.  
              Build your personal <br /> brand and generate income while helping others succeed in their AI careers.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section Title */}
      <div className='flex justify-center items-center mt-28 mb-10'>
        <h1 className='text-white text-4xl font-semibold text-center'>Why Choose AI Career Coach?</h1>
      </div>

      {/* Why Choose Cards */}
      <div className="max-w-7xl mt-20 justify-center items-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChoose.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-2xl p-6 h-full border flex flex-col justify-center items-center border-gray-800 hover:scale-[1.02] transition-all duration-300 text-center"
          >
            <div className="mb-4 flex flex-col items-center justify-center gap-2">
              <div className="p-3">
                {item.icon}
              </div>
              <h2 className="text-white text-xl font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-500 font-semibold text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coach;
