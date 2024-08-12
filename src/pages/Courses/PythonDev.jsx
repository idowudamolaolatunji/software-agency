import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection';

function PythonDev() {

    useEffect(function () {
        document.title = 'CodeLab Africa | Learning Python + PostgreSQL'
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
                                <img src="../../../svgs/python.svg" alt="backend dev" />
                                <img src="../../../svgs/postgrelsql.svg" alt="backend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Learing <span className="content--extra">Python + </span>
                                        PostgrelSql.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the "Learning Python + PostgreSQL" course. Whether
                                        you're a novice programmer or an experienced developer, this
                                        course is your gateway to mastering Python and PostgreSQL for
                                        building robust and data-driven web applications. Are you ready to
                                        delve into the versatility of Python, a dynamic and widely-used
                                        programming language, and PostgreSQL, a powerful open-source
                                        relational database system? Throughout this course, you'll explore
                                        both technologies in depth, mastering their core concepts, and
                                        gaining the skills to create efficient and data-rich web
                                        solutions.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 16 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 4 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 2hrs / Class
                                        </p>
                                    </span>
                                    {/* <a href="/checkout.html" class="lab-course-button">Enroll Now</a> */}
                                    <button
                                        data-info="Learing Python + PostgrelSql"
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
                                            Paid
                                        </p>
                                    </span>
                                </div>
                                <div className="lab__grids-content-two">
                                    <p>
                                        <i className="fi fi-rr-calendar" /> 8-weeks |
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
                                        By the end of this course, students will have achieved proficiency
                                        in Python—a versatile programming language—and PostgreSQL—an
                                        advanced relational database system. They will be able to design,
                                        develop, and maintain data-driven web applications.
                                    </li>
                                    <li>
                                        Students will gain expertise in using Flask and Django, two
                                        popular Python web frameworks. They'll learn how to build web
                                        applications efficiently, from simple prototypes to complex,
                                        feature-rich projects.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to use Git for
                                        version control. They'll learn how to manage code repositories,
                                        collaborate with team members, and track changes in their codebase
                                        effectively.
                                    </li>
                                    <li>
                                        The course will introduce students to Postman, a powerful tool for
                                        API testing and documentation. They'll learn how to test and
                                        validate web APIs, ensuring functionality and reliability.
                                    </li>
                                    <li>
                                        Students will become proficient in using Python Integrated
                                        Development Environments (IDEs) to enhance their coding
                                        experience. They'll learn to use IDEs effectively to write, debug,
                                        and manage Python code.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/python.svg" alt="backend dev" />
                                <img src="../../../svgs/postgrelsql.svg" alt="backend dev" />
                                <img src="../../../svgs/django.svg" alt="backend dev" />
                                <img src="../../../svgs/flask.svg" alt="backend dev" />
                                <img src="../../../svgs/git.svg" alt="backend dev" />
                                <img src="../../../svgs/vsCode.svg" alt="backend dev" />
                                <img src="../../../svgs/postman-white.svg" alt="backend dev" />
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

export default PythonDev
