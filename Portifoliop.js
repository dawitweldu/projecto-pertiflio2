import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./porifolio.css"
import { FaBars, FaTimes } from 'react-icons/fa'

function Portifoliop() {

   
  const [Mobiles,setMoboles]=useState(true);
  
  return (
    <div>
        <nav className='nav-class'>
            <Link to="/logo1"  className='logo '><h3>Portfolio</h3></Link>
        <ul className={Mobiles?'ul-links':"ul-links2"} 
        onClick={()=>setMoboles(true)}>
        <Link to="/" className='home1'><li>Home</li></Link>
        <Link to="/Aboutp" className='home2'><li>About</li></Link>
        <Link to="/Servicep" className='home3'><li>Services</li></Link>
        <Link to="/Portifliop" className='home4'><li>Portfolio</li></Link>
        <Link to="/Contact"  className='home5'><li>Contact</li></Link>
        </ul>
        <button className='button-bars' 
        onClick={()=>setMoboles(!Mobiles)}>
           {Mobiles? <FaBars/>:<FaTimes/>}
        </button>
        </nav>
        <div className='class-body'>
          <h1 className='proh1'>Latest <span className='headserice'>Projects</span></h1>
          <div className='portdivilink'>
            <div className='portdivilink1'>
            <img src="./img/Capture1.PNG"className='imgportinport' />
            <img src="./img/Capture2.PNG"className='imgportinport' />
            <img src="./img/Capture3.PNG"className='imgportinport' />
            </div>
            <div className='portdivilink2'>
            <img src="./img/Capture3.PNG"className='imgportinport' />
            <img src="./img/Capture2.PNG"className='imgportinport' />
            <img src="./img/Capture1.PNG"className='imgportinport' />
            </div>
            </div>
         </div>  
    </div>
  )
}

export default Portifoliop