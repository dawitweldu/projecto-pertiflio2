import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./porifolio.css"
import { FaBars, FaTimes } from 'react-icons/fa'

function Contactproti() {
  const [Mobiles,setMoboles]=useState(true)
  const [Formc,setFormc]=useState({})
  const Handchange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormc(Vlues=>({...Vlues, [name]:value}))
  }
const HandSubmite=(e)=>{
e.preventDefault();
console.log(Formc);

}
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
        <h1 className='proh1'>Contact <span className='headserice'>Me</span></h1>
 <form className='inputcontact' onSubmit={HandSubmite} >
   
    <input type='text' placeholder='Full Name' className='input1c'  
    required name='Contact' value={Formc.Contact || ""}
    onChange={Handchange}
    />
    <input type='email' placeholder='Email Addrese' className='input1c'
    required name='Contact0'  value={Formc.Contact0} onChange={Handchange}/><br/>
    <input type='number' placeholder='Phone Number' className='input1c' 
    required name='Contact1'  value={Formc.Contact1} onChange={Handchange}/>
    <input type='email' placeholder='Email Subject' className='input1c' 
    required name='Contact2'  value={Formc.Contact2} onChange={Handchange}/><br/>
     <textarea type='messege' className='messege' placeholder='Messege'
     required name='Contact3'  value={Formc.Contact3} onChange={Handchange}/>

<button className='contactbtn' type='submit'>Submit</button>
 </form>

        </div>
    </div>
  )
}

export default Contactproti