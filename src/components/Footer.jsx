import React from 'react';
import { useDataContext } from '../context/DataContext';

import logo_img from '../assets/images/logo/main-logo-transparent.png';
import logo_img_white from '../assets/images/logo/logo-white-transparent.png';
import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { RiPhoneFill, RiTwitterXLine } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';


function Footer() {
    const { isDarkMode } = useDataContext();


    return (
        <footer className="footer">
            <div className="footer--container">
                <div className='footer--item'>
                    <img src={!isDarkMode ? logo_img : logo_img_white} alt='buildspire logo' className='footer--logo' />
                    <p className='copy-right'>
                        © 2024 BuildSpire Ng.
                        <span>Designed & Developed by BuildSpire</span>
                    </p>
                </div>
                <div className='footer--item'>
                    <p className="footer--heading">Links</p>
                    <ul className='footer--lists'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">What we do</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
                <div className='footer--item'>
                    <p className="footer--heading">Company</p>
                    <ul className='footer--lists'>
                        <li><Link to="/teams">Our Team</Link></li>
                        <li><Link to="/steps">Our Process</Link></li>
                        <li><Link to="/terms">Our Terms</Link></li>
                        <li><Link to="/career">Career</Link></li>
                    </ul>
                </div>
                <div className='footer--item'>
                    <p className="footer--heading">Contacts & Socials</p>
                    <ul className="footer--lists">
                        <span className='footer--socials'>
                            <Link to="https://www.linkedin.com/" target='_blank'>
                                <IoLogoLinkedin className='icon' />
                            </Link>
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <IoLogoInstagram className="icon" />
                            </Link>
                            <Link to="https://www.x.com/" target='_blank'>
                                <RiTwitterXLine className="icon" />
                            </Link>
                        </span>
                        
                        <li>
                            <Link to="tel:+2349057643470">
                                <RiPhoneFill className="icon" />
                                <p>+234 905 7643 470</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:buildspireng@gmail.com">
                                <SiGmail className="icon" />
                                <p>buildspireng@gmail.com</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer