import React from 'react'

//Components
import NavBar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';

//style
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
    </div>
  )
}

export default App