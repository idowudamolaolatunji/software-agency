import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import SectionFigure from './SectionFigure';


import ui_ux from '../assets/images/png-icons/ui-ux.png';
import dev from '../assets/images/png-icons/dev.png';
import data from '../assets/images/png-icons/data.png';
import it_spt from '../assets/images/png-icons/support.png';
import mntr from '../assets/images/png-icons/class.png';
import brnd_trns from '../assets/images/png-icons/brand.png';
import grphs from '../assets/images/png-icons/grp.png';
import { LuDot } from 'react-icons/lu';


const TEXTS = ['Tech', 'Startup', 'Business', 'Software'];

function ServiceSection({ page }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


  return (
    <section className='section service__section' style={ page ? { paddingTop: "6.2rem "} : {}}>
        <div className="container">
            <div className="section__heading--box">
                {!page && (
                    <p className="section__subtitle">
                        <LuDot style={{ fontSize: "1.8rem", marginRight: "-.6rem" }} />
                        <>Services</>
                        <picture>
                            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="12" height="12" />
                        </picture>
                    </p>
                )}
                <h2 className="section__heading">
                    Our Comprehensive
                    <TextTransition springConfig={presets.wobbly} inline={true} style={{ color: "#6b18eb" }}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    Solution Service
                </h2>
                <p className="section__text">Streamline, innovate, and dominate with our comprehensive solution service, designed to propel businesses forward in the ever-evolving digital age.</p>
            </div>

            <div className="service--container">
                <SectionFigure
                    type="service"
                    title="IT consulting & supports."
                    // content="Expert guidance to optimize your technology, from strategy to implementation and ongoing support."
                    content="Get expert tech guidance to optimize your tech business and stay ahead of the curve with our ongoing support."
                    image={it_spt}
                    link='/services'
                />
                <SectionFigure
                    type="service"
                    title="Data analytics & business intelligence."
                    // content="Unlock data insights to drive growth, improve efficiency, and enhance customer experiences."
                    content="Turn data into insights that drive growth, efficiency, and customer satisfaction."
                    image={data}
                    link='/services'
                />
                <SectionFigure
                    type="service"
                    title="User interface designs & wireframe."
                    content="Create user-friendly digital experiences that engage and delight your audience."
                    image={ui_ux}
                    link='/services'
                />
                <SectionFigure
                    type="service"
                    title="Web & mobile app (software) developments."
                    content="Custom software solutions that bring your vision to life and drive innovation."
                    image={dev}
                    link='/services'
                />
                <SectionFigure
                    type="service"
                    title="Tech mentorship & education."
                    // content="Learn from our experts and empower your team with personalized tech guidance & training."
                    content="Empower your team with the knowledge and skills to thrive in the digital age through our tech mentorship programs."
                    image={mntr}
                    link='/services'
                />
                <SectionFigure
                    type="service"
                    title="Business logo & graphics design."
                    content="Establish a strong brand identity with our professional business logo and graphics design services."
                    image={grphs}
                    link='/services'
                />
                <SectionFigure
                    type="service"
                    title="Idea tranformation & brand identification."
                    content="Transform your ideas into reality with our expert idea transformation and brand identification services"
                    image={brnd_trns}
                    link='/services'
                />
            </div>
        </div>
    </section>

  )
}

export default ServiceSection