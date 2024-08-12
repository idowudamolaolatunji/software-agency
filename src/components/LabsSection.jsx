import React from 'react';

import FrontEnd from "../assets/images/frontend.jpg"
import Mobile from "../assets/images/mobile.jpg"
import FullStack from "../assets/images/fullstack.jpg"
import BackEnd from "../assets/images/backend.jpg"
import { Link } from 'react-router-dom';

function LabsSection({ customStyle }) {
  return (
    <section className="section labs__section" id="labs" style={customStyle ? customStyle : {}}>
    <div className="container">
      <div className="lab__grid">
        <div className="labs__cards">
          <figure className="lab__figure lab__figure--one">
            <Link to="/services/metorship-programme/frontend">
              <img
                className="lab__figure--image"
                src={FrontEnd}
                alt="buildspire labs images"
              />
              <div className="lab__figure--content">
                <p>Frontend Developement</p>
              </div>
            </Link>
          </figure>
          <figure className="lab__figure lab__figure--two">
            <Link to="/services/metorship-programme/mobile">
              <img
                className="lab__figure--image"
                src={Mobile}
                alt="buildspire labs images"
              />
              <div className="lab__figure--content">
                <p>Mobile Developement</p>
              </div>
            </Link>
          </figure>
          <figure className="lab__figure lab__figure--three">
            <Link to="/services/metorship-programme/fullstack">
              <img
                className="lab__figure--image"
                src={FullStack}
                alt="buildspire labs images"
              />
              <div className="lab__figure--content">
                <p>Full-Stack Developement</p>
              </div>
            </Link>
          </figure>
          <figure className="lab__figure lab__figure--four">
            <Link to="/services/metorship-programme/backend">
              <img
                className="lab__figure--image"
                src={BackEnd}
                alt="buildspire labs images"
              />
              <div className="lab__figure--content">
                <p>Backend Developement</p>
              </div>
            </Link>
          </figure>
        </div>
        <div className="lab__text--box">
          <div className="section__heading--box">
            {/* <p className="section__subtitle">Labs</p> */}
            <h3 className="section__heading">Find your desired programme.</h3>
          </div>
          <p className="lab__text">
            At Buildspire Ng, we offer a diverse array of labs tailored to meet your
            specific coding needs. Whether you're a beginner taking your first
            steps into the world of coding or an experienced developer looking to
            expand your skill set, we have the perfect lab for you.
          </p>
          <p className="lab__text">
            We are your gateway to the exciting and dynamic world of web
            development and coding. In this digital age, technology has become an
            integral part of our lives, and understanding how to create and shape
            it is more essential than ever. We open the doors to this
            ever-evolving realm, inviting you to explore its limitless
            possibilities.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default LabsSection
