import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import WhySection from '../../components/WhySection'
import StudentTestimonialSection from '../../components/StudentTestimonialSection'

function VueDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Learn Frontend with Vue.js'
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
                                <img src="../../../svgs/vue.svg" alt="frontend dev" />
                                <img src="../../../svgs/vite.svg" alt="frontend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med">
                                        Learn Frontend With <span className="content--extra">Vue.js</span>
                                        .
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the "Learn Frontend with Vue.js" course. Whether you're
                                        an experienced developer or taking your first steps, this course
                                        is your gateway to mastering Vue.js and creating dynamic and
                                        interactive web applications. Are you ready to dive into Vue.js, a
                                        progressive JavaScript framework known for its simplicity and
                                        flexibility? Throughout this course, you'll explore Vue.js
                                        in-depth, mastering its core concepts, and gaining the skills to
                                        build modern, responsive, and highly efficient web interfaces.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 10 Lectures
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
                                        <i className="fi fi-rr-calendar" /> 6-weeks |
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
                                        <span>₦45,000</span>
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
                                        in Vue.js, a progressive JavaScript framework. They will be able
                                        to create dynamic and interactive web interfaces using Vue.js,
                                        harnessing its simplicity and flexibility.
                                    </li>
                                    <li>
                                        Students will become skilled in using modern development tools
                                        such as Vite for rapid development, Redux for state management,
                                        Git, and GitHub for version control and collaboration. They'll
                                        learn how to efficiently manage code repositories and collaborate
                                        with others.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to manage project
                                        dependencies effectively using npm. They'll learn how to organize
                                        and optimize their projects for better performance.
                                    </li>
                                    <li>
                                        Students will gain familiarity with JavaScript build tools like
                                        Webpack and Babel. They'll learn how to bundle, transpile, and
                                        optimize their JavaScript code, ensuring compatibility and
                                        efficiency.
                                    </li>
                                    <li>
                                        Throughout the course, students will engage in hands-on,
                                        project-based learning. They will apply their knowledge to
                                        real-world scenarios, building practical applications that
                                        showcase their Vue.js and frontend development skills.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/vue.svg" alt="frontend dev" />
                                <img src="../../../svgs/vite.svg" alt="frontend dev" />
                                <img src="../../../svgs/sass.svg" alt="frontend dev" />
                                <img src="../../../svgs/npm.svg" alt="frontend dev" />
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
                                <img src="../../../svgs/babel.svg" alt="frontend dev" />
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
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

export default VueDev
