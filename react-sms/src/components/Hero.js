import React from "react";
import './Hero.css';
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import WaveBackground from "../components/WaveBackground";
// import './Home.css'

function Hero () {
   return(
    <div className="hero-container">
        <div className="hero">
            <h1 className='text-white'>
                Welcome To  eduVerse Your Online School Management Software.
            </h1>
            
            <p>
                Now you can  manage your school, college, or any educational center with EduVerse.
            </p>
            <div className="hero-actions">
              
                <p>Sign In</p>
                <a href="learnmore" className="hero-btn more">Learn More</a>
            </div>
            <div className="hero-image">
                <img src="SM Images/image1.gif" alt="" />
            </div>
            
        </div>
    </div>
   )
}
export default Hero;
