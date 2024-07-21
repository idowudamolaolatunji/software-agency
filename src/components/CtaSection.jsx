import React from 'react'
import { Link } from 'react-router-dom'

function CtaSection() {
  return (
    <section className='section cta__section'>
        <div className="container">
          <div className="cta--container">
            <h4 className="cta--heading">Lorem ipsum dolor adipisicing ipsum dolor sit elit.</h4>
            <p className="cta--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas ad temporibus. Error officiis dipisci eos recusandae accusamus sed mollitia voluptatum tempora.</p>

            <Link to="/" className='cta--btn btn'>Let's Talk</Link>
          </div>
        </div>
    </section>
  )
}

export default CtaSection