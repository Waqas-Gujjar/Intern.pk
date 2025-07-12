import React from 'react'
import { useNavigate } from 'react-router-dom'

const HealthCareExplore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Green Background */}
      <div className="w-full bg-[#4B6455] py-20 px-4 text-center">
        <button 
          onClick={() => navigate('/graduate-program')}
          className="absolute top-8 left-8 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Programs
        </button>

        <h1 className="text-7xl font-bold text-white mb-8">Health Care</h1>
        <p className="text-white/90 text-xl max-w-4xl mx-auto leading-relaxed">
          Step into the world where every second counts and lives are changed.
          Whether it's assisting in patient care, supporting medical research, or
          exploring health tech innovation our internships put you at the heart of the
          action. Join the frontlines of impact and make your mark in the future of
          healthcare.
        </p>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-white">
        <h2 className="text-4xl font-bold text-center mb-4">Explore Internship Subcategories</h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          Discover opportunities under the Health Care category.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#111] p-6 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Clinical Practice</h3>
            <p className="text-gray-400">
              Work directly with patients and healthcare professionals in hospitals,
              clinics, and care facilities. Learn practical medical procedures and
              patient care protocols.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Medical Research</h3>
            <p className="text-gray-400">
              Participate in groundbreaking research projects, clinical trials, and
              laboratory work. Contribute to advancing medical knowledge and treatments.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Healthcare Technology</h3>
            <p className="text-gray-400">
              Work on innovative health tech solutions, from medical devices to
              healthcare software. Help shape the future of digital health.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Public Health</h3>
            <p className="text-gray-400">
              Focus on community health initiatives, health education, and disease
              prevention programs. Make an impact on population health.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Healthcare Administration</h3>
            <p className="text-gray-400">
              Learn about healthcare management, policy implementation, and
              operational efficiency in healthcare organizations.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Mental Health Services</h3>
            <p className="text-gray-400">
              Support mental health professionals and learn about psychological care,
              counseling services, and therapeutic practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthCareExplore