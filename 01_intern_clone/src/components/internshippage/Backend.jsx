import React from "react";
import { useNavigate } from "react-router-dom"; // ← Import this

import mern from "../../assets/images/image/backend/mean.png";
import mernstack from "../../assets/images/image/backend/mern.png";
import php from "../../assets/images/image/backend/php.png";
import web from "../../assets/images/image/backend/web3.png";
import node from "../../assets/images/image/backend/nodejs.png";
import Python from "../../assets/images/image/backend/download.jpeg";

import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

const cards = [
  {
    img: mern,
    title: "MEAN Stack Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: php,
    title: "PHP Development",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: web,
    title: "Web 3.0 Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: node,
    title: "NodeJS Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: mernstack,
    title: "MERN Stack Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: Python,
    title: "Python Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
];

const Backend = () => {
  const navigate = useNavigate(); // ← Hook for navigation

  const handleApplyClick = () => {
    navigate("/Form"); // ← Navigate to form page
  };

  return (
    <div className="mt-20 min-h-screen bg-black">
      {/* Header */}
      <div className="flex bg-[#004207] mt-26 p-24 rounded-2xl mx-20 justify-center items-center text-center">
        <h3 className="text-white text-5xl font-bold">Backend Development</h3>
      </div>

      {/* Title */}
      <div className="flex flex-col mt-16 items-center justify-center">
        <h1 className="text-4xl text-[#43a724] font-bold">
          Explore Your Next Internship
        </h1>
        <p className="text-white text-lg mt-2">
          Handpicked opportunities to elevate your career.
        </p>
      </div>

      {/* Cards */}
      <div className="rounded-2xl flex flex-wrap justify-between p-20 border-white gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-white w-[380px] rounded-2xl flex flex-col relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg bg-[#121212] min-h-[500px]"
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-70 object-contain bg-[#121212] p-4 rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-white text-2xl font-bold">{card.title}</h2>
              <p className="text-white text-sm mt-2 flex items-center gap-1">
                <GrLocation size={20} className="text-green-500 mr-1" />
                {card.locationtype}
              </p>
              <p className="text-white text-sm mt-2 flex items-center gap-1">
                <FaRegClock size={20} className="text-blue-500 mr-1" />
                {card.durationtype}
              </p>
              <p className="text-gray-400 text-sm mt-1">Internship</p>

              <button
                onClick={handleApplyClick} // ← Add click handler
                className="mt-auto w-full h-10 cursor-pointer bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
