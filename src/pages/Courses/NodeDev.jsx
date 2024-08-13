import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import StudentTestimonialSection from '../../components/StudentTestimonialSection'
import WhySection from '../../components/WhySection'

function NodeDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Backend Development with Node, Express + MongoDB'
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
                                <img src="../../../svgs/node.svg" alt="backend dev" />
                                <img src="../../../svgs/mongodb.svg" alt="backend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Backend Development With{" "}
                                        <span className="content--extra">Node, Express and MongoDb</span>
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to "Backend Development with Node, Express and MongoDB". Whether
                                        you're an aspiring developer or a seasoned pro, this course is
                                        your gateway to mastering backend development with Node.js and
                                        MongoDB. Are you ready to explore the power of Node.js, a
                                        versatile runtime environment, and MongoDB, a NoSQL database known
                                        for its scalability and flexibility? Throughout this course,
                                        you'll delve deep into both technologies, mastering their core
                                        concepts, and gaining the skills to create efficient and robust
                                        backend systems.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 18 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 5 Live Projects
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
                                        <span>₦75,000</span>
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
                                        in backend web development with Node.js, Express.js, MongoDB,
                                        Mongoose, and other essential technologies. They will be able to
                                        design, build, and maintain efficient and scalable backend systems
                                        for web applications.
                                    </li>
                                    <li>
                                        Students will gain expertise in using Express.js, a popular
                                        Node.js framework for building robust and efficient web APIs.
                                        They'll learn how to create RESTful APIs and handle requests and
                                        responses effectively.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to efficiently
                                        manage NoSQL databases using MongoDB and Mongoose. They'll learn
                                        how to design schemas, perform CRUD operations, and build backend
                                        systems that can handle large volumes of data.
                                    </li>
                                    <li>
                                        Students will become proficient in using Git for version control.
                                        They'll learn how to track changes in their codebase, collaborate
                                        with team members, and manage code repositories effectively.
                                    </li>
                                    <li>
                                        The course will introduce students to Postman, a powerful tool for
                                        API testing and documentation. They'll learn how to test, debug,
                                        and document their backend APIs, ensuring reliability and
                                        functionality.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/node.svg" alt="backend dev" />
                                <img src="../../../svgs/express.svg" alt="backend dev" />
                                <img src="../../../svgs/mongoose.svg" alt="backend dev" />
                                <img src="../../../svgs/mongodb.svg" alt="backend dev" />
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

export default NodeDev
