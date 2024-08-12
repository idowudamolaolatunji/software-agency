import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection';

function Postman() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Postman API Testing'
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />

            <main>
                <section className="section lab-course-hero__section">
                    <div className="container">
                        <div className="lab__section--content">
                            <div className="lab__Section-bg-img">
                                <img src="../../../svgs/postman-white.svg" alt="backend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Postman Api <span className="content--extra">Testing</span>.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the "Postman API Testing" course. Whether you're an
                                        aspiring tester or an experienced developer, this course is your
                                        gateway to mastering API testing and documentation using Postman.
                                        Are you ready to explore the power of Postman, a dynamic and
                                        indispensable tool for simplifying API testing processes?
                                        Throughout this course, you'll dive deep into Postman, mastering
                                        its core features, and gaining the skills to test and validate
                                        APIs efficiently.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 7 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 2 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 2hrs / Class
                                        </p>
                                    </span>
                                    {/* <a href="/checkout.html" class="lab-course-button">Enroll Now</a> */}
                                    <button
                                        data-info="Postman Api Testing"
                                        className="lab-course-button not-avaliable"
                                    >
                                        Coming Soon
                                    </button>
                                    <span className="lab__section--stat">
                                        <p>
                                            <i className="fi fi-rr-users-alt" />{" "}
                                            <span className="content--extra">0 </span>Enrolled
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-chair-office" /> 0 Slots /{" "}
                                            <span className="content--extra">0</span> Left
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-tags" />
                                            Free
                                        </p>
                                    </span>
                                </div>
                                <div className="lab__grids-content-two">
                                    <p>
                                        <i className="fi fi-rr-calendar" /> 4-weeks |
                                        <span className="content--extra">Start:</span>Coming Soon.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-book-bookmark" /> Resources, Live mentoring
                                        and re-recorded class videos to help you through the learning
                                        period.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-code-simple" /> Coding challenges to help
                                        you learn better.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-book-open-cover" /> Final coding test.
                                    </p>

                                    <p>
                                        <i class="fi fi-rr-trophy-star" /> Certifications on completions.
                                    </p>
                                     
                                    <p>
                                        <i className="fi fi-rr-circle-star" />
                                        Rewards, interships, and free advance courses for best students.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-funnel-dollar" />
                                        One-time certification fee
                                    </p>
                                    <span className="lab-course-price">
                                        <span>₦5,000</span>
                                        <p>One-time certificate fee.</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
<section className="section lab-what__section">
                    <div className="container">
                        <div className="lab__grids">
                            <div className="lab-what-curiculum">
                                <h4 className="section__subtitle">Course Outline</h4>
                                <p className="content--heading size--med">
                                    You will achieve the following,{" "}
                                    <span className="content--extra">Outcome </span>In this course
                                </p>
                                <ul>
                                    <li>
                                        By the end of this course, students will have achieved proficiency
                                        in using Postman—a powerful tool for API testing and
                                        documentation. They'll be able to create, execute, and automate
                                        API tests effectively.
                                    </li>
                                    <li>
                                        Students will gain expertise in designing and executing API tests,
                                        ensuring the reliability, functionality, and security of web APIs.
                                        They'll learn best practices for testing different types of APIs.
                                    </li>
                                    <li>
                                        The course will teach students how to use Postman for API
                                        documentation, helping them create clear and comprehensive API
                                        documentation that facilitates better collaboration among
                                        development teams.
                                    </li>
                                    <li>
                                        Students will become proficient in using Git for version control.
                                        They'll learn how to track changes in their API testing scripts,
                                        collaborate with team members, and manage code repositories
                                        effectively.
                                    </li>
                                    <li>
                                        The course will introduce students to automation techniques in
                                        Postman. They'll learn how to create automated test suites,
                                        schedule tests, and integrate testing into their CI/CD pipelines
                                        for continuous validation.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/postman-white.svg" alt="backend dev" />
                                <img src="../../../svgs/git.svg" alt="backend dev" />
                                <img src="../../../svgs/github.svg" alt="backend dev" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <CtaSection />
            <Footer />
        </>
    )
}

export default Postman
