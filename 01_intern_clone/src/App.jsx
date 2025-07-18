import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Internships from './components/pages/NavlinkPage/Internship';
import GraduateProgram from './components/pages/NavlinkPage/GraduateProgram';
import StudentAmbassador from './components/pages/NavlinkPage/StudentAmbassador';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Popup from './components/pages/Popup';
import Dashboard from './components/User/Dashboard';
import JobPortal from './components/User/JobPotal';

import HealthCareExplore from './components/pages/NavlinkPage/page/HealthCareExplore';
import EngineeringExplore from './components/pages/NavlinkPage/page/EngineeringExplore';
import ItExplorePage from './components/pages/NavlinkPage/page/ItExplorePage';

import OtherInternship from './components/internshippage/OtherInternship';
import Chatbot from './components/internshippage/Chatbot';
import Backend from './components/internshippage/Backend';
import MobileApp from './components/internshippage/MobileApp';
import GraphicDesign from './components/internshippage/GraphicDesign';
import FrontEnd from './components/internshippage/FrontEnd';

import Form from './components/Form.jsx';
import Footer from './components/Footer';

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const NavOnlyLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-grow">{children}</main>
  </div>
);

// Wrapper to use hooks inside Router
const AppWrapper = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(true);

  // Show popup only on home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && showPopup && <Popup onClose={() => setShowPopup(false)} />}

      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/internships" element={<MainLayout><Internships /></MainLayout>} />
        <Route path="/graduate-program" element={<MainLayout><GraduateProgram /></MainLayout>} />
        <Route path="/student-ambassador" element={<MainLayout><StudentAmbassador /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/job-portal" element={<MainLayout><JobPortal /></MainLayout>} />

        <Route path='/chatbot-internship' element={<MainLayout><Chatbot /></MainLayout>} />
        <Route path='/Other-Internship' element={<MainLayout><OtherInternship /></MainLayout>} />
        <Route path='/Backend-internship' element={<MainLayout><Backend /></MainLayout>} />
        <Route path='/FrontEnd-internship' element={<MainLayout><FrontEnd /></MainLayout>} />
        <Route path='/MobileApp-internship' element={<MainLayout><MobileApp /></MainLayout>} />
        <Route path='/GraphicDesign-internship' element={<MainLayout><GraphicDesign /></MainLayout>} />
        <Route path="/Form" element={<MainLayout><Form /></MainLayout>} />

        <Route path="/healthcare-explore" element={<NavOnlyLayout><HealthCareExplore /></NavOnlyLayout>} />
        <Route path="/engineering-explore" element={<NavOnlyLayout><EngineeringExplore /></NavOnlyLayout>} />
        <Route path="/it-explore" element={<NavOnlyLayout><ItExplorePage /></NavOnlyLayout>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
