import React from 'react';
import photoshops from '../../assets/images/images/graphic/Photoshop.png';
import ai        from '../../assets/images/images/graphic/ai.png';
import figma     from '../../assets/images/images/graphic/figma.png';
import maya      from '../../assets/images/images/graphic/maya.png';
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

/* ---------- card data ---------- */
const cards = [
  { img: photoshops, title: 'Photoshop Internship' },
  { img: ai,        title: 'Illustrator Internship' },
  { img: figma,     title: 'Figma Internship' },
  { img: maya,      title: 'Maya 3D Internship' },
];

const GraphicDesign = () => {
  return (
    <>
      <div className="mt-20 min-h-screen bg-black">
        <div className="flex bg-[#004207] mt-28 p-24 rounded-2xl mx-20 justify-center items-center text-center">
          <h3 className="text-white text-5xl font-bold">Graphic Design</h3>
        </div>

        <div className="flex flex-col mt-16 items-center justify-center">
          <h1 className="text-4xl text-[#43a724] font-bold">Explore Your Next Internship</h1>
          <p className="text-white text-lg mt-2">Handpicked opportunities to elevate your career.</p>
        </div>

        {/* ---------- Internship Cards ---------- */}
        <div className="flex flex-wrap gap-10 justify-center mx-26 my-8 mt-12">
          {cards.map(({ img, title }, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-white rounded-2xl hover:shadow-bottom hover:shadow-md shadow-white w-[25.5rem] h-[32.4rem] text-white transition-all duration-300"
            >
              {/* logo */}
              <div className="flex justify-center -mt-10">
                <img src={img} alt={title} className="w-92 overflow-y-hidden" />
              </div>

              {/* title */}
              <h3 className="text-2xl font-bold -mt-8 px-8">{title}</h3>

              {/* location */}
              <div className="flex items-center gap-2 px-8 text-green-400 mt-4">
                <GrLocation />
                <span className="text-white">Remote</span>
              </div>

              {/* duration */}
              <div className="flex items-center gap-2 px-8 text-blue-400 mt-2">
                <FaRegClock />
                <span className="text-white">2 months</span>
              </div>

              <p className="text-gray-400 px-8 mt-2">Internship</p>

              {/* button */}
              <div className="mt-6 flex items-center justify-center">
                <button className="w-80 cursor-pointer bg-[#004d08] hover:bg-green-800 text-white py-3 px-4 rounded-xl font-semibold">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GraphicDesign;
