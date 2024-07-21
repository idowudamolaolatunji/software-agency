import React from 'react';

import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import Resource_1 from '../assets/images/resources/microsoft-365-kTFmwxkF5bQ-unsplash.jpg';
import Resource_2 from '../assets/images/resources/niclas-illg-FJ5e_2f96h4-unsplash.jpg';
import Resource_3 from '../assets/images/resources/linkedin-sales-solutions.jpg';

import Resource_mobile from '../assets/images/about-mobile.png';


function AboutSection({ page }) {
  return (
    <section className='section about__section' style={ page ? { paddingTop: "6.4rem" } : {} }>
        <div className="container about--container">
            <div className="about--image-box main--desktop">
                <img src={Resource_1} alt="resources images" className='img--1'/>
                <img src={Resource_2} alt="resources images" className='img--2' />
                <img src={Resource_3} alt="resources images" className='img--3' />
            </div>

            <div className="about--image-box main--mobile">
                <img src={Resource_mobile}  alt="resources images" className='about--image' />
            </div>

            <div className="about--text-box">
                <h2 className="section__heading">
                    <span style={{ fontSize: "1.8rem", color: "#6b18eb" }}>BuildSpire</span>
                    <br />
                    About {page && 'Us'}
                </h2>
                
                <span className='about__text section__text'>
                    <p>BABs Labs launched websh3 to support diverse leaders in building a more inclusive Web3 ecosystem that prioritizes sustainability.</p>
                    <p>It's time to put our words into action so that this new, vibrant space can generate a positive social and environmental impact.</p>
                    <p>websh3 is an experience, not a conference. Our interactive events seek to connect teams, ignite partnerships and drive funding to projects moving the needle.</p>
                </span>

                <Link to="/" className='about--btn btn'>Learn More <IoIosArrowForward className="icon" /></Link>
            </div>

            
        </div>
    </section>
  )
}

export default AboutSection