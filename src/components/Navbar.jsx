import React from 'react'
import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    
      <nav id='navbar'>
        <h2>
          <Link to='/'>
           <BiCameraMovie/> MoviesHub</Link>
        </h2>
       <form>
        <input type='text' placeholder='Busque por filme'/>
        <button type='submit'></button>
        <BiSearchAlt2/>
       </form>
      </nav>
    
  )
}

export default Navbar
