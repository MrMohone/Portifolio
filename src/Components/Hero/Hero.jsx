import React from 'react'
import './Hero.css'
import Profile_img from '../../assets/product_32.png'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={Profile_img} alt=""/>
        <h1><span>I'm Alex Bennett,</span> frondend developer based in USA.</h1>
        <p>I'm a frontend developer from california, usa with 10 years of experiance</p>
         <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
         </div>
    </div>
  )
}

export default Hero