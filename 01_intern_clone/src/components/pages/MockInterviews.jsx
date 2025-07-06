import React from 'react';
import mockInterview from '../../assets/images/group.jpg';
import { LuBrain, LuMessageSquare } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { LiaCertificateSolid } from "react-icons/lia";
import { BiSignal3 } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

// Top Cards
const cardsData = [
    {
        icon: <LuMessageSquare size={30} className="text-green-400" />,
        title: "Realistic AI Interview Simulations",
        description:
            "Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness.",
    },
    {
        icon: <LuBrain size={50} className="text-green-400" />,
        title: "Smart Feedback with AI",
        description:
            "Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates.",
    },
    {
        icon: <FiTarget size={30} className="text-green-400" />,
        title: "Role-Based Mock Interviews",
        description:
            "Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform.",
    },
];

// Bottom Cards
const cardsData2 = [
    {
        icon: <LiaCertificateSolid size={30} className="text-green-400" />,
        title: "Get Certified",
        description: "Earn recognized certifications through virtual internships at Internee.pk.",
    },
    {
        icon: <BiSignal3 size={30} className="text-green-400" />,
        title: "Real-Time Interview Feedback",
        description: "Get instant feedback on your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates.",
    },
    {
        icon: <FiFileText size={30} className="text-green-400" />,
        title: "Role-Based Mock Interviews",
        description: "Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform.",
    },
];

const MockInterviews = () => {
    const bgColors = ['#1e272e', '#1f2f2e', '#2e1f2e'];

    return (
        <div className="relative w-full min-h-screen bg-black text-white">
            {/* Background Image */}
            <img
                src={mockInterview}
                alt="Mock Interview"
                className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            />

            <div>
                {/* Hero Section */}
                <div className="relative z-10 w-full h-full px-6 py-20 flex items-center justify-center">
                    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Left Column */}
                        <div className="flex flex-col justify-center mt-16">
                            <div className="inline-flex items-center bg-green-800/50 rounded-full px-4 py-3 mb-4 w-max">
                                <LuBrain className="text-green-400 mr-2" size={20} />
                                <span className="text-green-400 text-sm font-medium">AI Mock Interviews</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                AI Mock Interview Platform for Virtual Internships in Pakistan
                            </h1>

                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Prepare for <strong>technical</strong>, <strong>marketing</strong>, or <strong>business interviews</strong> with our AI-powered mock interview system.
                                Join <strong>Internee.pk’s virtual internship program</strong> to get unlimited access, real-time feedback, and role-specific practice.
                            </p>

                            {/* CTA Button */}
                            <div className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-10 rounded-2xl cursor-pointer transition w-max">
                                <span className="text-xl font-semibold">Apply Now for Virtual Internship</span>
                                <IoIosArrowForward size={18} className="text-white" />
                            </div>
                        </div>

                        {/* Right Column Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            {cardsData.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1f1f1f] px-6 py-5 rounded-2xl border border-gray-800 hover:scale-[1.02] transition-all duration-300 shadow-sm h-40 flex flex-col justify-start"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-[#2b2b2b] p-3 rounded-xl flex justify-center items-center w-16 h-16">
                                            {card.icon}
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-lg md:text-xl font-semibold mb-1">{card.title}</h2>
                                            <p className="text-lg text-gray-300">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Bottom Cards: Icon on Top */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-6 py-10">
                    {cardsData2.map((card, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: bgColors[index] }}
                            className="px-6 py-6 rounded-2xl  hover:scale-[1.02] transition-all duration-300 shadow-sm h-auto flex flex-col items-start gap-4"
                        >
                            {/* Icon on top */}
                            <div className=" p-3  flex justify-center items-center w-16 h-16">
                                {card.icon}
                            </div>

                            {/* Heading & Paragraph below */}
                            <div className="flex flex-col justify-start text-left">
                                <h2 className="text-white text-lg font-semibold ">{card.title}</h2>
                                <p className="text-gray-300 text-sm">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MockInterviews;
