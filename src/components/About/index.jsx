import React from 'react';
import './About.css'
import { whyChooseMe } from '../../sources';

const About = () => {
  return (
    <section id='about'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos="fade-left">
            <span className="gradient-text">About Us</span>
          </h1>
          <h4 className="sub_title muted" data-aos="fade-left">
          I am specialized in UI/UX design, web development, and digital marketing, 
          helping businesses build impactful online experiences. Our mission is 
          to deliver customized solutions that drive growth and enhance user engagement, 
          all while staying ahead of the latest digital trends.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list,index)=>(
              <div className="flex-center group-item" data-aos="fade-right" key={index}>
                <div className="flex-center icon-wrapper">
                  {list.icon}
                </div>
                <h4 className="title">
                  {list.title}
                </h4>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default About;
