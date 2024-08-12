import React from 'react'
import { HiEnvelope } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function CtaSection() {
    return (
        <section className='section cta__section'>
            <div className="container">
                <div className="cta--container">
                    <h4 className="cta--heading">Contact Us! <br /> Let's start planning your next project or tech career</h4>
                    <p className="cta--text">Join the transformation journey with us and discover the limitless possibilities of modern software and tech empowerment. Let's shape the future of your business together and career.</p>

                    <Link to="/contact" className='cta--btn btn'> <HiEnvelope /> Let's Talk</Link>
                </div>
            </div>
        </section>
    )
}

export default CtaSection