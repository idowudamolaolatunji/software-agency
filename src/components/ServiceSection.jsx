import React, { useEffect, useState } from 'react';
import { SiDatabricks } from 'react-icons/si';
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
                <p className="section__text">Lorem, ipsum dolor sit Vitae eveniet aliquid maiores ipsum blanditiis explicabo amet consectetur adipisicing elit. Vitae eveniet aliquid maiores ipsum blanditiis explicabo!</p>
            </div>

            <div className="service--container">
                <SectionFigure
                    type="service"
                    title="IT consulting & supports."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={it_spt}
                />
                <SectionFigure
                    type="service"
                    title="Data analytics & business intelligence."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={data}
                />
                <SectionFigure
                    type="service"
                    title="User interface designs & wireframe."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={ui_ux}
                />
                <SectionFigure
                    type="service"
                    title="Web & mobile app (software) developments."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={dev}
                />
                <SectionFigure
                    type="service"
                    title="Tech mentorship & education."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={mntr}
                />
                <SectionFigure
                    type="service"
                    title="Business logo & graphics design."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={grphs}
                />
                <SectionFigure
                    type="service"
                    title="Idea tranformation & brand identification."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                    image={brnd_trns}
                />
            </div>
        </div>
    </section>

  )
}

export default ServiceSection