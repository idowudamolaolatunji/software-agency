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
                    <p className="section__text">Lorem ipsum dolor sit amet Vitae eveniet aliquid maiores ipsum blanditiis explicabo consectetur adipisicing elit. Sed sapiente blanditiis dicta iusto nemo voluptatibus, mollitia ea numquam beatae? Quod!</p>
                </div>

                <div className="how--container">
                    <SectionFigure
                        type="how"
                        subtitle="Step 1"
                        title="Contact & schedule meeting"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut inventore, possimus molestiae facilis enim tempore fugiat ipsam non mollitia."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 2"
                        title="Initial consultation"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut inventore, possimus molestiae facilis enim tempore fugiat ipsam non mollitia."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 3"
                        title="Assessment & planning"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut inventore, possimus molestiae facilis enim tempore fugiat ipsam non mollitia."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 4"
                        title="Solution design & development"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut inventore, possimus molestiae facilis enim tempore fugiat ipsam non mollitia."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 5"
                        title="Deployment & support"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut inventore, possimus molestiae facilis enim tempore fugiat ipsam non mollitia."
                    />
                    <SectionFigure
                        type="how"
                        subtitle="Step 6"
                        title="Monitoring & optimization"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut inventore, possimus molestiae facilis enim tempore fugiat ipsam non mollitia."
                    />
                </div>
            </div>
        </section>
    )
}

export default HowSection