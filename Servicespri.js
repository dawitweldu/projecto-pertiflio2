import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import "./porifolio.css"
import { FaBars, FaTimes } from 'react-icons/fa'

function Servicespri() {
  const [Mobiles,setMoboles]=useState(true)
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
        <h1 className='headservish1'>Our <span className='headserice'>   services</span></h1>
    <div className='servicecss'>
      
      <div className='servidiv1'>
      <img src="./img/download (12).png"className='seviceimg' />
<h3>Web Developer</h3>
<p>hi there i ame expert <br/>Frontend developer <br/>
if you want i am right <br/>guy and<br/> i am expertof React <br/>and anther platforms</p>
<button className='servicesbtn'>Raed More</button>
      </div>
      <div className='servidiv1'>
      <img src="./img/download (12).png"className='seviceimg' />
<h3>Web Developer</h3>
<p>hi there i ame expert <br/>Frontend developer <br/>
if you want i am right <br/>guy and<br/> i am expertof React <br/>and anther platforms</p>
<button className='servicesbtn'>Raed More</button>
      </div>
      <div className='servidiv1'>
      <img src="./img/download (12).png"className='seviceimg' />
<h3>Web Developer</h3>
<p>hi there i ame expert <br/>Frontend developer <br/>
if you want i am right <br/>guy and<br/> i am expertof React <br/>and anther platforms</p>
<button className='servicesbtn'>Raed More</button>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Servicespri