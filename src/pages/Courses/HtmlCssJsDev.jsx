import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection';

function HtmlCssJsDev() {

    useEffect(function () {
        document.title = 'CodeLab Africa | The Comprehensive HTML, CSS, and JavaScript course'
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
                                <img src="../../../svgs/html.svg" alt="frontend dev" />
                                <img src="../../../svgs/css.svg" alt="frontend dev" />
                                <img src="../../../svgs/js.svg" alt="frontend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        <span className="content--extra">Learn </span>Html, Css and
                                        JavaScript
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the course dedicated to HTML, CSS, and JavaScript. Are
                                        you ready to explore the essentials of web development, from
                                        crafting the structure of web pages with HTML to styling them with
                                        CSS, and adding interactivity and dynamic features with
                                        JavaScript? Whether you're a complete novice or looking to enhance
                                        your proficiency, our course is tailored to equip you with the
                                        fundamental knowledge and hands-on experience required to create
                                        stunning, interactive websites.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 17 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 4 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 2hrs / Class
                                        </p>
                                    </span>
                                    {/* <a href="https://paystack.com/pay/codelabafrica" class="lab-course-button">Enroll Now</a> */}
                                    <button className="lab-course-button completed">
                                        Completed
                                    </button>
                                    <span className="lab__section--stat">
                                        <p>
                                            <i className="fi fi-rr-users-alt" />{" "}
                                            <span className="content--extra">395 </span>Enrolled
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-chair-office" /> 500 Slots /{" "}
                                            <span className="content--extra">105</span> Left
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-tags" />
                                            Paid
                                        </p>
                                    </span>
                                </div>
                                <div className="lab__grids-content-two">
                                    <p>
                                        <i className="fi fi-rr-calendar" /> 9-weeks |
                                        <span className="content--extra">Class Starts:</span>Oct 20, 2023.
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
                                        One-time certificate fee
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
                                        By the end of the course, students should have a solid
                                        understanding of HTML for structuring web content, CSS for
                                        styling, and JavaScript for adding interactivity and functionality
                                        to web pages.
                                    </li>
                                    <li>
                                        Students will learn the fundamentals of version control using Git
                                        and how to collaborate with others on code projects using GitHub.
                                        They'll understand the importance of version control for code
                                        management and teamwork.
                                    </li>
                                    <li>
                                        Students will become proficient in using development tools like
                                        Visual Studio Code (VSCode) to write and debug code efficiently.
                                        They will learn how to set up a productive development
                                        environment.
                                    </li>
                                    <li>
                                        This course will introduce students to npm (Node Package Manager)
                                        for managing project dependencies and scripts. They will also
                                        explore build tools like Parcel for bundling JavaScript and Babel
                                        for transpiling modern JavaScript to ensure compatibility with
                                        older browsers.
                                    </li>
                                    <li>
                                        Throughout the course, students will work on hands-on projects
                                        that simulate real-world development scenarios. By completing
                                        these projects, they will build a portfolio of work and gain
                                        practical experience in web development.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/html.svg" alt="frontend dev" />
                                <img src="../../../svgs/css.svg" alt="frontend dev" />
                                <img src="../../../svgs/js.svg" alt="frontend dev" />
                                <img src="../../../svgs/vsCode.svg" alt="frontend dev" />
                                <img src="../../../svgs/npm.svg" alt="frontend dev" />
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
                                <img src="../../../svgs/babel.svg" alt="frontend dev" />
                                <img src="../../../svgs/parcel.svg" alt="frontend dev" />
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
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

export default HtmlCssJsDev
