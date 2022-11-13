import React from 'react'
import BreadImg from '../../public/images/bread.png'

function Navbar(){
  return (
    <nav className='navbar'>
      <img className='breadImg' src = {BreadImg}></img>
      <h1>my bread journal.</h1>
    </nav>
  )
}

export default Navbar;