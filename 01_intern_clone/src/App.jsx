import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/pages/home'
import Popup from './components/pages/Popup'

const App = () => {
  return (
    <div>
      <Popup />
      <NavBar />
      <Home />
    </div>
  )
}

export default App