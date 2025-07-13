// src/components/Internsection.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Images
import graphic   from "../../assets/images/graphics.png";
import backend   from "../../assets/images/BackendDevelopment.jpg";
import chatbot   from "../../assets/images/chatbot.jpg";
import frontend  from "../../assets/images/frontend.png";
import machine   from "../../assets/images/machine.jpg";
import mobile    from "../../assets/images/mobile-app.jpg";

import { BsArrowBarRight } from "react-icons/bs";

// Data array
const internships = [
  { title: "Graphic Design",         image: graphic,  slug: "graphic-design" },
  { title: "Frontend Development",   image: frontend, slug: "frontend-dev"   },
  { title: "Backend Development",    image: backend,  slug: "backend-dev"    },
  { title: "Mobile App Development", image: mobile,   slug: "mobile-dev"     },
  { title: "AI / Machine Learning",  image: machine,  slug: "ai-ml"          },
  { title: "Chatbot Development",    image: chatbot,  slug: "chatbot-dev"    },
];

// Slug → Route mapping
const slugToPath = {
  "graphic-design": "/GraphicDesign-internship",
  "frontend-dev"  : "/FrontEnd-internship",
  "backend-dev"   : "/Backend-internship",
  "mobile-dev"    : "/MobileApp-internship",
  "ai-ml"         : "/Other-Internship",
  "chatbot-dev"   : "/chatbot-internship",
};

const Internsection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <div className="mt-25 flex justify-center flex-col items-center">
        <div className="bg-[#1f2a38] rounded-full font-semibold flex justify-center items-center px-2 py-1 text-sm">
          <span className="text-black px-4 bg-[#e4e6eb] p-1 rounded-full">
            Trending
          </span>
          <h1 className="text-[#e4e6eb] ml-5">Explore Internships Opportunities</h1>
        </div>
        <div className="mt-10 text-white text-5xl flex flex-col items-center font-semibold">
          <h1>Your Dream Internship is Just One</h1>
          <h1>Click Away!</h1>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-30 py-16">
        {internships.map(({ title, image, slug }) => (
          <div
            key={slug}
            className="w-full rounded-xl h-[23rem] bg-[#121212] hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate(slugToPath[slug])}   // puri card pe click
          >
            <img
              src={image}
              alt={title}
              className="rounded-t-xl w-full h-[60%] object-cover"
            />
            <div className="p-4">
              <h1 className="text-white text-2xl font-semibold">{title}</h1>

              {/* Apply Now button */}
              <Link
                to={slugToPath[slug]}
                className="flex items-center gap-2 text-[#42a824] mt-2 text-lg font-medium group"
                onClick={(e) => e.stopPropagation()} // taake parent onClick trigger na ho
              >
                <BsArrowBarRight
                  size={30}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                <span>Apply Now</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Internsection;
