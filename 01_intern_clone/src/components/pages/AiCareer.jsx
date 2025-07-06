import React from 'react'
import Rebortimage from "../../assets/images/rebort.jpg"
import { LuBrain } from "react-icons/lu";

const AiCareer = () => {
  return (
    <>
    <div className='flex '>
        <img src={Rebortimage} alt="" className='w-full h-150 opacity-30 object-cover' />
        <div className='absolute top-25 left-40   flex items-start flex-col'>
            <div className='text-center text-[#43a624] bg-[#192216] px-4 py-2   rounded-3xl flex items-center gap-2' >
                <LuBrain size={20} />
                <p>Your Ai Career Jounrey</p>
            </div>
            <div className='text-white text-6xl mt-10 font-semibold'>
              <h1>AI Career Coach: Your</h1>
              <h1>
              Ultimate Guide to Building a
              </h1>
              <h1>Successful AI Career</h1>
            </div>
            <div className='text-gray-300 text-lg mt-10 font-semibold'>
                <p>Looking to kickstart your career in the AI industry? Our AI Career Coach platform offers <br /> expert guidance in resume building, cover letter creation, interview preparation, <br /> quizzes, and industry insights—all designed to help you land your dream job in <br /> Artificial Intelligence.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default AiCareer