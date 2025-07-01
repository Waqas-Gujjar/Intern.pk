import React from 'react';
import image from '../../assets/images/Group.png';
import Collaborated from './Collaborated';
import { FaArrowRight } from "react-icons/fa";



const Home = () => {
    return (
        <>
        <div className="bg-black h-screen w-full flex items-center px-10">
            <div className="flex w-full justify-between items-center p-8">
                {/* Left Side */}
                <div className="w-1/2 space-y-6 pr-10">
                    <h1 className="text-7xl font-bold text-white leading-[4.7rem]">
                        Looking for <br />
                        <span className="text-[#42a824]">dream internship?</span>
                    </h1>

                    <p className="text-lg 2xl:text-xl text-gray-400 md:w-10/12">
                        Internee.pk kickstarts students' tech careers with first internships, providing industry exposure,
                        practical skills, and networking opportunities.
                    </p>

                    {/* Buttons below the text */}
                    <div className="flex gap-4 pt-4">
                        <button className="flex items-center gap-2 bg-[#42a824] text-xl hover:bg-green-700 cursor-pointer text-white px-8 py-4 rounded-2xl font-semibold ">
                            Our Job Portal
                        </button>
                        <button className="bg-[#1e2536] flex justify-between items-center gap-2 hover:bg-gray-500 cursor-pointer text-white px-10 py-4 rounded-2xl text-xl font-semibold transition">
                            Dashboard
                            <FaArrowRight size={20} className='text-white  rounded-full ' />
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 pt-24">
                    <img src={image} alt="Internship illustration" className="w-[42rem] h-auto object-contain" />
                </div>
            </div>
        </div>
        <Collaborated />
        </>
    );
};

export default Home;
