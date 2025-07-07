import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/home';
import Internships from './components/pages/NavlinkPage/Internship';
import GraduateProgram from './components/pages/NavlinkPage/GraduateProgram';
import StudentAmbassador from './components/pages/NavlinkPage/StudentAmbassador';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Popup from './components/pages/Popup';
import Dashboard from './components/User/Dashboard';
import JobPortal from './components/User/JobPotal';

import Footer from './components/Footer';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Router>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/graduate-program" element={<GraduateProgram />} />
        <Route path="/student-ambassador" element={<StudentAmbassador />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-portal" element={<JobPortal />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
