import React from 'react';
import graphic from "../../assets/images/graphics.png";
import backend from "../../assets/images/BackendDevelopment.jpg";
import chatbot from "../../assets/images/chatbot.jpg";
import frontend from "../../assets/images/frontend.png";
import machine from "../../assets/images/machine.jpg";
import mobile from "../../assets/images/mobile-app.jpg";
import { BsArrowBarRight } from "react-icons/bs";

// Data array of internship cards
const internships = [
  {
    title: "Graphic Design",
    image: graphic,
  },
  {
    title: "Frontend Development",
    image: frontend,
  },
  {
    title: "Backend Development",
    image: backend,
  },
  {
    title: "Mobile App Development",
    image: mobile,
  },
  {
    title: "AI / Machine Learning",
    image: machine,
  },
  {
    title: "Chatbot Development",
    image: chatbot,
  },
];

const Internsection = () => {
  return (
    <>
      <div className='mt-25 flex justify-center flex-col items-center'>
        <div className='bg-[#1f2a38] rounded-full font-semibold flex justify-center items-center px-2 py-1 text-sm'>
          <span className='text-black px-4 bg-[#e4e6eb] p-1 rounded-full'>Trending</span>
          <h1 className='text-[#e4e6eb] ml-5'>Explore Internships Opportunities</h1>
        </div>
        <div className='mt-10 text-white text-5xl flex flex-col items-center font-semibold'>
          <h1>Your Dream Internship is Just One</h1>
          <h1>Click Away!</h1>
        </div>
      </div>

      {/* Internship cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-30 py-16'>
        {internships.map((item, index) => (
          <div
            key={index}
            className='w-full rounded-xl h-[23rem] bg-[#121212] hover:scale-105 transition duration-300 cursor-pointer'
          >
            <img src={item.image} alt={item.title} className='rounded-t-xl w-full h-[60%] object-cover' />
            <div className='p-4'>
              <h1 className='text-white text-2xl font-semibold'>{item.title}</h1>
              <div className='flex items-center gap-2 text-[#42a824] mt-2 text-lg font-medium'>
                <BsArrowBarRight size={'30px'} />
                <span>Apply Now</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Internsection;
