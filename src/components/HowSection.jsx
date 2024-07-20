import React from 'react'
import SectionFigure from './SectionFigure'

function HowSection() {
    return (
        <section className='section how__section'>
            <div className="container">
                <div className="section__heading--box">
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