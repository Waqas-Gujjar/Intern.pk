import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar and Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />
      {isSidebarVisible && <Sidebar />}
    </div>
  );
};

export default App;
