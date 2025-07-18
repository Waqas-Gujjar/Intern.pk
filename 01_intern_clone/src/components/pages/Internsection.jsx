// src/components/Internsection.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import { motion } from "framer-motion";

// Images
import graphic from "../../assets/images/graphics.png";
import backend from "../../assets/images/BackendDevelopment.jpg";
import chatbot from "../../assets/images/chatbot.jpg";
import frontend from "../../assets/images/frontend.png";
import machine from "../../assets/images/machine.jpg";
import mobile from "../../assets/images/mobile-app.jpg";

// Internship data
const internships = [
  { title: "Graphic Design", image: graphic, slug: "graphic-design" },
  { title: "Frontend Development", image: frontend, slug: "frontend-dev" },
  { title: "Backend Development", image: backend, slug: "backend-dev" },
  { title: "Mobile App Development", image: mobile, slug: "mobile-dev" },
  { title: "AI / Machine Learning", image: machine, slug: "ai-ml" },
  { title: "Chatbot Development", image: chatbot, slug: "chatbot-dev" },
];

// Slug-to-path mapping
const slugToPath = {
  "graphic-design": "/GraphicDesign-internship",
  "frontend-dev": "/FrontEnd-internship",
  "backend-dev": "/Backend-internship",
  "mobile-dev": "/MobileApp-internship",
  "ai-ml": "/Other-Internship",
  "chatbot-dev": "/chatbot-internship",
};

const Internsection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 flex justify-center flex-col items-center"
      >
        <div className="bg-[#1f2a38] rounded-full font-semibold flex items-center px-3 py-1 text-sm">
          <span className="text-black bg-[#e4e6eb] px-4 py-1 rounded-full">
            Trending
          </span>
          <h1 className="text-[#e4e6eb] ml-4">
            Explore Internships Opportunities
          </h1>
        </div>
        <div className="mt-10 text-white text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          <h1>Your Dream Internship is Just One</h1>
          <h1>Click Away!</h1>
        </div>
      </motion.div>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 lg:px-24 py-16">
        {internships.map(({ title, image, slug }, index) => (
          <motion.div
            key={slug}
            className="bg-[#121212] rounded-xl shadow-lg hover:shadow-[#42a824]/40 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => navigate(slugToPath[slug])}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={image}
              alt={title}
              className="rounded-t-xl w-full h-[14rem] object-cover"
            />
            <div className="p-4">
              <h1 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h1>

              <Link
                to={slugToPath[slug]}
                className="flex items-center gap-2 text-[#42a824] text-lg font-medium group"
                onClick={(e) => e.stopPropagation()}
              >
                <BsArrowBarRight
                  size={28}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                <span>Apply Now</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Internsection;
