import React, { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { SiDatabricks } from 'react-icons/si';
import { Link } from 'react-router-dom';

import TextTransition, { presets } from 'react-text-transition';
import SectionFigure from './SectionFigure';
const TEXTS = ['Tech', 'Startup', 'Business', 'Software'];

function ServiceSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


  return (
    <section className='section service__section'>
        <div className="container">
            <div className="section__heading--box">
                <h2 className="section__heading">
                    Our Comprehensive
                    <TextTransition springConfig={presets.wobbly} className='text--slide' inline={true}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    Solution Service
                </h2>
                <p className="section__text">Lorem, ipsum dolor sit Vitae eveniet aliquid maiores ipsum blanditiis explicabo amet consectetur adipisicing elit. Vitae eveniet aliquid maiores ipsum blanditiis explicabo!</p>
            </div>

            <div className="service--container">
                <SectionFigure
                    type="service"
                    title="IT consulting & supports."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
                <SectionFigure
                    type="service"
                    title="Data analytics & business intelligence."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
                <SectionFigure
                    type="service"
                    title="User interface designs & wireframe."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
                <SectionFigure
                    type="service"
                    title="Web & mobile app (software) developments."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
                <SectionFigure
                    type="service"
                    title="Tech mentorship & education."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
                <SectionFigure
                    type="service"
                    title="Business logo & graphics design."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
                <SectionFigure
                    type="service"
                    title="Idea tranformation & brand identification."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing."
                >
                    <SiDatabricks className='icon' />
                </SectionFigure>
            </div>
        </div>
    </section>

  )
}

export default ServiceSection