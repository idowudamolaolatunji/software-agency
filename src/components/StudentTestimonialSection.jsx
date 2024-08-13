import React from 'react'

function StudentTestimonialSection({ children }) {
    return (
        <section className='section' style={{ paddingBottom: "4rem" }}>
            <div className="container">
                <div className="section__heading--box">
                    <p className="section__subtitle">Testimonials</p>
                    <h3 className="section__heading">Here’s what our students have to say..</h3>
                </div>

                <div className="testimonial__grid">
                    <iframe style={{ height: '50rem', width: "100%", borderRadius: "0.6rem" }} src="https://youtube.com/embed/dlfftIPLeJE?si=t9n0pvo6MGe5i6Fs" frameborder="0"></iframe>
                </div>

                {children}
            </div>
        </section>
    )
}

export default StudentTestimonialSection