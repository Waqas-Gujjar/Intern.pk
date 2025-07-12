import React from 'react'

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

const InternShipCard = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
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
    
    
    </>
  )
}

export default InternShipCard