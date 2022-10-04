import React from 'react';
import './AdminHome.css';

export default function Home() {
  return (
    <div className='Home row'>
        {/* Left side of the home page */}
        <div className='left-side  col-sm-2' >
LEFT SIDE
        </div>
        {/* Center of the home page */}
        <div className='center  col-sm-8'>
   CENTER
        </div>
        {/* Right side of the home page */}
        <div className='right col-sm-2'>
Right
        </div>
    </div>
  )
}
