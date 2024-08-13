import React, { useEffect } from 'react'

import { TbUsersGroup } from 'react-icons/tb'
import { PiChair } from 'react-icons/pi'
import { IoPricetagsOutline } from 'react-icons/io5'
import { LuCalendarClock, LuDot } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import LabHeroSection from '../../../../components/LabHeroSection';
import CtaSection from '../../../../components/CtaSection'
import StudentTestimonialSection from '../../../../components/StudentTestimonialSection'

function index() {
    useEffect(function () {
        document.title = 'Buildspire Ng | Frontend Lab'
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />

            <section className='section' style={{ paddingBottom: '0rem' }}>
                <div className='container'>
                    <LabHeroSection title={'Frontend Development'} welcome={`
                        Welcome to the Frontend Development Programme at Buildspire Ng, where creativity meets technology and innovation. Are you ready to embark on an exciting journey into the world of frontend web development? Whether you're a complete beginner taking your first steps or an experienced developer looking to refine your skills, our Frontend Development Programme is your gateway to a world of possibilities.
                        `} description={`
                            At Buildspire Ng, we understand the importance of the frontend in web development. It's the user interface—the face of your web applications. The Frontend Development Programme is designed to equip you with the essential skills and knowledge to create stunning, interactive websites that captivate users and leave a lasting impression.
                        `} students={93} courses={7}>
                        <Marquee autoFill speed={30} className="frontend--skills labs--skills">
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/html.svg" alt="html" />
                                HTML
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/css.svg" alt="css" />
                                CSS
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/sass.svg" alt="sass" />
                                SASS
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/js.svg" alt="js" />
                                JavaScript
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/figma.svg" alt="figma" />
                                Figma
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/react.svg" alt="react" />
                                React.Js
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/ts.svg" alt="ts" />
                                Typescript
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/nextjs.svg" alt="nextjs" />
                                Next.js
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/vue.svg" alt="vue" />
                                Vue.js
                            </span>
                        </Marquee>

                    </LabHeroSection>
                </div>

                <div style={{ marginTop: '6rem' }} className='section--grey'>
                    <div className="container">
                        <div className="section__heading--box">
                            <p className="section__subtitle">
                                <LuDot style={{ fontSize: "1.8rem", marginRight: "-.6rem" }} />
                                <>Courses</>

                                <picture>
                                    <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp" type="image/webp" />
                                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="12" height="12" />
                                </picture>
                            </p>
                            <h3 className="section__heading">Frontend Courses For You.</h3>
                            <p className="section__text">
                                Here are some of Buildspire Ng mentorship transformative virtual courses awaiting
                                your enrollment in our Frontend Development Programme. Begin your journey into the
                                captivating world of frontend web development and acquire the essential
                                knowledge and hands-on experience to build stunning, interactive websites
                                that captivate users and leave a lasting impression.
                            </p>
                        </div>

                        <span className="courses__cards">
                            <div className="courses__figure new">
                                <div className="course__image--box image--flex">
                                    <img src="../../../../svgs/js.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/css.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/react.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/html.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        The Complete React.js
                                        <span className="content--extra"> Frontend </span>Development
                                    </p>
                                    <p className="content--text">
                                        Master the fundamentals of web development and take your skills to the next level with HTML, CSS, JavaScript, and React.js!.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/complete-frontend-react-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 10-weeks | Start: Sept. 10th, 2024.</p>
                                    <span>
                                        <p><TbUsersGroup /> 25 Enrolled</p>
                                        <p><PiChair /> 30 Slots</p>
                                        <p><IoPricetagsOutline /> Paid</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure">
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/git.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/github.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Version Control <span className="content--extra">Github</span>{" "}
                                        Mastery.
                                    </p>
                                    <p className="content--text">
                                        Master version control with our 'GitHub Mastery' course, this course
                                        empowers you to efficiently manage and collaborate on code using
                                        GitHub.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/git-github" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 4-weeks | Start: Coming Soon.</p>
                                    <span>
                                        <p><TbUsersGroup /> 0 Enrolled</p>
                                        <p><PiChair /> 0 Slots</p>
                                        <p><IoPricetagsOutline /> Free</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure completed">
                                <div className="course__image--box image--flex">
                                    <img src="../../../../svgs/html.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/css.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/js.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        <span className="content--extra">Learn </span>Html, Css and
                                        JavaScript
                                    </p>
                                    <p className="content--text">
                                        Embark on your journey into the captivating world of frontend web
                                        development with our comprehensive course in HTML, CSS, and
                                        JavaScript.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/html-css-js-dev" className="profile--button-outline button">Learn More</Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 9-weeks | Start: Completed.</p>
                                    <span>
                                        <p><TbUsersGroup /> 35 Enrolled</p>
                                        <p><PiChair /> 50 Slots</p>
                                        <p><IoPricetagsOutline /> Free</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure">
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/nextjs.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/firebase.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        The Ultimate <span className="content--extra">Next.js </span>{" "}
                                        Development.
                                    </p>
                                    <p className="content--text">
                                        Explore the journey of modern web application with Next.js and
                                        Firebase. Master modern web app development with server-side
                                        rendering and real-time data.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/next-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 10-weeks | Start: Coming Soon.</p>
                                    <span>
                                        <p><TbUsersGroup /> 0 Enrolled</p>
                                        <p><PiChair /> 0 Slots</p>
                                        <p><IoPricetagsOutline /> Paid</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure completed">
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/react.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/vite.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        <span className="content--extra">React.js </span>For Frontend
                                        Development.
                                    </p>
                                    <p className="content--text">
                                        Dive into React, a powerful JavaScript library for creating dynamic
                                        and interactive web interfaces, and enhance your web development
                                        skills.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/react-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 6-weeks | Start: Completed.</p>
                                    <span>
                                        <p><TbUsersGroup /> 10 Enrolled</p>
                                        <p><PiChair /> 15 Slots</p>
                                        <p><IoPricetagsOutline /> Paid</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure">
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/js.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/ts.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        JavaScript <span className="content--extra">+</span> TypeScript
                                    </p>
                                    <p className="content--text">
                                        Unlock the power of JavaScript and TypeScript programming. Master
                                        web app development, both frontend and backend, and supercharge your
                                        coding skills. Start your journey to mastery today.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/js-ts-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 4-weeks | Start: Coming Soon.</p>
                                    <span>
                                        <p><TbUsersGroup /> 0 Enrolled</p>
                                        <p><PiChair /> 0 Slots</p>
                                        <p><IoPricetagsOutline /> Paid</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure">
                                <div className="course__image--box image--flex">
                                    <img src="../../../../svgs/vue.svg" alt="frontend dev" />
                                    <img src="../../../../svgs/vite.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Learn Frontend With <span className="content--extra">Vue.js</span>.
                                    </p>
                                    <p className="content--text">
                                        Discover the potential of Vue.js. Master this progressive JavaScript
                                        framework for building dynamic and responsive web applications.
                                    </p>
                                    <Link to="/services/metorship-programme/frontend/vue-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 6-weeks | Start: Coming Soon.</p>
                                    <span>
                                        <p><TbUsersGroup /> 0 Enrolled</p>
                                        <p><PiChair /> 0 Slots</p>
                                        <p><IoPricetagsOutline /> Paid</p>
                                    </span>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </section>

            <StudentTestimonialSection>
                <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a className='whatsapp--btn' href="/https://wa.me/2347047949344?text=Hi%2C%20I%27m%20interested%20in%20the%20frontend%20development%20program">Chat us on Whatsapp <IoLogoWhatsapp /></a>
                </div>
            </StudentTestimonialSection>
            <CtaSection />
            <Footer />

        </>
    )
}

export default index
