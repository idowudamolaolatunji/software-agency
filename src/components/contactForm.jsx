import React from 'react'

function contactForm() {
  return (
    <section className='section'>
      <div className="container">
        <h3 className="contact__heading">Let us Have a Conversation.</h3>
        <form className="contact__form" action="https://formspree.io/f/xbjngena" method="post">
          <div className="form--flex">
            <div className="form--item">
              <label className="form--label">Fullname</label>
              <input
                className="form--input"
                type="text"
                placeholder="Your Fullname"
                required
                name='fullname'
              />
            </div>
            <div className="form--item">
              <label className="form--label">Email</label>
              <input
                className="form--input"
                type="email"
                placeholder="Your Email Address"
                required
                name='email'
              />
            </div>
          </div>
          <div className="form--item">
            <label className="form--label">Subject</label>
            <input
              className="form--input"
              type="text"
              placeholder="Your Message subject"
              required
              name='subject'
            />
          </div>
          <div className="form--item">
            <label className="form--label">Message</label>
            <textarea
              className="form--textarea"
              placeholder="Your Brief Message"
              defaultValue={""}
              required
              name="message"
            />
          </div>
          <div className="form--item">
            <button className="form--button" type="submit">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default contactForm