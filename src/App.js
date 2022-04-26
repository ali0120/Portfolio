import React from 'react'

//Components
import NavBar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';

//style
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <Services />
    </div>
  )
}

export default App