import React from "react";
import { TypeAnimation } from 'react-type-animation';

import Img from '../assets/images/hero-image.jpg';
import { Link } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";

import user_1 from '../assets/images/user-photos/idowu.png';
import user_2 from '../assets/images/user-photos/vendor.jpg';
import user_3 from '../assets/images/user-photos/ngozi.jpeg';
import user_4 from '../assets/images/user-photos/emeka.jpeg';

import brand_1 from '../assets/images/brand-logos/Codelab.png'
import brand_2 from '../assets/images/brand-logos/passpro-logo-png.png'
import brand_3 from '../assets/images/brand-logos/seymols.png'
import { useDataContext } from "../context/DataContext";


function HeroSection() {
    const { isDarkMode } = useDataContext();

    return (
        <section className="hero__section">
            <div className="container hero--container">
                <div className="hero--text-box">
                    <h2 className="hero--heading">
                        Transforming businesses through modern software {" "}<br />
                        <TypeAnimation
                            sequence={[
                                'solutions.',
                                1500,
                                'empowerment.',
                                1500,
                                'innovations.',
                                1500,
                            ]}
                            speed={30}
                            className="hero--sub"
                            repeat={Infinity}
                        />
                    </h2>

                    <p className="hero--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore hic saepe dicta tempore libero illo illum dolores alias nemo nobis delectus eveniet minima.</p>

                    <div className="hero--action">
                        <Link to="/services" className="hero--link">
                            Explore
                            <MdOutlineExplore className="icon" />
                        </Link>

                        <span className="hero--trusted">
                            <p>Trusted By</p>
                            <div>
                                <img src={brand_2} alt="passpro brand" style={
                                    !isDarkMode ? { filter: "grayscale(100%) brightness(50%)" } : { filter: "brightness(1000%) contrast(0)"}} />
                                <img src={brand_1} alt="codelab brand" style={
                                    !isDarkMode ? { filter: "grayscale(100%) brightness(50%)" } : { filter: "brightness(1000%) contrast(0)"}} />
                                <img src={brand_3} alt="seymols brand" style={
                                    !isDarkMode ? { filter: "grayscale(100%) brightness(50%)" } : { filter: "brightness(1000%) contrast(0)"}} />
                            </div>
                        </span>
                    </div>
                </div>


                <div className="hero--image-box">
                    <img src={Img} alt="hero image" className="hero--img" />
                </div>


                <div className="hero--info">
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span>
                            <img src={user_3} alt="ngozi" />
                            <img src={user_4} alt="emeka" />
                            <img src={user_2} alt="makile"/>
                            <img src={user_1} alt="idowu" />
                        </span>

                        <picture style={{ marginBottom: "1.4rem"}}>
                            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉" width="28" height="28" />
                        </picture>
                    </div>

                    <span>
                        11+ people including <strong style={{color: "#6b18eb" }}>Top</strong> brands are already using our services
                    </span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;