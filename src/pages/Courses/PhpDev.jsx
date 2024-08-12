import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'

function PhpDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Ultimate PHP + MySQL Mastery'
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
                                <img src="../../../svgs/php.svg" alt="backend dev" />
                                <img src="../../../svgs/mySql.svg" alt="backend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Ultimate PHP + <span className="content--extra">mySQL </span>
                                        Mastery.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the "Ultimate PHP + MySQL Mastery" course. Whether
                                        you're a budding developer or an experienced pro, this course is
                                        your gateway to mastering PHP and MySQL for building dynamic and
                                        data-driven web applications. Are you ready to explore the power
                                        of PHP, a versatile scripting language, and MySQL, a robust
                                        relational database management system? Throughout this course,
                                        you'll dive deep into both technologies, mastering their core
                                        concepts, and gaining the skills to create efficient and
                                        data-driven web solutions.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 17 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 3 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 2hrs / Class
                                        </p>
                                    </span>
                                    <button className="lab-course-button not-avaliable"> Coming Soon</button>
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
                                        <i className="fi fi-rr-calendar" /> 10-weeks |
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
                                        <span>₦78,000</span>
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
                                        in PHP—a versatile scripting language—and MySQL—a powerful
                                        relational database management system. They will be able to
                                        design, build, and maintain data-driven web applications.
                                    </li>
                                    <li>
                                        Students will gain expertise in using MySQL to design and manage
                                        relational databases. They'll learn how to create tables, perform
                                        CRUD operations, and optimize queries for efficient data retrieval
                                        and storage.
                                    </li>
                                    <li>
                                        Students will gain expertise in using MySQL to design and manage
                                        relational databases. They'll learn how to create tables, perform
                                        CRUD operations, and optimize queries for efficient data retrieval
                                        and storage.
                                    </li>
                                    <li>
                                        The course will introduce students to Postman, a powerful tool for
                                        API testing and documentation. They'll learn how to test and
                                        validate web APIs, ensuring their functionality and reliability.
                                    </li>
                                    <li>
                                        Upon completion, students will have the knowledge to create
                                        dynamic and data-driven web applications using PHP and MySQL.
                                        They'll be able to build interactive and responsive web solutions
                                        that can handle real-world scenarios.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/php.svg" alt="backend dev" />
                                <img src="../../../svgs/mySql.svg" alt="backend dev" />
                                <img src="../../../svgs/postman-white.svg" alt="backend dev" />
                                <img src="../../../svgs/git.svg" alt="backend dev" />
                                <img src="../../../svgs/vsCode.svg" alt="backend dev" />
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

export default PhpDev
