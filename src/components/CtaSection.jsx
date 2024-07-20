import React from 'react'
import { Link } from 'react-router-dom'

function CtaSection() {
  return (
    <section className='section cta__section'>
        <div className="container cta--container">
            <h4 className="cta--heading">Lorem ipsum dolor sit amet ctetur adipisicing dolor sit elit.</h4>
            <p className="cta--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas ad temporibus. Error officiis dipisci eos recusandae accusamus sed mollitia voluptatum tempora! Voluptatibus delectus adipisci eos recusandae accusamus sed mollitia id. Non provident quos est quibusdam.</p>

            <Link to="/" className='cta--btn btn'>Let's Talk</Link>
        </div>
    </section>
  )
}

export default CtaSection