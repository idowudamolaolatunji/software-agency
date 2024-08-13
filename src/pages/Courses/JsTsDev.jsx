import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import WhySection from '../../components/WhySection'
import StudentTestimonialSection from '../../components/StudentTestimonialSection'

function JsTsDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Advanced JavaScript + TypeScript'
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
                                <img src="../../../svgs/js.svg" alt="frontend dev" />
                                <img src="../../../svgs/ts.svg" alt="frontend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med">
                                        Advanced JavaScript{" "}
                                        <span className="content--extra">+ TypeScript</span>.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the course dedicated to advanced JavaScript and
                                        TypeScript. Whether you're an experienced developer or just
                                        getting started, this course is your portal to a deeper
                                        understanding of these versatile programming languages. Are you
                                        ready to explore the intricacies of JavaScript, the language that
                                        powers the web, and its statically typed counterpart, TypeScript?
                                        Throughout this course, you'll delve into advanced concepts,
                                        tackle complex problems, and gain the expertise needed to build
                                        robust and efficient web applications.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 11 Lectures
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
                                        <i className="fi fi-rr-calendar" /> 4-weeks |
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
                                        <span>25,000</span>
                                        <p>Fee + One-time certificate fee.</p>
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
                                        By the end of this course, students will have attained an advanced
                                        level of proficiency in JavaScript, mastering complex concepts
                                        such as closures, prototypes, asynchronous programming, and more.
                                        They will be able to write clean and efficient JavaScript code.
                                    </li>
                                    <li>
                                        Students will gain in-depth knowledge of TypeScript, a statically
                                        typed superset of JavaScript. They will learn how to leverage
                                        TypeScript's features, including type annotations and interfaces,
                                        to write safer and more maintainable code.
                                    </li>
                                    <li>
                                        This course will equip students with the skills to work
                                        effectively with modern development tools like Git, GitHub, npm
                                        for package management, Parcel for JavaScript bundling, TypeScript
                                        compiler for type checking, and Babel for transpiling code for
                                        compatibility.
                                    </li>
                                    <li>
                                        Students will develop strong problem-solving skills, allowing them
                                        to tackle complex programming challenges with confidence. They'll
                                        learn to break down problems, design efficient solutions, and
                                        implement them using advanced JavaScript and TypeScript.
                                    </li>
                                    <li>
                                        Throughout the course, students will engage in hands-on,
                                        project-based learning. They will apply their knowledge to
                                        real-world scenarios, building practical applications that
                                        demonstrate their advanced JavaScript and TypeScript skills.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/js.svg" alt="frontend dev" />
                                <img src="../../../svgs/ts.svg" alt="frontend dev" />
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

export default JsTsDev
