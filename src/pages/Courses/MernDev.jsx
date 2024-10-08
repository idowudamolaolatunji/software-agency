import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import CheckoutModal from '../../components/CheckoutModal';
import { useNavigate } from 'react-router-dom';
import CtaSection from '../../components/CtaSection';
import WhySection from '../../components/WhySection';
import StudentTestimonialSection from '../../components/StudentTestimonialSection';

function MernDev() {
    // const [showCheckOutModal, setShowCheckOutModal] = useState(false);

    const navigate = useNavigate();

    useEffect(function () {
        document.title = 'Buildspire Ng | Full-Stack Development with MERN Stack'
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
                                <img src="../../../svgs/mongodb.svg" alt="full-stack dev" />
                                <img src="../../../svgs/express.svg" alt="full-stack dev" />
                                <img src="../../../svgs/node.svg" alt="full-stack dev" />
                                <img src="../../../svgs/react.svg" alt="full-stack dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med">
                                        Full-stack Development With{" "}
                                        <span className="content--extra">MERN Stack</span>.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to "Full-Stack Development with MERN Stack". Whether
                                        you're an experienced developer or just starting, this course is
                                        your portal to mastering the MERN (MongoDB, Express.js, React,
                                        Node.js) stack for building modern web applications. Are you ready
                                        to explore the power of the MERN stack, renowned for its
                                        versatility and efficiency in crafting dynamic and scalable web
                                        apps? Throughout this course, you'll delve deep into each
                                        component of the MERN stack, mastering their core concepts, and
                                        gaining the skills to create robust, responsive, and data-driven
                                        web applications.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 24 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 5 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 1½hrs / Class
                                        </p>
                                    </span>
                                    <button className="lab-course-button not-avaliable"> Completed</button>
                                    <span className="lab__section--stat">
                                        <p>
                                            <i className="fi fi-rr-users-alt" />{" "}
                                            <span className="content--extra">5 </span>Enrolled
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-chair-office" /> 30 Slots /{" "}
                                            <span className="content--extra">25</span> Left
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-tags" />
                                            Paid
                                        </p>
                                    </span>
                                </div>
                                <div className="lab__grids-content-two">
                                    <p>
                                        <i className="fi fi-rr-calendar" /> 12-weeks |
                                        <span className="content--extra">Start:</span>March 15th, 2024.
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
                                        <span>₦100,000</span>
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
                                        in the MERN (MongoDB, Express.js, React, Node.js) stack—a powerful
                                        combination for building full-stack web applications. They will be
                                        able to create robust, responsive, and data-driven web apps.
                                    </li>
                                    <li>
                                        Students will become skilled in using modern development tools
                                        such as Vite for rapid development, Node.js for server-side
                                        scripting, React for frontend development, Express.js for building
                                        APIs, MongoDB with Mongoose for database management, postman, and
                                        Styled Components for advanced CSS styling.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to manage
                                        application states efficiently using Redux. They'll learn how to
                                        centralize and control the data flow in their MERN stack
                                        applications.
                                    </li>
                                    <li>
                                        Students will gain hands-on experience with Git and GitHub for
                                        version control and collaboration on code projects. They'll be
                                        able to efficiently manage code repositories, collaborate with
                                        team members, and contribute to full-stack web development
                                        projects.
                                    </li>
                                    <li>
                                        Students will become familiar with advanced JavaScript build tools
                                        such as npm and Webpack. They'll learn how to bundle, optimize,
                                        and deploy their full-stack applications efficiently.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/mongodb.svg" alt="full-stack dev" />
                                <img src="../../../svgs/express.svg" alt="full-stack dev" />
                                <img src="../../../svgs/node.svg" alt="full-stack dev" />
                                <img src="../../../svgs/react.svg" alt="full-stack dev" />
                                <img src="../../../svgs/mongoose.svg" alt="full-stack dev" />
                                <img src="../../../svgs/redux.svg" alt="full-stack dev" />
                                <img src="../../../svgs/tailwind.svg" alt="full-stack dev" />
                                <img src="../../../svgs/git.svg" alt="full-stack dev" />
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

export default MernDev
