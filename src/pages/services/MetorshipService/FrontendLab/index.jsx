import React, { useEffect } from 'react'

import { TbUsersGroup } from 'react-icons/tb'
import { PiChair } from 'react-icons/pi'
import { IoPricetagsOutline } from 'react-icons/io5'
import { LuCalendarClock } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import LabHeroSection from '../../../../components/LabHeroSection';
import CtaSection from '../../../../components/CtaSection'

function index() {
    useEffect(function () {
        document.title = 'CodeLab Africa | Frontend Lab'
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />

            <section className='section'>
                <div className='container'>
                    <LabHeroSection title={'Frontend Lab'} welcome={`
                        Welcome to the Frontend Lab at CodeLab Africa, where creativity meets technology and innovation. Are you ready to embark on an exciting journey into the world of frontend web development? Whether you're a complete beginner taking your first steps or an experienced developer looking to refine your skills, our Frontend Lab is your gateway to a world of possibilities.
                        `} description={`
                            At CodeLab Africa, we understand the importance of the frontend in web development. It's the user interface—the face of your web applications. The Frontend Lab is designed to equip you with the essential skills and knowledge to create stunning, interactive websites that captivate users and leave a lasting impression.
                        `} students={93} courses={6}>
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


                    <div style={{ marginTop: '6rem' }}>
                        <div className="section__heading--box">
                            <p className="section__subtitle">Lab Courses</p>
                            <h3 className="section__heading">Frontend Lab Courses For You.</h3>
                            <p className="section__text">
                                Here are some of CodeLab Africa's transformative virtual courses awaiting
                                your enrollment in the Frontend Lab. Begin your journey into the
                                captivating world of frontend web development and acquire the essential
                                knowledge and hands-on experience to build stunning, interactive websites
                                that captivate users and leave a lasting impression.
                            </p>
                        </div>
                        <span className="courses__cards">
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
                                    <Link to="/html-css-js-dev" className="profile--button-outline button">Learn More</Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 9-weeks | Start: Completed.</p>
                                    <span>
                                        <p><TbUsersGroup /> 35 Enrolled</p>
                                        <p><PiChair /> 50 Slots</p>
                                        <p><IoPricetagsOutline /> ₦5,000</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure new">
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
                                    <Link to="/react-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 6-weeks | Start: March 15th, 2024.</p>
                                    <span>
                                        <p><TbUsersGroup /> 2 Enrolled</p>
                                        <p><PiChair /> 15 Slots</p>
                                        <p><IoPricetagsOutline /> ₦70,000</p>
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
                                    <Link to="/js-ts-dev" className="profile--button-outline button">
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
                                    <Link to="/git-github" className="profile--button-outline button">
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
                                    <Link to="/next-dev" className="profile--button-outline button">
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

                            <div className="courses__figure">
                                <div className="course__image--box image--flex-bg">
                                    <img src="../../../../svgs/vue.svg" alt="frontend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Learn Frontend With <span className="content--extra">Vue.js</span>.
                                    </p>
                                    <p className="content--text">
                                        Discover the potential of Vue.js. Master this progressive JavaScript
                                        framework for building dynamic and responsive web applications.
                                    </p>
                                    <Link to="/vue-dev" className="profile--button-outline button">
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


            {/* <TestimonialSection />
            <PartnershipSection /> */}
            <CtaSection />
            <Footer />

        </>
    )
}

export default index
