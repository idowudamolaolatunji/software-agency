import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection';

function GitGithub() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Version Control GitHub Mastery'
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
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Version Control <span className="content--extra">Github </span>
                                        Mastery.
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the course dedicated to GitHub Mastery. Whether you're
                                        a seasoned developer or just beginning, this course is a gateway
                                        to mastering version control using GitHub. Are you ready to
                                        explore the intricacies of Git and GitHub, essential tools for
                                        tracking changes, collaborating on code projects, and contributing
                                        to open-source development? Throughout this course, you'll delve
                                        deep into the world of version control, gaining the expertise
                                        needed to efficiently manage code repositories, collaborate
                                        effectively with others, and make a meaningful impact in the
                                        developer community.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 8 Lectures
                                        </p>
                                        <p>
                                            <i className="fi fi-rr-diagram-project" /> 2 Live Projects
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
                                            Free
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
                                        <i className="fi fi-rr-trophy-star" /> Certifications on
                                        completions.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-circle-star" />
                                        Rewards, interships, and free advance courses for best students.
                                    </p>
                                    <p>
                                        <i className="fi fi-rr-funnel-dollar" />
                                        One-time certificate fee
                                    </p>
                                    <span className="lab-course-price">
                                        <span>₦5,000</span>
                                        <p>One-time certificate fee.</p>
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
                                        By the end of this course, students will be proficient in using
                                        Git, a powerful version control system. They will understand how
                                        to track changes, create branches, and manage their code
                                        effectively using Git.
                                    </li>
                                    <li>
                                        Students will learn how to leverage GitHub to collaborate with
                                        others on code projects. They'll gain skills in forking
                                        repositories, creating pull requests, and resolving merge
                                        conflicts, enabling seamless teamwork.
                                    </li>
                                    <li>
                                        This course will equip students with the knowledge to efficiently
                                        manage code repositories on GitHub. They'll learn to organize,
                                        document, and maintain their projects for clarity and
                                        accessibility.
                                    </li>
                                    <li>
                                        Students will discover how to seamlessly integrate Git and GitHub
                                        into their workflow using Visual Studio Code (VSCode). They'll
                                        become adept at using VSCode's built-in Git features for a
                                        smoother coding experience.
                                    </li>
                                    <li>
                                        The course encourages students to contribute to open-source
                                        projects hosted on GitHub. By the end, students will be
                                        well-prepared to participate in open-source development, make
                                        meaningful contributions, and engage with the global developer
                                        community.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/github.svg" alt="frontend dev" />
                                <img src="../../../svgs/vsCode.svg" alt="frontend dev" />
                                <img src="../../../svgs/git.svg" alt="frontend dev" />
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

export default GitGithub
