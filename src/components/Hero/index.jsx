import React from 'react';
import "./Hero.css"
import { Link } from 'react-scroll';
import me from '../../assets/me.png'
import Achievement from '../Achievement';


const Hero = () => {
  return (
    <section id='hero'>
        <div className="wrapper info-container">
          <div className="column">
            <h3 className="sub-title" data-aos="fade-right">
              Hi, I'm <span className="primary">Sènankpon Josué KPODEKON</span>
            </h3>
            <h1 className="heading-1" data-aos="fade-up">
              A <span className="gradient-text">Fullstack</span> web Developer
            </h1>
            <p className="muted" data-aos="fade-up" data-aos-delay="200">
            I’m a passionate full-stack web developer with expertise in PHP, JavaScript, Vue.js, 
            React, Next and Laravel. I love building modern, 
            user-friendly websites and applications that combine great design with functionality.
            </p>
            <div className="flex-center buttons-wrapper">
              <Link to='services' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn more</Link>
              {/* <Link to='contact' smooth={true} className='btn' data-aos="fade-left" data-aos-delay="1500" data-aos-offset="50">Get started</Link> */}
              <a  href="/home/josue/Rendu/portfolio/src/assets/resume.pdf" 
                  download="resume.pdf" 
                  smooth={true}
                  className='btn' 
                  data-aos="fade-left" 
                  data-aos-delay="1500" 
                  data-aos-offset="50">CV</a>

            </div>
          </div>
          <div className="column hero-image" data-aos="fade-left" data-aos-delay="200" data-aos-offset="50">
            <img src={me} alt="" className='perfom-3d' />
          </div>
        </div>
        <div className="achievement-cluster">
          <div className="wrapper">
            <Achievement />
          </div>
        </div>
    </section>
  );
}

export default Hero;
