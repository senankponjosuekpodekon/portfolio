import React from 'react';
import "./Logo.css"
import { FaLaptopCode } from 'react-icons/fa6';

const Logo = () => {
  return (
    <div className='logo'>
      <FaLaptopCode className='icon'/>
      <h2>Stiamond</h2>
    </div>
  );
}

export default Logo;
