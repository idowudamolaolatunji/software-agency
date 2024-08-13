import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import WhySection from '../../components/WhySection'
import StudentTestimonialSection from '../../components/StudentTestimonialSection'

function FlutterDev() {

    useEffect(function () {
        document.title = 'Buildspire Ng | Mobile Development with Dart + Flutter'
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
                                <img src="../../../svgs/dart.svg" alt="mobile dev" />
                                <img src="../../../svgs/flutter.svg" alt="mobile dev" />
                            </div>
                            <div className="lab__grids">
                                <div className="lab__grids-content-one">
                                    <p className="content--heading size--med-two">
                                        Mobile Development{" "}
                                        <span className="content--extra">Dart + Flutter</span>
                                    </p>
                                    <p className="lab__section--text">
                                        Welcome to the "Mobile Development with Dart + Flutter" course.
                                        Whether you're an experienced developer or just starting out, this
                                        course is your portal to mastering Dart and Flutter for building
                                        stunning cross-platform mobile applications. Are you ready to
                                        explore the power of Dart, a versatile programming language, and
                                        Flutter, a framework renowned for its fast and expressive UI
                                        development? Throughout this course, you'll delve deep into Dart
                                        and Flutter, mastering their core concepts, and gaining the skills
                                        to create beautiful and responsive mobile apps.
                                    </p>
                                    <span className="lab__section--stat lab">
                                        <p>
                                            <i className="fi fi-rr-book-open-reader" /> 14 Lectures
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
                                        in Flutter, a powerful and expressive framework for building
                                        cross-platform mobile applications. They will be able to create
                                        visually appealing and responsive mobile apps.
                                    </li>
                                    <li>
                                        Students will gain in-depth knowledge of Dart, a versatile
                                        programming language used in Flutter development. They'll be able
                                        to write efficient and scalable code to power their mobile
                                        applications.
                                    </li>
                                    <li>
                                        This course will introduce students to Firebase, enabling them to
                                        integrate real-time databases, authentication, and cloud services
                                        into their mobile apps. They'll learn to create feature-rich and
                                        dynamic mobile experiences.
                                    </li>
                                    <li>
                                        Students will become skilled in using Git and GitHub for version
                                        control and collaboration. They'll be able to efficiently manage
                                        code repositories, collaborate with team members, and contribute
                                        to mobile app projects.
                                    </li>
                                    <li>
                                        Upon completion of the course, students will be well-prepared to
                                        develop cross-platform mobile applications using Flutter and Dart.
                                        They'll have the skills needed to create mobile apps for both
                                        Android and iOS platforms, optimizing their reach and impact.
                                    </li>
                                </ul>
                            </div>
                            <div className="lab-what__images">
                                <img src="../../../svgs/dart.svg" alt="mobile dev" />
                                <img src="../../../svgs/flutter.svg" alt="mobile dev" />
                                <img src="../../../svgs/firebase.svg" alt="mobile dev" />
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

export default FlutterDev
