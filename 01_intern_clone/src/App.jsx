import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/pages/home';
import Popup from './components/pages/Popup';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
