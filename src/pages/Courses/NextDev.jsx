import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection';

function NextDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | The Ultimate Next.js Development Course'
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
                                <img src="../../../svgs/nextjs.svg" alt="frontend dev" />
                                <img src="../../../svgs/firebase.svg" alt="frontend dev" />
                                <img src="../../../svgs/react.svg" alt="frontend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        The Ultimate <span className="content--extra">Next.js </span>{" "}
                                        Development.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to "The Ultimate Next.js Development Course", Whether
                                        you're an experienced developer or just getting started, this
                                        course is your way to mastering Next.js and building modern web
                                        applications. Are you ready to explore the depth of Next.js, a
                                        versatile framework for building dynamic server-rendered websites?
                                        Throughout this course, you'll dive deep into Next.js, learning
                                        its core concepts, best practices, and advanced techniques to
                                        create fast, responsive, and SEO-friendly web applications.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 24 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 3 Live Projects
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-clock" /> 2½hrs / Class
                                        </p>
                                    </span>
                                    {/* <a href="/checkout.html" class="lab-course-button">Enroll Now</a> */}
                                    <button
                                        data-info="The Ultimate Next.js Development"
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
                                        in Next.js—a versatile framework for building dynamic and
                                        server-rendered web applications. They will be able to create
                                        fast, SEO-friendly, and responsive websites using Next.js.
                                    </li>
                                    <li>
                                        Students will become adept at using modern development tools such
                                        as Vite for rapid development, React for building interactive user
                                        interfaces, and Firebase for real-time database and authentication
                                        integration.
                                    </li>
                                    <li>
                                        The course will equip students with the skills to manage
                                        application states efficiently using Redux. They'll learn how to
                                        centralize and control the data flow in their Next.js
                                        applications.
                                    </li>
                                    <li>
                                        Students will gain hands-on experience with Git and GitHub for
                                        version control and collaboration on code projects. They'll be
                                        able to efficiently manage code repositories and collaborate with
                                        others in the development community.
                                    </li>
                                    <li>
                                        This course will introduce students to advanced JavaScript
                                        concepts and modern build tools like npm, Webpack, and Babel. They
                                        will learn how to build, transpile, and optimize their nextjs code
                                        for production.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/nextjs.svg" alt="frontend dev" />
                                <img src="../../../svgs/firebase.svg" alt="frontend dev" />
                                <img src="../../../svgs/react.svg" alt="frontend dev" />
                                <img src="../../../svgs/redux.svg" alt="frontend dev" />
                                <img src="../../../svgs/vite.svg" alt="frontend dev" />
                                <img src="../../../svgs/babel.svg" alt="frontend dev" />
                                <img src="../../../svgs/tailwind.svg" alt="frontend dev" />
                                <img src="../../../svgs/webpack.svg" alt="frontend dev" />
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
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

export default NextDev
