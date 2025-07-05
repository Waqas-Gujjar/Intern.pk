  import React from 'react';
  import bgImage from '../../assets/images/main.jpg';
  import { LuGraduationCap } from 'react-icons/lu';
  import { motion } from 'framer-motion';
  import { TbTargetArrow } from "react-icons/tb";
  import { FaRegCheckCircle, FaFileAlt, FaChartBar, FaComments, FaMapSigns, FaArrowRight } from "react-icons/fa";
  import { GoPeople } from "react-icons/go";
  import { LiaCertificateSolid } from "react-icons/lia";

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
      icon: <TbTargetArrow className="text-[#319c1c] text-3xl" />,
      title: 'Targeted Learning',
      skills: ['Web Development', 'Digital Marketing', 'UI/UX Design', 'Content Writing', 'Data Analytics', 'Business Development'],
      description: 'Industry-specific virtual internships designed to build practical skills and experience.',
    },
    {
      icon: <GoPeople className="text-[#319c1c] text-3xl" />,
      title: 'Mentorship Program',
      skills: ['One-on-One Guidance', 'Weekly Sessions ', 'Project Reviews', 'Career Planning', 'Industry Connect', 'Networking Events'],
      description: 'Learn directly from industry experts at Internee.pk',
    },
    {
      icon: <LiaCertificateSolid className="text-[#319c1c] text-3xl" />,
      title: 'Certification Track',
      skills: ['Skill Verification', 'Project Portfolio', 'Performance Badges', 'Industry Recognition', 'Digital Certificates', 'LinkedIn Integration'],
      description: 'Earn recognized certifications through virtual internships at Internee.pk',
    },
  ];

  // Learning progress phases
  const learningPhases = [
    { label: "Phase 1: Foundation", progress: 70 },
    { label: "Phase 2: Practical Skills", progress: 50 },
    { label: "Phase 3: Industry Projects", progress: 85 },
  ];

  // Career resource items
  const careerResources = [
    { icon: <FaFileAlt className="text-green-500" />, label: "Resume Templates" },
    { icon: <FaComments className="text-green-500" />, label: "Mock Interviews" },
    { icon: <FaChartBar className="text-green-500" />, label: "Skill Analysis" },
    { icon: <FaMapSigns className="text-green-500" />, label: "Learning Paths" },
  ];

  const Career = () => {
    return (
      <div className="relative w-full flex justify-center items-start pt-8 pb-32 overflow-hidden bg-[#121212]">
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />

        <div className="relative z-10 mt-20 max-w-6xl px-4">
          {/* Header Section */}
          <div className="mb-8 text-center">
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

          {/* Domain + Extra Cards */}
          <div className="flex flex-wrap justify-center items-stretch gap-8 mt-16">
            {/* Domain Cards */}
            {domainCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-start border border-gray-700 p-10 w-[22rem] h-auto space-y-4 rounded-2xl bg-[#1e1e1e] shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#002f06]">
                  {card.icon}
                </div>
                <h2 className="text-white text-2xl font-semibold text-left w-full">{card.title}</h2>
                <p className="text-gray-400 text-sm text-left w-full">{card.description}</p>
                <ul className="text-gray-400 space-y-2 text-left w-full">
                  {card.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaRegCheckCircle className="text-[#319c1c]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Learning Journey Card */}
            <div className="flex flex-col items-start border border-gray-700 px-10 py-6 w-[38rem] h-[20rem] space-y-4 rounded-2xl bg-[#1e1e1e] shadow-lg">
              <h2 className="text-green-500 text-xl font-semibold">Your Learning Journey</h2>
              {learningPhases.map((phase, idx) => (
                <div key={idx} className="w-full bg-[#2b2b2b] p-2   ">
                  <p className="text-white mb-1 text-lg font-semibold ">{phase.label}</p>
                  <div className="bg-gray-800 rounded-full h-2 w-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Resources Card */}
            <div className="flex flex-col items-start border border-gray-700 p-6 w-[30rem] space-y-4 rounded-2xl bg-[#1e1e1e] shadow-lg">
              <h2 className="text-green-500 text-xl font-semibold">Career Resources</h2>
              <div className="grid grid-cols-2 gap-4 w-full">
                {careerResources.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-[#2a2a2a] rounded-md w-full text-white text-sm"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 flex justify-center ">
            <div className="bg-[#1e1e1e] text-center px-8 py-15 rounded-2xl w-[90rem] shadow-lg">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Begin Your Professional Journey with <span className="text-white">Internee.pk</span>
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Join our <span className="font-semibold text-white">virtual internships</span> program and transform your career prospects with hands-on experience and expert guidance.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2">
                  Explore Opportunities <FaArrowRight />
                </button>
                <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2">
                  View Programs <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  export default Career;
