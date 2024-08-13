import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection';
import StudentTestimonialSection from '../../components/StudentTestimonialSection';
import WhySection from '../../components/WhySection';

function DotNetDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Comprehensive .NET Core + mySQL'
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
                                <img src="../../../svgs/dotNet.svg" alt="backend dev" />
                                <img src="../../../svgs/mySql.svg" alt="backend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Comprehensive <span className="content--extra">.NET</span> Core +
                                        mySQL
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the "Comprehensive .NET Core + MySQL" course. Whether
                                        you're a seasoned developer or just starting, this course is your
                                        portal to mastering .NET Core and MySQL for building robust and
                                        data-driven web applications. Are you ready to explore the power
                                        of .NET Core, a versatile and cross-platform framework, and MySQL,
                                        a reliable and scalable relational database system? Throughout
                                        this course, you'll dive deep into both technologies, mastering
                                        their core concepts, and gaining the skills to create efficient
                                        and data-rich web solutions.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 24 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 4 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 2hrs / Class
                                        </p>
                                    </span>
                                    {/* <a href="/checkout.html" class="lab-course-button">Enroll Now</a> */}
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
                                        <span>₦68,000</span>
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
                                        in .NET Core—a versatile and cross-platform framework—and MySQL—a
                                        robust relational database system. They will be able to design,
                                        develop, and maintain data-driven web applications.
                                    </li>
                                    <li>
                                        Students will gain expertise in using C#, a versatile and
                                        widely-used programming language, to build web applications
                                        efficiently. They'll learn how to leverage .NET Core for building
                                        modern and scalable web solutions.
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
                                        Students will become proficient in using MySQL for relational
                                        database management. They'll learn how to design schemas, perform
                                        CRUD operations, and optimize queries for efficient data retrieval
                                        and storage.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/dotNet.svg" alt="backend dev" />
                                <img src="../../../svgs/mySql.svg" alt="backend dev" />
                                <img src="../../../svgs/git.svg" alt="backend dev" />
                                <img src="../../../svgs/vsCode.svg" alt="backend dev" />
                                <img src="../../../svgs/postman-white.svg" alt="backend dev" />
                                <img src="../../../svgs/github.svg" alt="backend dev" />
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

export default DotNetDev
