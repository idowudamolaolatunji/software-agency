import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import WhySection from '../../components/WhySection'
import StudentTestimonialSection from '../../components/StudentTestimonialSection'

function ReactNativeDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | The Ultimate React Native Mastery'
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
                                <img src="../../../svgs/reactnative.svg" alt="mobile dev" />
                                <img src="../../../svgs/redis.svg" alt="mobile dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med">
                                        The Ultimate{" "}
                                        <span className="content--extra">React Native</span> Mastery.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to "The Ultimate React Native Mastery" course. Whether
                                        you're an experienced developer or just taking your first steps,
                                        this course is your gateway to mastering React Native and crafting
                                        extraordinary mobile applications. Are you prepared to dive deep
                                        into React Native, a framework renowned for its ability to build
                                        cross-platform mobile apps with a single codebase? Throughout this
                                        course, you'll explore React Native in-depth, gaining a profound
                                        understanding of its core concepts, and equipping yourself with
                                        the skills to create powerful and engaging mobile experiences.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 14 Lectures
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
                                        <span>₦65,000</span>
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
                                        in React Native, a powerful framework for building cross-platform
                                        mobile applications. They will be able to create feature-rich and
                                        responsive mobile apps using a single codebase.
                                    </li>
                                    <li>
                                        Students will gain expertise in state management using Redux,
                                        allowing them to efficiently manage complex application states in
                                        their React Native projects.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to use Git and
                                        GitHub for version control and collaboration. They'll be able to
                                        efficiently manage code repositories, collaborate with team
                                        members, and contribute to mobile app projects.
                                    </li>
                                    <li>
                                        Students will become familiar with modern JavaScript build tools
                                        such as npm and Webpack. They'll learn how to bundle, optimize,
                                        and deploy their React Native apps efficiently.
                                    </li>
                                    <li>
                                        The course will introduce students to Firebase, enabling them to
                                        integrate real-time databases, authentication, and cloud services
                                        into their React Native apps. They'll learn to create feature-rich
                                        and dynamic mobile experiences.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/reactnative.svg" alt="mobile dev" />
                                <img src="../../../svgs/redis.svg" alt="mobile dev" />
                                <img src="../../../svgs/redux.svg" alt="mobile dev" />
                                <img src="../../../svgs/vsCode.svg" alt="mobile dev" />
                                <img src="../../../svgs/github.svg" alt="mobile dev" />
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

export default ReactNativeDev
