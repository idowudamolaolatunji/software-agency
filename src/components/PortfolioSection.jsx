import React from 'react';

// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

import port_1 from '../assets/images/portfolio/cla.png';
import port_2 from '../assets/images/portfolio/dio.png';
import port_3 from '../assets/images/portfolio/sym.png';
import port_4 from '../assets/images/portfolio/fig.png';
import { LuDot } from 'react-icons/lu';
import { useWindowSize } from 'react-use';

function PortfolioSection({ page }) {
    const { width } = useWindowSize();


  return (
   <section className="section portfolio__section" style={{
    ...(page && { paddingTop: "6.2rem" }),
    ...(width > 650 && { clipPath: "polygon(0 4.5%, 100% 0%, 100% 100%, 0 100%)" }),
  }}>
        <div className="container">
            <div className="section__heading--box">
                {!page && (
                    <p className="section__subtitle">
                        <LuDot style={{ fontSize: "1.8rem", marginRight: "-.6rem" }} />
                        <>Processes</>
                        <picture>
                            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif" alt="✨" width="12" height="12" />
                        </picture>
                    </p>
                )}
                <h4 className="section__heading">Featured work</h4>
                <p className="section__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nihil.</p>
            </div>

            <div className="portfolio--container">
                <figure className="portfolio__figure">
                    <div className="potfolio__img-box">
                        <img src={port_1} alt="portfolio cla" className="portfolio__img" />
                    </div>

                    <figcaption className='portfolio__details'>
                        <div className="right--side">
                            <h4 className="portfolio--title">CodeLab</h4>
                            <span className='portfolio--tabs'>
                                <span>Web Design</span>
                                <span>Web App</span>
                            </span>
                        </div>

                        <div className="left--side">
                            <p className="portfolio--subtitle">Mentorship & coding</p>
                            <p className="portfolio--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora soluta blanditiis asperiores. Sunt, numquam.</p>
                        </div>
                    </figcaption>
                </figure>
           
                <figure className="portfolio__figure">
                    <div className="potfolio__img-box">
                        <img src={port_2} alt="portfolio dio" className="portfolio__img" />
                    </div>

                    <figcaption className='portfolio__details'>
                        <div className="right--side">
                            <h4 className="portfolio--title">DIO</h4>
                            <span className='portfolio--tabs'>
                                <span>Portfolio</span>
                                <span>Web Design</span>
                            </span>
                        </div>

                        <div className="left--side">
                            <p className="portfolio--subtitle">Developer's portfolio</p>
                            <p className="portfolio--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora soluta blanditiis asperiores. Sunt, numquam.</p>
                        </div>
                    </figcaption>
                </figure>
            
                <figure className="portfolio__figure">
                    <div className="potfolio__img-box">
                        <img src={port_3} alt="portfolio sym" className="portfolio__img" />
                    </div>

                    <figcaption className='portfolio__details'>
                        <div className="right--side">
                            <h4 className="portfolio--title">Seymols</h4>
                            <span className='portfolio--tabs'>
                                <span>Brand</span>
                                <span>Web Design</span>
                            </span>
                        </div>

                        <div className="left--side">
                            <p className="portfolio--subtitle">Health & Logistics</p>
                            <p className="portfolio--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora soluta blanditiis asperiores. Sunt, numquam.</p>
                        </div>
                    </figcaption>
                </figure>
            
                <figure className="portfolio__figure">
                    <div className="potfolio__img-box" style={{ backgroundColor: "#fff" }}>
                        <img src={port_4} alt="portfolio fig" className="portfolio__img" />
                    </div>

                    <figcaption className='portfolio__details'>
                        <div className="right--side">
                            <h4 className="portfolio--title">Passpro</h4>
                            <span className='portfolio--tabs'>
                                <span>Figma Design</span>
                                <span>App & dev</span>
                                <span>Web</span>
                            </span>
                        </div>

                        <div className="left--side">
                            <p className="portfolio--subtitle">E-ticketing</p>
                            <p className="portfolio--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora soluta blanditiis asperiores. Sunt, numquam.</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
   </section>
  )
}

export default PortfolioSection