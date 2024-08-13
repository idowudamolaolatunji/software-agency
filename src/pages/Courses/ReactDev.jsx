import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import CtaSection from '../../components/CtaSection';
import WhySection from '../../components/WhySection';
import StudentTestimonialSection from '../../components/StudentTestimonialSection';

function ReactDev() {

    const navigate = useNavigate();

    useEffect(function () {
        document.title = 'Buildspire Ng | React.js Frontend Development.'
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
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        <span className="content--extra">React.js </span>Frontend
                                        Development.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the course dedicated to frontend development with
                                        React.js. Whether you're taking your first steps into the dynamic
                                        world of React.js or an experienced developer seeking to refine
                                        your skills, this course is your gateway to boundless
                                        possibilities. Are you ready to delve into the captivating realm
                                        of React.js, a powerful JavaScript library for building dynamic
                                        and interactive user interfaces? Throughout this course, you'll
                                        gain the knowledge and hands-on experience needed to craft
                                        stunning, responsive web applications.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 17 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 3 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 1½hrs / Class
                                        </p>
                                    </span>
                                    <button className="lab-course-button not-avaliable"> Coming Soon</button>
                                    <span className="lab__section--stat">
                                        <p>
                                            <i className="fi fi-rr-users-alt" />{" "}
                                            <span className="content--extra">10 </span>Enrolled
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-chair-office" /> 15 Slots /{" "}
                                            <span className="content--extra">5</span> Left
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-tags" />
                                            Paid
                                        </p>
                                    </span>
                                </div>
                                <div className="lab__grids-content-two">
                                    <p>
                                        <i className="fi fi-rr-calendar" /> 6-weeks |
                                        <span className="content--extra">Start:</span>Completed.
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
                                        One-time fee.
                                    </p>
                                    <span className="lab-course-price">
                                        <span>₦70,000</span>
                                        <p>One-time fee + certificate fee.</p>
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
                                        By the end of this course, students will have acquired proficiency
                                        in React.js, a powerful JavaScript library for building dynamic
                                        and interactive user interfaces. They will be able to create
                                        modern web applications using React.js, taking advantage of its
                                        component-based architecture.
                                    </li>
                                    <li>
                                        Students will become skilled in using modern development tools
                                        such as Vite and Webpack for bundling JavaScript, Babel for
                                        transpiling, and npm for package management. They will learn to
                                        set up efficient development environments for React projects.
                                    </li>
                                    <li>
                                        The course will equip students with the skills to design
                                        responsive and visually appealing user interfaces using Tailwind
                                        CSS, a utility-first CSS framework. They will learn how to create
                                        well-structured and styled components.
                                    </li>
                                    <li>
                                        Students will gain a strong understanding of state management in
                                        React applications using Redux. They'll learn how to manage
                                        complex application states efficiently, making their applications
                                        more maintainable and scalable.
                                    </li>
                                    <li>
                                        This course will introduce students to Git and GitHub for version
                                        control and collaboration. They will learn how to effectively
                                        manage code repositories, collaborate with others on projects, and
                                        contribute to open-source development.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/react.svg" alt="frontend dev" />
                                <img src="../../../svgs/redux.svg" alt="frontend dev" />
                                <img src="../../../svgs/vite.svg" alt="frontend dev" />
                                <img src="../../../svgs/tailwind.svg" alt="frontend dev" />
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
                                <img src="../../../svgs/npm.svg" alt="frontend dev" />
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            <WhySection />
            <StudentTestimonialSection />
            <CtaSection />
            <Footer />
        </>
    )
}

export default ReactDev
