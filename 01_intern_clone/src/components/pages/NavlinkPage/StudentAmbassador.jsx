import React from "react";
import background from "../../../assets/images/studentambassador/background.jpg";
import photo from "../../../assets/images/studentambassador/photo.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { FiCheckSquare } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { IoCode } from "react-icons/io5";

const cardData = [
  {
    id: 1,
    icon: <SlNotebook size={40} />,
    title: "Get Started",
    desc: "Become a Student Ambassador",
  },
  {
    id: 2,
    icon: <GoPeople size={40} />,
    title: "Build Community",
    desc: "Connect with like-minded peers",
  },
  {
    id: 3,
    icon: <FiCheckSquare size={40} />,
    title: "Hands-on Projects",
    desc: "Gain real-world experience",
  },
  {
    id: 4,
    icon: <GoTrophy size={40} />,
    title: "Achieve Recognition",
    desc: "Get rewarded for your impact",
  },
];

const card = [
  {
    id: 1,
    icon: <FaGraduationCap size={40} />,
    title: "Learn and Grow",
    desc: "Access exclusive learning resources and certifications to build your technical skills.",
  },
  {
    id: 2,
    icon: <GoPeople size={40} />,
    title: "Build Community",
    desc: "Connect with fellow students and mentors from around the world.",
  },
  {
    id: 3,
    icon: <IoCode size={40} />,
    title: "Create Solutions",
    desc: "Work on real projects using cutting-edge Internees technologies.",
  },
];

const StudentAmbassador = () => {
  return (
    <div className="w-full bg-[#121212] h-[135rem] relative">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="w-full h-[600px] object-cover opacity-30 rounded-xl"
      />

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex mt-70 ml-25">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-snug">
          Internee.pk <br />
          Student Ambassadors
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-[-9rem] relative  h-screen ">
        <div className="bg-[#1e1e1e] ml-25 flex flex-col items-start h-[60rem]   mr-5 px-8 py-6   rounded-xl shadow-lg">
          <h1 className="text-white text-xl font-semibold">
            Become a Student Ambassador
          </h1>
          <div className="mt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-gray-300 text-base md:text-lg font-sm max-w-5xl">
              Join our global community of students who are passionate about
              building AI-driven solutions with Microsoft technology. Accelerate
              innovation and grow the skills you need to have greater impact in
              the projects and communities that matter to you.
            </p>
            <div className="flex-shrink-0 mr-20">
              <button className="text-white flex items-center gap-2 cursor-pointer text-lg bg-[#002f06] p-3 rounded-xl transition-all">
                Get Started <BsArrowRightShort size={30} />
              </button>
            </div>
          </div>

          {/* Add more content here */}

          <div className="mt-69 absolute flex ml-50 ">
            <img
              src={photo}
              alt="photo"
              className="h-140  object-cover rounded-xl"
            />
          </div>
          <div className="flex h-[17.5rem] relative rounded-2xl p-8 items-start justify-center w-[34rem] top-76  left-115 bg-black flex-col">
            <div className="w-[28rem]  ">
              <h1 className="text-6xl text-white font-bold">
                Unlock Your Potential
              </h1>
              <p className="text-gray-300 text-lg font-semibold   mt-6 ">
                Discover new opportunities and enhance your skills. Gain
                real-world experience with hands-on projects. Connect with a
                network of like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* card */}

      <div className="top-[16.6rem] justify-between bg-black cursor-pointer gap-10 items-center px-6 py-12 relative flex flex-wrap">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group flex border h-24 border-[#1d4e0eaf] gap-2 justify-between 
                 transform transition-transform duration-300 ease-in-out 
                 hover:scale-105 hover:border-green-700"
          >
            <div className="text-[#43a724] p-6 bg-[#1a1a1a]">{card.icon}</div>
            <div className="w-60 py-4 text-white">
              <h4 className="text-lg font-semibold group-hover:text-[#43a724] transition-colors duration-300">
                {card.title}
              </h4>
              <p className="text-sm text-gray-200">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="top-[16rem] relative">
        <div className="text-white text-xl relative m] font-bold px-10 mt-20 mb-6">
          <h3>Why you should join</h3>
        </div>

        {/* Card Section */}
        <div className="text-white relative mb-6 px-15">
          <div className="flex justify-between gap-6   items-center ">
            {card.map((car, index) => (
              <div
                key={index}
                className="bg-[#202020] w-[30rem] px-8 py-6 shadow-md flex flex-col "
              >
                <div className="mb-4 text-[#43a724]">{car.icon}</div>
                <h4 className="text-2xl font-semibold mb-3">{car.title}</h4>
                <p className="text-base text-gray-300">{car.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAmbassador;
