import React from 'react'

const EngineeringExplore = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Engineering Programs</h1>
      <div className="grid gap-6">
        <div className="bg-[#111] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Software Engineering</h2>
          <p className="text-gray-300">
            Dive deep into software development, system architecture, and cutting-edge technologies.
            Work on real projects using modern development tools and methodologies.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Mechanical Engineering</h2>
          <p className="text-gray-300">
            Design and develop mechanical systems, work with CAD software, and learn about manufacturing processes.
            Get hands-on experience with industry-standard equipment.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Electrical Engineering</h2>
          <p className="text-gray-300">
            Work with circuits, embedded systems, and power electronics.
            Learn about signal processing and control systems in practical applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EngineeringExplore