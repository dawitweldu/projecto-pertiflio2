import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import "./porifolio.css"
import { FaBars, FaTimes } from 'react-icons/fa'

function Aboutportifolio() {

  const [Moboles,setMoboles]=useState(true)
  return (
    <div>
        <nav className='nav-class'>
            <Link to="/logo1"  className='logo '><h3>Portfolio</h3></Link>
        <ul className={Moboles?'ul-links':"ul-links2"} 
        onClick={()=>setMoboles(true)}>
        <Link to="/" className='home1'><li>Home</li></Link>
        <Link to="/Aboutp" className='home2'><li>About</li></Link>
        <Link to="/Servicep" className='home3'><li>Services</li></Link>
        <Link to="/Portifliop" className='home4'><li>Portfolio</li></Link>
        <Link to="/Contact"  className='home5'><li>Contact</li></Link>
        </ul>
        <button className='button-bars' 
        onClick={()=>setMoboles(!Moboles)}>
           {Moboles? <FaBars/>:<FaTimes/>}
        </button>
        </nav>
        <div className='class-body'>
  <div className='div2about'>
<div className='img-div'>
    <img className='imgpefolio'  src='/img/Daveportifolio.jpg' />
</div>
<div className='div-letter'>

<h2 className='head-name2'> About <span className='spann-name3'>Me</span></h2>
<h2 className='head-name3'> <span className='spann-name3'>Frontend Developer!</span></h2>
<p className='paragraph1'>hi there i ame expert Frontend developer 
if you want i am right guy <br/>and i am expertof React and anther platforms<br/>
hi there i ame expert Frontend developer 
if you want i am right guy <br/>and i am expertof React and anther platforms<br/>
hi there i ame expert Frontend developer 
if you want i am right guy <br/>and i am expertof React and anther platforms</p>
<ul className='links-ul'>
    <li><a href="#"><img src="./img/facebookddd.png" className='img-clas-links'/></a></li>
    <li><a href="#"><img src="./img/linkdin.png" className='img-clas-links'/></a></li>
    <li><a href="#"><img src="./img/tweeterd.jpg" className='img-clas-links'/></a></li>
    <li><a href="#"><img src="./img/facebookddd.png" className='img-clas-links'/></a></li>

    
</ul>
<button className='butten-download'>Download</button>
</div>
</div>
        </div>
    </div>
  )
}

export default Aboutportifolio