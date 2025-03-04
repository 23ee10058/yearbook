import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

import { MdDarkMode } from "react-icons/md";
import { Cone } from 'lucide-react'
function App() {
   
   const [Display,setDisplay]=useState('flex')
   
   const yearbook_bg=document.getElementsByClassName('yearbook_bg')
   
   const [count,setCount]=useState(0)

   
   const modeChange=()=>{
     
     setDisplay((prevDisplay)=>{
       return prevDisplay==='flex'?'none':'flex'
       
      })
      setCount(count+1)
      
      if((count%2)==0){
        yearbook_bg[0].classList.add('light')
      }
      else{
        yearbook_bg[0].classList.remove('light')
      }
    }  
  return (
    <div className='yearbook_bg'>

        <Navbar Display={Display} modeChange={modeChange}></Navbar>
        
        <Body count={count}></Body>
        
      
    </div>
  )
}

export default App
