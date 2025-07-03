import React from 'react';
import bgImage from '../../assets/images/main.jpg';
import { LuGraduationCap } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { TbTargetArrow } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

// Stats cards
const stats = [
  { number: '1000+', label: 'Active Interns', delay: 0 },
  { number: '500+', label: 'Partner Companies', delay: 0.2 },
  { number: '10,000+', label: 'Success Stories', delay: 0.4 },
  { number: '50+', label: 'Industry Sectors', delay: 0.6 },
];

// Domain cards data
const domainCards = [
  {
    title: 'Development & Programming',
    skills: ['Web Development', 'Mobile App Development', 'Python Programming', 'AI & ML'],
  },
  {
    title: 'Design & Marketing',
    skills: ['UI/UX Design', 'Digital Marketing', 'Graphic Design', 'Content Writing'],
  },
  {
    title: 'Business & Analytics',
    skills: ['Business Development', 'Data Analytics', 'Project Management', 'Finance'],
  },
];

const Career = () => {
  return (
    <div className="relative w-full flex justify-center items-start pt-8 overflow-hidden bg-[#121212]">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      <div className="relative z-10 text-center mt-20 max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-8">
          <div className="inline-flex justify-center items-center bg-green-800/50 rounded-full px-5 py-3 gap-2">
            <LuGraduationCap className="text-[#319c1c]" />
            <h1 className="text-[#319c1c] text-sm font-medium">Professional Development</h1>
          </div>

          <h1 className="text-white text-4xl md:text-5xl mt-5 font-semibold leading-tight">
            Launch Your Career with Internee.pk
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mt-5 mx-auto">
            Pakistan's innovative platform for career growth and professional development.
            Join our virtual internships to gain practical experience and kickstart your professional journey.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: item.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center w-60 h-30 p-6 rounded-2xl bg-[#1e1e1e] shadow-md"
            >
              <h1 className="text-[#319c1c] text-3xl font-semibold">{item.number}</h1>
              <p className="text-gray-400 font-semibold mt-2 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Domain Cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 mt-12">
          {domainCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 w-[22rem] rounded-2xl bg-[#1e1e1e] shadow-lg hover:scale-105 transition-all duration-300"
            >
              {/* Icon + Title + Paragraph */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#002f06]">
                  <TbTargetArrow className="text-[#319c1c] text-3xl" />
                </div>
                <div className="text-left">
                  <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-400 mt-1 text-sm">
                    Industry-specific virtual internships designed to build practical skills and experience.
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <ul className="text-gray-400 space-y-2 mt-2 text-left">
                {card.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaRegCheckCircle className="text-[#319c1c]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
    