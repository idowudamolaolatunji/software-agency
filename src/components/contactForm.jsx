import React from 'react'

function contactForm() {

    function handleSubmit(e) {
        const phoneInput = e.target.elements.phoneNumber;
        const digits = phoneInput.value.replace(/\D/g, '').replace(/^0+/, '');
        phoneInput.value = digits ? `+234${digits}` : '';
    }

    return (
        <section className='section'>
            <div className="container">
                <h3 className="contact__heading">Let us Have a Conversation.</h3>
                <form className="contact__form" action="https://formspree.io/f/xyegnved" method="post" onSubmit={handleSubmit}>
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
                    <div className="form--flex">
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
                            <label className="form--label">Phone Number</label>
                            <div className="form--phone-input">
                                <span className="form--phone-prefix">+234</span>
                                <input
                                    className="form--input"
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="801 234 5678"
                                    required
                                    name="phoneNumber"
                                    pattern="^0?[0-9]{10}$"
                                    title="Enter your number without the country code, e.g. 8012345678"
                                />
                            </div>
                        </div>
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