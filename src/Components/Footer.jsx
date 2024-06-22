import React from 'react';
import logo from '../images/logo.svg';
import { Link, Element } from 'react-scroll';//npm install react-scroll yüklemek lazým ve bu þekilde import edeceðim

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-title'>
                <Link to='main' className='logo'>
                    <img src={logo} alt='Logo' />
                </Link>

                <ul className='foot-menu'>
                    <li><Link to='#'>Company</Link></li>
                    <li><Link to='#'>Documentation</Link></li>
                    <button className='btn1' type='button' id='btn1'>Purchase now</button>
                </ul>
            </div>

            <div className='footer-content'>
                <h6>@ theFront. 2021, Maccarian. All rights reserved</h6>
                <p>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for<br /> marketing purposes.</p>
            </div>
        </div>
    )
}
export default Footer;