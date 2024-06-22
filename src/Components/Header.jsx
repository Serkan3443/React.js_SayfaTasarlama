import React from 'react';
import contentimage from '../images/img1.png';

function Header() {
    return (
        <div className='header'>
            <div className='header-text'>
                <h1 className='header-title'>Turn your ideas<br />into <span className='a-title'>success</span></h1>
                <p className='h-write'>the Front will make your product look modern and professional<br /> while saving you precious time.</p>
                <button className='btn' type='button' id='btn'>View Pages</button>
                <button className='btn1' type='button' id='btn1'>Documentation</button>
            </div>
            <div className='header-image'>
                <img src={contentimage} alt='' />
            </div>


        </div>
    )
}
export default Header;