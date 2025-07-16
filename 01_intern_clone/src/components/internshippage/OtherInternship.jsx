import React from "react";
import datascince from "../../assets/images/image/other/DataScience.jpg";
import cyber from "../../assets/images/image/other/cyber.jpg";
import social from "../../assets/images/image/other/social.jpg";
import cloud from "../../assets/images/image/other/cloud.png";
import dataanaly from "../../assets/images/image/other/dataanaly.jpg";
import machine from "../../assets/images/image/other/machine.jpg";
import video from "../../assets/images/image/other/video.jpg";



import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

const cards = [
  {
    img: datascince,
    title: "Data Science Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: cyber,
    title: "Cyber Security Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: social,
    title: "Social Media Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: cloud,
    title: "Cloud Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
   {
    img: dataanaly,
    title: "Data Analyst",
    locationtype: "Remote",
    durationtype: "2 months",
  },
   {
    img: machine,
    title: "Machine Learning",
    locationtype: "Remote",
    durationtype: "2 months",
  },
   {
    img: video,
    title: "Video Editing Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
];

const MobileApp = () => {
  return (
    <div className="mt-20 min-h-screen bg-black">
      {/* Header */}
      <div className="flex bg-[#004207] mt-26 p-24 rounded-2xl mx-20 justify-center items-center text-center">
        <h3 className="text-white text-5xl font-bold">Other Internships</h3>
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
      <div className="rounded-2xl flex flex-wrap justify-between p-20 border-white gap-x-6 gap-y-10">
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
              <p className="text-white text-sm mt-2  gap-1 flex items-center">
                <GrLocation size={20} className="text-green-500 mr-1" />
                {card.locationtype}
              </p>
              <p className="text-white text-sm mt-2 gap-1 flex items-center">
                <FaRegClock size={20} className="text-blue-500 mr-1" />
                {card.durationtype}
              </p>
              <p className="text-gray-400 text-sm mt-1">Internship</p>

              <button className="mt-auto w-full h-10 cursor-pointer bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileApp;
