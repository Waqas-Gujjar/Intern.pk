import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItExplorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button 
        onClick={() => navigate('/graduate-program')}
        className="mb-6 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Programs
      </button>

      <h1 className="text-4xl font-bold mb-6">Technology Programs</h1>
      <div className="grid gap-6">
        <div className="bg-[#111] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-300">
            Master modern web technologies and frameworks. Build responsive and scalable web applications.
            Learn frontend and backend development with industry-standard tools.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Data Science & AI</h2>
          <p className="text-gray-300">
            Explore machine learning, data analytics, and artificial intelligence.
            Work with real-world datasets and build predictive models.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Cloud Computing</h2>
          <p className="text-gray-300">
            Learn cloud platforms, containerization, and DevOps practices.
            Build and deploy scalable applications in the cloud.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItExplorePage