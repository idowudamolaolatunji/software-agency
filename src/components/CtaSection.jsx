import React from 'react'
import { HiEnvelope } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function CtaSection() {
    return (
        <section className='section cta__section'>
            <div className="container">
                <div className="cta--container">
                    <h4 className="cta--heading">Conatct Us! <br /> Let's start planning your next project</h4>
                    <p className="cta--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas ad temporibus. Error officiis dipisci eos recusandae accusamus sed mollitia voluptatum tempora.</p>

                    <Link to="/contact" className='cta--btn btn'> <HiEnvelope /> Let's Talk</Link>
                </div>
            </div>
        </section>
    )
}

export default CtaSection