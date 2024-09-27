import React from 'react'
import './Navbar.css'
import logo from '../../assets/product_31.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" style={{width:'50px', height:'40px'}}/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portifolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar