import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../../../assets/images/GraduatProgramimage/image3.jpg';
import InternShipCard from '../InternShipCard';


const ItExplorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black px-4 lg:px-20 py-16 text-white">
    <div
      className="w-full rounded-[30px] mx-auto px-6 md:px-16 py-30 mt-13 text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for same color tone & blur effect */}
      <div className="absolute inset-0 bg-[#5d7f6f]/95 backdrop-blur-sm rounded-[30px]"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Information Technology</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
        Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.
        </p>
      </div>
      
    </div>
    <div className='flex flex-col gap-4 items-center justify-center mt-15' >
          <h3 className='text-4xl font-bold'>Explore Internship Subcategories</h3>
          <p className='text-xl text-gray-300'>Discover opportunities under the Information Technology category.</p>
      </div>

      <div className='mt-20'>
        <InternShipCard />  
        
      </div>
  </div>
  )
}

export default ItExplorePage