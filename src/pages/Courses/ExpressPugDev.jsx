import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import WhySection from '../../components/WhySection'
import StudentTestimonialSection from '../../components/StudentTestimonialSection'

function ExpressPugDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Server-side Express Pug Template Engine.'
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
                                <img src="../../../svgs/express.svg" alt="full-stack dev" />
                                <img src="../../../svgs/icons8-pug-48.png" alt="full-stack dev" />
                                <img src="../../../svgs/mongodb.svg" alt="full-stack dev" />
                                <img src="../../../svgs/mongoose.svg" alt="full-stack dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Server-side <span className="content--extra">Express &amp; </span>
                                        Pug Template Engine.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to "The Server-side, Full-Stack Node.js with Express and
                                        Pug. Whether you're an experienced developer or just starting,
                                        this course is your portal to mastering the Node.js stack for
                                        building modern web applications. Are you prepared to explore the
                                        power of Node.js, Express.js, MongoDB, Mongoose, and Pug, renowned
                                        for their capabilities in crafting dynamic, efficient, and
                                        scalable web apps? Throughout this course, you'll delve deep into
                                        each component of this stack, mastering their core concepts, and
                                        gaining the skills to create robust, responsive, and data-driven
                                        web applications.
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
                                        <span>₦85,000</span>
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
                                        in full-stack web development with Node.js, Express.js, MongoDB,
                                        Mongoose, and Pug—a potent combination for building efficient and
                                        data-driven web applications. They will be able to create robust
                                        and responsive web apps.
                                    </li>
                                    <li>
                                        Students will become skilled in using modern development tools
                                        such as Git and GitHub for version control and collaboration,
                                        MongoDB for database management, Mongoose for efficient data
                                        modeling, and Postman for API testing.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to efficiently
                                        manage databases using MongoDB and Mongoose. They'll learn how to
                                        design schemas, perform CRUD operations, and build dynamic web
                                        applications.
                                    </li>
                                    <li>
                                        Students will gain expertise in using the Pug templating engine to
                                        create dynamic and efficient web views. They'll be able to design
                                        and render web pages that meet modern web standards.
                                    </li>
                                    <li>
                                        The course encourages students to gain hands-on experience with
                                        Git and GitHub for version control and collaboration on code
                                        projects. They'll be able to efficiently manage code repositories,
                                        collaborate with team members, and contribute to full-stack web
                                        development projects.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/express.svg" alt="full-stack dev" />
                                <img
                                    className="img-svg"
                                    src="../../../svgs/icons8-pug-48.png"
                                    alt="full-stack dev"
                                />
                                <img src="../../../svgs/node.svg" alt="full-stack dev" />
                                <img src="../../../svgs/mongoose.svg" alt="full-stack dev" />
                                <img src="../../../svgs/mongodb.svg" alt="full-stack dev" />
                                <img src="../../../svgs/git.svg" alt="full-stack dev" />
                                <img src="../../../svgs/vsCode.svg" alt="full-stack dev" />
                                <img src="../../../svgs/postman-white.svg" alt="full-stack dev" />
                                <img src="../../../svgs/github.svg" alt="full-stack dev" />
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

export default ExpressPugDev
