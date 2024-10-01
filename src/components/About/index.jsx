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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem impedit ipsa 
            autem provident quas minus natus hic temporibus maxime expedita excepturi 
            architecto voluptatibus rerum at debitis, inventore, ex ipsam reprehenderit?
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
