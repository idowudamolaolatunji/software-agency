import React from 'react'
import SectionFigure from './SectionFigure'
import { LuDot } from 'react-icons/lu'

function HowSection({ page }) {
    return (
        <section className='section how__section' style={ page ? { paddingTop: "6.2rem "} : {}}>
            <div className="container">
                <div className="section__heading--box">
                    {!page && (
                        <p className="section__subtitle">
                            <LuDot style={{ fontSize: "1.8rem", marginRight: "-.6rem" }} />
                            <>Processes</>
                            <picture>
                                {/* <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3ff/512.webp" type="image/webp" />
                                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3ff/512.gif" alt="💪" width="12" height="12" /> */}
                                <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.webp" type="image/webp" />
                                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="12" height="12" />
                            </picture>
                        </p>
                    )}
                    <h2 className="section__heading">Step by step walk to our IT solution process</h2>
                    <p className="section__text">Discover how our expert team guides you through a tailored IT solution process, from initial consultation to deployment and support. Our structured approach ensures clarity and transparency every step of the way.</p>
                </div>

                <div className="how--container">
                    <SectionFigure
                        type="how"
                        subtitle="Step 1"
                        title="Contact & schedule meeting"
                        content="Reach out to us to discuss your IT needs and schedule a meeting with our expert team. We'll set the stage for a seamless collaboration."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 2"
                        title="Initial consultation"
                        content="Meet with our experts to share your vision, goals, and challenges. We'll listen attentively and provide guidance on the best IT solutions for your business."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 3"
                        title="Assessment & planning"
                        content="Our team will assess your current IT infrastructure and develop a tailored plan to address your unique needs, ensuring a solid foundation for success."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 4"
                        title="Solution design & development"
                        content="We'll design and develop a customized IT solution that meets your specific requirements, leveraging cutting-edge technologies and best practices."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 5"
                        title="Deployment & support"
                        content="Our experts will deploy your new IT solution, provide comprehensive ongoing support to ensure a smooth transition and optimal performance."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 6"
                        title="Monitoring & optimization"
                        content="We'll continuously monitor your IT system, identify areas for improvement, and implement optimizations to ensure peak performance and efficiency."
                    />
                </div>
            </div>
        </section>
    )
}

export default HowSection