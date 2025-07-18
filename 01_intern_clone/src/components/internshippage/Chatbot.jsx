import React from "react";
import Dialogflow from "../../assets/images/image/chatbot/dialogflow.png";
import Alexa from "../../assets/images/image/chatbot/alexa.png";
import RASA from "../../assets/images/image/chatbot/rasa.png";
import Genrative from "../../assets/images/image/chatbot/genrative.png";
import Salesforce from "../../assets/images/image/chatbot/salesforce.png";

import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

const cards = [
  {
    img: Dialogflow,
    title: "Dialogflow Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: Alexa,
    title: "Alexa Skill Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: RASA,
    title: "RASA Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: Genrative,
    title: "Generative AI Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
  {
    img: Salesforce,
    title: "Salesforce CRM Internship",
    locationtype: "Remote",
    durationtype: "2 months",
  },
];

const Chatbox = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      {/* Header Section */}
      <div className="bg-[#004207] rounded-2xl mx-auto max-w-6xl py-12 px-8 text-center shadow-lg">
        <h3 className="text-white text-5xl font-bold">Chatbot Development</h3>
      </div>

      {/* Subtitle */}
      <div className="text-center mt-16">
        <h1 className="text-4xl text-[#43a724] font-bold">
          Explore Your Next Internship
        </h1>
        <p className="text-white text-lg mt-2">
          Handpicked opportunities to elevate your career.
        </p>
      </div>

      {/* Internship Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-16 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-white w-[340px] sm:w-[360px] rounded-2xl overflow-hidden shadow-md hover:shadow-green-500/50 transition-transform hover:scale-105 duration-300 flex flex-col"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-56 object-contain bg-black p-4"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-white text-2xl font-bold">{card.title}</h2>
              <p className="text-white text-sm mt-3 flex items-center">
                <GrLocation className="text-green-500 mr-2" />
                {card.locationtype}
              </p>
              <p className="text-white text-sm mt-2 flex items-center">
                <FaRegClock className="text-blue-500 mr-2" />
                {card.durationtype}
              </p>
              <p className="text-gray-400 text-sm mt-1">Internship</p>

              <button className="mt-10 w-full h-10 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
