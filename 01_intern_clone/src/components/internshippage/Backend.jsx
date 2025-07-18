import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/Form");
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      {/* Header */}
      <div className="bg-[#004207] rounded-2xl mx-auto max-w-6xl py-12 px-6 text-center">
        <h3 className="text-white text-3xl md:text-5xl font-bold">Backend Development</h3>
      </div>

      {/* Title */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl text-[#43a724] font-bold">
          Explore Your Next Internship
        </h1>
        <p className="text-white text-base md:text-lg mt-2">
          Handpicked opportunities to elevate your career.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-16 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-white w-full sm:w-[300px] md:w-[360px] rounded-2xl overflow-hidden shadow-md hover:shadow-green-600/40 transition-transform hover:scale-105 duration-300 flex flex-col"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-60 object-contain bg-black p-4"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-white text-2xl font-bold">{card.title}</h2>
              <p className="text-white text-sm mt-3 flex items-center">
                <GrLocation className="text-green-500 mr-2" /> {card.locationtype}
              </p>
              <p className="text-white text-sm mt-2 flex items-center">
                <FaRegClock className="text-blue-500 mr-2" /> {card.durationtype}
              </p>
              <p className="text-gray-400 text-sm mt-1">Internship</p>

              <button
                onClick={handleApplyClick}
                className="w-full h-10 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition duration-300 mt-6"
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
