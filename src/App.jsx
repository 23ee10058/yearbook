import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
function App() {
 

  return (
    <div className='yearbook_bg'>
        <Navbar></Navbar>
        <Body></Body>
      
    </div>
  )
}

export default App
