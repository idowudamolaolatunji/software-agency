import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiEnvelope  } from "react-icons/hi2";

import LogoImg from '../assets/images/logo/main-logo.png'
import LogoImgWhite from '../assets/images/logo/logo-white.png'
import { IoLogoInstagram, IoLogoLinkedin, IoMoon, IoSunny } from "react-icons/io5";
import { useDataContext } from "../context/DataContext";
import { useWindowScroll } from 'react-use'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";


function Header() {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const [showMini, setShowMini] = useState(false);
    const { isDarkMode, onMode } = useDataContext();

    const {y} = useWindowScroll();
    // check if y = 300

    function handleMobileSidebar() {
        setShowMobileSidebar(false);
    }

    useEffect(function() {
        if(y >= 300) {
            setShowMini(true);
        } else {
            setShowMini(false);
        }
    }, [y]);

    return (
        <>
            <header className="header main--desktop">
                <Link to="/">
                    <div className="header--logo">
                        <img src={isDarkMode ? LogoImgWhite : LogoImg} alt="buildspire" className="logo" />
                    </div>
                </Link>

                <div className="nav__bar">
                    <ul className="nav--list">
                        <li className="nav--item">
                            <NavLink to="/" className="nav--active">Home</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="/about">About us</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="/services">What we do</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="/steps">Our Process</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav--others">
                    <button className="mode__btn" onClick={onMode}>
                        {!isDarkMode ? (
                            <IoMoon className="icon" />
                        ) : (
                            <IoSunny className="icon" />
                        )}
                    </button>
                    <NavLink to="/contact" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
                </div>

            </header>


            <header className="header main--mobile">
                <Link to="/">
                    <div className="header--logo">
                        <img src={isDarkMode ? LogoImgWhite : LogoImg} alt="buildspire" className="logo" />
                    </div>
                </Link>

                <div className="nav--others">
                    <button className="mode__btn" onClick={onMode}>
                        {!isDarkMode ? (
                            <IoMoon className="icon" />
                        ) : (
                            <IoSunny className="icon" />
                        )}
                    </button>

                    <NavLink to="/contact" className="nav--btn btn disp"> <HiEnvelope  /> Let's Talk</NavLink>
                    <span className="header-menu-box">
                        <HiOutlineMenuAlt1 className="header-menu" onClick={() => setShowMobileSidebar(true)} />
                    </span>
                </div>
            </header>


            {showMini && (
                <>
                    <header className="header--mini main--desktop">
                        <ul className="nav--list">
                            <li className="nav--item">
                                <NavLink to="/" className="nav--active">Home</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="/about">About us</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="/services">What we do</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="/steps">Our Process</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="/portfolio">Portfolio</NavLink>
                            </li>
                        </ul>

                        <div className="nav--others">
                            <button className="mode__btn" onClick={onMode}>
                                {!isDarkMode ? (
                                    <IoMoon className="icon" />
                                ) : (
                                    <IoSunny className="icon" />
                                )}
                            </button>
                            <NavLink to="/contact" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
                        </div>
                    </header>


                    <header className="header--mini main--mobile">
                        <span className="header-menu-box">
                            <HiOutlineMenuAlt1 className="header-menu" onClick={() => setShowMobileSidebar(true)} />
                        </span>
                        <div className="nav--others">
                            <button className="mode__btn" onClick={onMode}>
                                {!isDarkMode ? (
                                    <IoMoon className="icon" />
                                ) : (
                                    <IoSunny className="icon" />
                                )}
                            </button>
                            <NavLink to="/contact" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
                        </div>
                    </header>
                </>
            )}


            {createPortal(
                showMobileSidebar && (
                    <>
                        <Overlay handleClose={handleMobileSidebar} />
                        <menu className='mobile--sidebar'>
                            <div className="sidebar--head">
                                <div className="header--logo">
                                    <img src={!isDarkMode ? LogoImg : LogoImgWhite} className="logo" alt="buildspire logo" />
                                </div>

                                <span className='mobile-close' onClick={handleMobileSidebar}>
                                    <TfiClose style={{ fontSize: "2.4rem" }} />
                                </span>
                            </div>

                            <div className="sidebar--body">
                                <ul className="nav--list">
                                    <li className="nav--item">
                                        <NavLink to="/" className="nav--active">Home</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="/about">About us</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="/servies">What we do</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="/steps">Our Process</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </li>

                                    <NavLink to="/contact" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
                                </ul>
                            </div>

                            <div className="sidebar--end">
                                <Link to="/"><IoLogoLinkedin className="icon" /></Link>
                                <Link to="/"><IoLogoInstagram className="icon" /></Link>
                                <Link to="/"><RiTwitterXLine className="icon" /></Link>
                                <Link to="/"><SiGmail className="icon" /></Link>
                            </div>
                        </menu>
                    </>
                ), document.body
            )}
        </>
    )
}


export default Header
