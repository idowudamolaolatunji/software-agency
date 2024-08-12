import React, { useEffect } from 'react';

import { LuCalendarClock } from 'react-icons/lu';
import { TbUsersGroup } from 'react-icons/tb';
import { PiChair } from 'react-icons/pi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import LabHeroSection from '../../../../components/LabHeroSection';
import CtaSection from '../../../../components/CtaSection';


function index() {

    useEffect(function () {
        window.scrollTo(0, 0);
        document.title = 'Buildspire Ng | Backend Lab'
    }, [])
    return (
        <>
            <Header />

            <section className='section'>
                <div className='container'>
                    <LabHeroSection title={'Backend Lab'} welcome={`
                        Welcome to the Backend Lab at Buildspire Ng, where you'll discover the world of backend development and server-side programming. Whether you're new to coding or a seasoned developer, our Backend Lab will empower you to create the core functionality of web applications and services.
                        `} description={`
                            Backend developers play a crucial role in building the foundation of web applications. At Buildspire Ng, we understand the significance of backend development in delivering seamless user experiences. Our Backend Lab is designed to provide you with the skills and knowledge needed to create efficient and secure backend systems.
                        `} students={57} courses={5}>
                        <Marquee autoFill speed={30} className="backend--skills labs--skills">
                            <span className="skill">
                                <img className="skill--image" src="../../svgs/php.svg" alt="php" />
                                PHP
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/mySql.svg"
                                    alt="mySql"
                                />
                                mySql
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/node.svg"
                                    alt="node"
                                />
                                Node.js
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/express.svg"
                                    alt="express"
                                />
                                Express.js
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/mongodb.svg"
                                    alt="mongodb"
                                />
                                MongoDb
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/dotNet.svg"
                                    alt="c#"
                                />
                                .Net
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/python.svg"
                                    alt="python"
                                />
                                Python
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/postgrelsql.svg"
                                    alt="postgrelsql"
                                />
                                PostgrelSql
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../svgs/postman-white.svg"
                                    alt="postman"
                                />
                                Postman
                            </span>
                        </Marquee>
                    </LabHeroSection>


                    <div style={{ marginTop: '6rem' }}>
                        <div className="section__heading--box">
                            <p className="section__subtitle">Lab Courses</p>
                            <h3 className="section__heading">Backend Lab Courses For You.</h3>
                            <p className="section__text">
                                Here are some of Buildspire Ng mentorship transformative virtual courses awaiting
                                your enrollment in the Backend Lab. Begin your journey into the world of
                                backend development and unlock your potential in creating the core
                                functionality of web applications.
                            </p>
                        </div>
                        <span className="courses__cards">
                            <div className="courses__figure">
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/node.svg" alt="backenddev" />
                                    <img src="../../../../svgs/mongodb.svg" alt="backenddev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Backend Development With{" "}
                                        <span className="content--extra">Node + MongoDb</span>
                                    </p>
                                    <p className="content--text">
                                        Unlock the potential of backend development with Node.js and
                                        MongoDB. Learn to create robust and scalable server-side
                                        applications with these powerful technologies.
                                    </p>
                                    <Link to="/node-dev" className="profile--button-outline button">
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
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/mySql.svg" alt="backend dev" />
                                    <img src="../../../../svgs/php.svg" alt="backend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Ultimate PHP + <span className="content--extra">mySQL </span>
                                        Mastery.
                                    </p>
                                    <p className="content--text">
                                        Elevate your skills and dive into web development with PHP Laravel
                                        and MySQL. Master server-side scripting, utilize the Laravel
                                        framework, and manage databases effectively.
                                    </p>
                                    <Link to="/php-dev" className="profile--button-outline button">
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
                                <div className="course__image--box image--flex-md">
                                    <img src="../../../../svgs/python.svg" alt="backend dev" />
                                    <img src="../../../../svgs/postgrelsql.svg" alt="backend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Learing <span className="content--extra">Python + </span>
                                        PostgrelSql.
                                    </p>
                                    <p className="content--text">
                                        Delve into the world of web development with Python and PostgreSQL.
                                        Master server-side scripting, data analytics and management, and
                                        build robust and scalable web applications.
                                    </p>
                                    <Link to="/python-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 8-weeks | Start: Coming Soon.</p>
                                    <span>
                                        <p><TbUsersGroup /> 0 Enrolled</p>
                                        <p><PiChair /> 0 Slots</p>
                                        <p><IoPricetagsOutline /> Paid</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure">
                                <div className="course__image--box image--flex-bg">
                                    <img src="../../../../svgs/postman-white.svg" alt="backend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Postman Api <span className="content--extra">Testing</span>.
                                    </p>
                                    <p className="content--text">
                                        Elevate your API testing prowess with our comprehensive "Postman API
                                        Testing" course. Postman stands as a dynamic and indispensable tool
                                        for simplifying API testing processes.
                                    </p>
                                    <Link to="/postman" className="profile--button-outline button">
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
                                    <img src="../../../../svgs/dotNet.svg" alt="backend dev" />
                                    <img src="../../../../svgs/mySql.svg" alt="backend dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Comprehensive <span className="content--extra">.NET</span> Core +
                                        mySQL
                                    </p>
                                    <p className="content--text">
                                        Embark on the journey of web development with .NET and MySQL, and
                                        build robust web applications and become a proficient web developer
                                        with this versatile combination.
                                    </p>
                                    <Link to="/dotNet-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 12-weeks | Start: Coming Soon.</p>
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
