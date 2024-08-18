import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/admin.svg'
import navProfile from '../../assets/icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar