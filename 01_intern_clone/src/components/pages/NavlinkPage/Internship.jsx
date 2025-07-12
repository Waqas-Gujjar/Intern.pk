import React from 'react';
import graphic from "../../../assets/images/graphics.png";
import chatbot from "../../../assets/images/chatbot.jpg";
import machine from "../../../assets/images/machine.jpg";
import frontend from "../../../assets/images/frontend.png";
import backend from "../../../assets/images/BackendDevelopment.jpg";
import mobile from "../../../assets/images/mobile-app.jpg";

const internships = [
  { title: "Graphic Design", image: graphic },
  { title: "Chatbot Development", image: chatbot },
  { title: "Other Internships", image: machine },
  { title: "Frontend Internship", image: frontend },
  { title: "Backend Development", image: backend },
  { title: "Mobile App Development", image: mobile },
];

const Internship = () => {
  return (
    <div className="bg-black text-white w-full px-6 lg:px-20 py-16">

      {/* Top Hero Section */}
      <div className="flex flex-col lg:flex-row mt-30 justify-between items-center gap-10 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">Unlock Your Future</h1>
          <p className="text-gray-300 text-lg font-medium mb-6">
            Discover world-class internships and gain hands-on experience with top <br className="hidden lg:block" /> industry leaders.
          </p>
          <button className="bg-[#43a724] text-white px-6 py-3 font-semibold text-lg rounded-xl hover:bg-green-700 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="lg:w-[40%] flex justify-center">
          <div className="bg-[#43a724] text-white px-10 py-6 rounded-xl text-center shadow-lg">
            <h2 className="text-2xl font-bold">Find Your Dream Internship Today!</h2>
          </div>
        </div>
      </div>

      {/* Internship Category Section */}
      <div className='bg-[#121212] p-20 rounded-2xl'>


        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-500 mb-4">Explore Internship Categories</h2>
          <p className="text-gray-300 text-lg">
            Choose from a wide range of internship opportunities and kickstart your professional journey.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={intern.image}
                alt={intern.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{intern.title}</h3>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-15 cursor-pointer rounded-2xl">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
