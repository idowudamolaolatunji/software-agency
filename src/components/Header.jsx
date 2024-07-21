import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiEnvelope  } from "react-icons/hi2";

import LogoImg from '../assets/images/logo/main-logo.png'
import LogoImgWhite from '../assets/images/logo/logo-white.png'
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDataContext } from "../context/DataContext";
import { useWindowScroll } from 'react-use'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";


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
                <div className="header--logo">
                    <img src={isDarkMode ? LogoImgWhite : LogoImg} alt="buildspire" className="logo" />
                </div>

                <div className="nav__bar">
                    <ul className="nav--list">
                        <li className="nav--item">
                            <NavLink to="" className="nav--active">Home</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="">About us</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="">What we do</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="">Our Team</NavLink>
                        </li>
                        <li className="nav--item">
                            <NavLink to="">Contact</NavLink>
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
                    <NavLink to="" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
                </div>

            </header>


            <header className="header main--mobile">
                <div className="header--logo">
                    <img src={isDarkMode ? LogoImgWhite : LogoImg} alt="buildspire" className="logo" />
                </div>

                <div className="nav--others">
                    <button className="mode__btn" onClick={onMode}>
                        {!isDarkMode ? (
                            <IoMoon className="icon" />
                        ) : (
                            <IoSunny className="icon" />
                        )}
                    </button>

                    <NavLink to="" className="nav--btn btn disp"> <HiEnvelope  /> Let's Talk</NavLink>
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
                                <NavLink to="" className="nav--active">Home</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="">About us</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="">What we do</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="">Our Team</NavLink>
                            </li>
                            <li className="nav--item">
                                <NavLink to="">Contact</NavLink>
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
                            <NavLink to="/" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
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
                            <NavLink to="/" className="nav--btn btn"> <HiEnvelope  /> Let's Talk</NavLink>
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
                                        <NavLink to="" className="nav--active">Home</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="">About us</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="">What we do</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="">Our Team</NavLink>
                                    </li>
                                    <li className="nav--item">
                                        <NavLink to="">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </menu>
                    </>
                ), document.body
            )}
        </>
    )
}


export default Header
