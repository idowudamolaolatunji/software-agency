import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import CtaSection from '../../components/CtaSection';
import { LuArrowUpRight } from 'react-icons/lu';
import StudentTestimonialSection from '../../components/StudentTestimonialSection';
import { IoLogoWhatsapp } from 'react-icons/io5';
import WhySection from '../../components/WhySection';

function FullReactDev() {


    useEffect(function () {
        document.title = 'Buildspire Ng | The Complete Frontend Development.'
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="section lab-course-hero__section">
                    <div className="container">
                        <div className="lab__section--content">
                            <div className="lab__Section-bg-img">
                                <img src="../../../svgs/react.svg" alt="frontend dev" />
                                <img src="../../../svgs/vite.svg" alt="frontend dev" />
                                <img src="../../../svgs/js.svg" alt="frontend dev" />
                                <img src="../../../svgs/css.svg" alt="frontend dev" />
                                <img src="../../../svgs/html.svg" alt="frontend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        The Complete React.js
                                        <span className="content--extra"> Frontend </span>Development
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the course dedicated to frontend development with HTML, CSS, JavaScript, and React.js. Whether you're taking your first steps into the dynamic world of web development or an experienced developer seeking to refine your skills, this course is your gateway to boundless possibilities. Are you ready to delve into the captivating realm of HTML, CSS, JavaScript, and React.js, a powerful combination for building dynamic, interactive, and responsive user interfaces? Throughout this course, you'll gain the knowledge and hands-on experience needed to craft stunning web applications.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 24 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 4 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 1hrs / Class
                                        </p>
                                    </span>
                                    <a target='_blank' href="https://forms.gle/fACJYD76kFNhz8rM9" className="lab-course-button avaliable">
                                        Enroll Now!
                                        <LuArrowUpRight className='icon' />
                                    </a>
                                    <span className="lab__section--stat">
                                        <p>
                                            <i className="fi fi-rr-users-alt" />{" "}
                                            <span className="content--extra">20 </span>Enrolled
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-chair-office" /> 35 Slots /{" "}
                                            <span className="content--extra">15</span> Left
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-tags" />
                                            Paid
                                        </p>
                                    </span>
                                </div>
                                <div className="lab__grids-content-two">
                                    <p style={{ display: "block" }}>
                                        <i className="fi fi-rr-calendar" />&nbsp;&nbsp;10-weeks |{" "}
                                        <span className="content--extra">Start:{" "}</span>September 10th, 2024.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-book-bookmark" /> Resources, Live mentoring and re-recorded class videos to help you through the learning period.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-code-simple" /> Coding challenges to help you learn better.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-book-open-cover" /> Final coding test.
                                    </p>

                                    <p>
                                        <i class="fi fi-rr-trophy-star" /> Certifications on completions.
                                    </p>

                                    <p>
                                        <i className="fi fi-rr-circle-star" /> Rewards, interships, and free advance courses for best students.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-funnel-dollar" />
                                        One-time fee.
                                    </p>
                                    <span className="lab-course-price">
                                        <span>₦35,000</span>
                                        <span className='slashed-price'>₦80,000</span>
                                        <p>One-time fee</p>
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
                                    <li> By the end of this course, students will have acquired proficiency in building dynamic and interactive web applications using HTML, CSS, JavaScript, and React.js. They will be able to create modern web applications, taking advantage of HTML's structuring capabilities, CSS's styling power, JavaScript's dynamic functionality, and React's component-based architecture.

                                    </li>
                                    <li>
                                    Students will become skilled in using modern development tools such as Vite and Webpack for bundling JavaScript, Babel for transpiling, and npm for package management. They will learn to set up efficient development environments for front-end projects, leveraging HTML, CSS, and JavaScript
                                    </li>
                                    <li>
                                        With a strong foundation in HTML, CSS, and JavaScript, students will dive deeper into React.js, learning how to build reusable UI components, manage state and props, and optimize application performance. They will explore advanced React concepts, such as hooks, context, and routing, to create complex and scalable applications.
                                    </li>
                                    <li>
                                        Students will gain hands-on experience building responsive and interactive user interfaces using React.js, including designing and implementing intuitive UI components, handling user input and events, and integrating with external APIs
                                    </li>
                                    <li>
                                        This course will introduce students to Git and GitHub for version control and collaboration. They will learn how to effectively manage code repositories, collaborate with others on projects, and contribute to open-source development, applying their HTML, CSS, JavaScript, and React.js skills.
                                    </li>
                                </ul>

                                <a target='_blank' href="https://forms.gle/fACJYD76kFNhz8rM9" style={{ display: 'inline-block', marginTop: '2rem' }} className="lab-course-button avaliable">
                                    Enroll Now!
                                </a>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/react.svg" alt="frontend dev" />
                                <img src="../../../svgs/html.svg" alt="frontend dev" />
                                <img src="../../../svgs/js.svg" alt="frontend dev" />
                                <img src="../../../svgs/vite.svg" alt="frontend dev" />
                                <img src="../../../svgs/css.svg" alt="frontend dev" />
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
                                <img src="../../../svgs/npm.svg" alt="frontend dev" />
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <WhySection />
            <StudentTestimonialSection>
                <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a className='whatsapp--btn'target="_blank" href="https://wa.me/2347047949344?text=Hi%2C%20I%27m%20interested%20in%20the%20frontend%20development%20program">Chat us on Whatsapp <IoLogoWhatsapp /></a>
                </div>
            </StudentTestimonialSection>
            <CtaSection />
            <Footer />
        </>
    )
}

export default FullReactDev
