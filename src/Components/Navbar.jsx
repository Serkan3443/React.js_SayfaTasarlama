import React,{ useState,useEffect } from 'react';
import logo from '../images/logo.svg';
import { Link, Element } from 'react-router-dom';//npm install react-scroll yüklemek lazým ve bu þekilde import edeceðim, react-scrool:sayfa içi gezinti iþlemleri için kullanýlýr

function Navbar() {

    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {

                setNavActive(true);
            }
            else {
                setNavActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
 
    return (
        <nav className={navActive ? "nav active" : "nav"}>
            <Link to='main' className='logo'>
                <img src={logo} alt='Logo' />
            </Link>

            <ul className='menu'>
                <li><Link to='/'>HomePage</Link></li>
                <li><Link to='#'>Company</Link></li>
                <li><Link to='#' smooth={true} duration={500}>Account</Link>
                    <ul className='submenu'>
                        <li><Link to='/SecuritySettings' smooth={true} duration={500}>Security Settings</Link></li>
                    </ul>
                </li>
                <li><Link to='#'>Pages</Link></li>
                <li><Link to='#'>Blog</Link></li>
                <li><Link to='#'>Portfolio</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar;