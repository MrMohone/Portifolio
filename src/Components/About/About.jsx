import React from 'react'
import './About.css'
import them_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={them_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about_right">
                <div className="about-para">
                    <p>I'm an experianced Frontend Developer with over..</p>
                    <p>My passision fro frontend development is not only ..</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML $ CSS</p> <hr style={{width:'60%'}}/> </div>
                    <div className="about-skill"><p> React Js</p> <hr style={{width:'90%'}}/> </div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:'60%'}}/> </div>
                    <div className="about-skill"><p>Next Js</p> <hr style={{width:'50%'}}/> </div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>10+</h1>
                <p>YEARS OF EXPERIANCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About