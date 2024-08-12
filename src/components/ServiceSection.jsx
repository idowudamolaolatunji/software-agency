import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import SectionFigure from './SectionFigure';
import { sevicesData } from '../data';

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
        <section className='section service__section' style={page ? { paddingTop: "6.2rem " } : {}}>
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
                    {sevicesData.map(({ type, title, content, image, link }) => (
                        <SectionFigure
                            type={type} title={title} content={content} image={image} link={link} 
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ServiceSection