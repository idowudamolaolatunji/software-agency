import React from 'react';

import WhyImageExperience from "../assets/images/illustrations/experienced.png"
import WhyImageCertification from "../assets/images/illustrations/certification.png"
import WhyImageExplained from "../assets/images/illustrations/explained.png"
import WhyImageAffordable from "../assets/images/illustrations/affordable.png"
import WhyImageCommunity from "../assets/images/illustrations/community.png"
import WhyImageIntership from "../assets/images/illustrations/intership.png"


function WhySection() {
    return (
        <section className="why-choose-us__section section">
            <div className="container">
                <div className="section__heading--box">
                    <p className="section__subtitle">why Enroll</p>
                    <h3 className="section__heading">Why Choose Buildspire Mentorship</h3>
                    <p className="section__text">
                        At Buildspire Ng, we are your gateway to a transformative coding
                        journey. Our commitment to providing quality education meets
                        affordability, ensuring that you can launch your career in tech without
                        breaking the bank. What sets us apart is our vibrant and supportive
                        community of learners, mentors, and industry experts who are passionate
                        about your success. We believe in nurturing talent and opening doors to
                        a world of opportunities in the booming tech industry. Choose Buildspire today, and embark on a path to skill mastery and career growth in
                        the dynamic world of coding and web development.
                    </p>
                </div>
                <div className="why__cards">
                    <div className="why--figure">
                        <img
                            className="why--image"
                            src={WhyImageExperience}
                            alt="why content images"
                        />
                        <p className="why--title">Experienced Tutors.</p>
                    </div>
                    <div className="why--figure">
                        <img
                            className="why--image"
                            src={WhyImageCertification}
                            alt="why content images"
                        />
                        <p className="why--title">Certifications.</p>
                    </div>
                    <div className="why--figure">
                        <img
                            className="why--image"
                            src={WhyImageExplained}
                            alt="why content images"
                        />
                        <p className="why--title">Hands-On Learning.</p>
                    </div>
                    <div className="why--figure">
                        <img
                            className="why--image"
                            src={WhyImageAffordable}
                            alt="why content images"
                        />
                        <p className="why--title">Affordable.</p>
                    </div>
                    <div className="why--figure">
                        <img
                            className="why--image"
                            src={WhyImageCommunity}
                            alt="why content images"
                        />
                        <p className="why--title">Huge Coding Community.</p>
                    </div>
                    <div className="why--figure">
                        <img
                            className="why--image"
                            src={WhyImageIntership}
                            alt="why content images"
                        />
                        <p className="why--title">Job Intenship.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhySection
