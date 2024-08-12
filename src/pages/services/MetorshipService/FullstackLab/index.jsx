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


function index() {
    useEffect(function () {
        window.scrollTo(0, 0);
        document.title = 'CodeLab Africa | Full-Stack Lab'
    }, []);

    return (
        <>
            <Header />

            <section className='section'>
                <div className='container'>
                    <LabHeroSection title={'Full Stack Lab'} welcome={`
                        Welcome to the Full Stack Lab at CodeLab Africa, where you'll uncover the power of full stack development. Whether you're a coding novice or an experienced developer, our Full Stack Lab is your gateway to becoming a versatile tech professional who can create both frontend and backend solutions.
                        `} description={`
                            Full stack developers are in high demand, thanks to their ability to work on all aspects of a web application. At CodeLab Africa, we recognize the importance of full stack development in the tech industry. Our Full Stack Lab is designed to equip you with the comprehensive skills needed to build robust and scalable web applications.
                        `}  students={59} courses={4}>
                        <Marquee autoFill speed={30} class="full-stack--skills labs--skills">
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/mongoose.svg" alt="mongoose.svg" />
                                Mongoose
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/mySql.svg" alt="mySql" />
                                mySql
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/node.svg" alt="node" />
                                Node.js
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/icons8-laravel-64.png" alt="icons8-laravel-64.png" />
                                Laravel
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/express.svg" alt="express" />
                                Express.js
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/mongodb.svg" alt="mongodb" />
                                MongoDb
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/react.svg" alt="react.js" />
                                React.js
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/php.svg" alt="php.svg" />
                                PHP
                            </span>
                            <span class="skill">
                                <img class="skill--image" src="../../svgs/icons8-pug-48.png" alt="icons8-pug-48.png" />
                                Pug
                            </span>
                        </Marquee>
                    </LabHeroSection>


                    <div style={{ marginTop: '6rem' }}>
                        <div className="section__heading--box">
                            <p className="section__subtitle">Lab Courses</p>
                            <h3 className="section__heading">Full-stack Lab Courses For You.</h3>
                            <p className="section__text">
                                Here are some of CodeLab Africa's transformative virtual courses awaiting
                                your enrollment in the Full Stack Lab. Explore the comprehensive world of
                                full stack development and become a versatile tech professional who can
                                create both frontend and backend solutions.
                            </p>
                        </div>
                        <span className="courses__cards">
                            <div className="courses__figure">
                                <div className="course__image--box image--flex-2">
                                    <img src="../../../../svgs/mongodb.svg" alt="full-stackdev" />
                                    <img src="../../../../svgs/express.svg" alt="full-stackdev" />
                                    <img src="../../../../svgs/react.svg" alt="full-stackdev" />
                                    <img src="../../../../svgs/node.svg" alt="full-stackdev" />
                                </div>
                                <div className="course--content new">
                                    <p className="content--heading size--med">
                                        Full Stack Development With{" "}
                                        <span className="content--extra">MERN</span> Stack.
                                    </p>
                                    <p className="content--text">
                                        Master full-stack development with the MERN (MongoDB, Express.js,
                                        React, Node.js) stack. Dive into both frontend and backend
                                        development, craft dynamic web applications, and elevate your skills
                                        as a full-stack developer.
                                    </p>
                                    <Link to="/mern-dev" className="profile--button-outline button">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="course--info">
                                    <p><LuCalendarClock /> 12-weeks | Start: March 15th, 2024.</p>
                                    <span>
                                        <p><TbUsersGroup /> 5 Enrolled</p>
                                        <p><PiChair /> 30 Slots</p>
                                        <p><IoPricetagsOutline /> ₦100,000</p>
                                    </span>
                                </div>
                            </div>

                            <div className="courses__figure">
                                <div className="course__image--box image--flex">
                                    <img src="../../../../svgs/icons8-laravel-64.png" alt="full-stack dev" />
                                    <img src="../../../../svgs/mySql.svg" alt="full-stack dev" />
                                    <img src="../../../../svgs/php.svg" alt="full-stack dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Ultimate PHP + <span className="content--extra">mySQL </span>
                                        Mastery.
                                    </p>
                                    <p className="content--text">
                                        Unlock the power of full-stack development with PHP, Laravel,
                                        Eloquent, and MySQL. Master server-side scripting, utilize the
                                        Laravel framework, harness the capabilities of Eloquent ORM, and
                                        manage MySQL databases effectively.
                                    </p>
                                    <Link to="/php-laravel-dev" className="profile--button-outline button">
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

                            <div className="courses__figure">
                                <div className="course__image--box image--flex-2">
                                    <img src="../../../../svgs/express.svg" alt="full-stack dev" />
                                    <img src="../../../../svgs/icons8-pug-48.png" alt="full-stack dev" />
                                    <img src="../../../../svgs/mongodb.svg" alt="full-stack dev" />
                                    <img src="../../../../svgs/mongoose.svg" alt="full-stack dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Server-side <span className="content--extra">Express &amp; </span>
                                        Pug Template Engine.
                                    </p>
                                    <p className="content--text">
                                        Explore the world of full-stack development with an emphasis on
                                        server-side rendering. Master Node.js and Express for server-side
                                        scripting, leverage the Pug templating engine for dynamic views, and
                                        harness MongoDB for efficient database scalability.
                                    </p>
                                    <Link to="/express-pug-dev" className="profile--button-outline button">
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
                                <div className="course__image--box image--flex-2">
                                    <img src="../../../../svgs/mongodb.svg" alt="full-stack dev" />
                                    <img src="../../../../svgs/express.svg" alt="full-stack dev" />
                                    <img src="../../../../svgs/vue.svg" alt="full-stack dev" />
                                    <img src="../../../../svgs/node.svg" alt="full-stack dev" />
                                </div>
                                <div className="course--content">
                                    <p className="content--heading size--med">
                                        Full Stack Development With{" "}
                                        <span className="content--extra">MEVN</span> Stack.
                                    </p>
                                    <p className="content--text">
                                        Explore full-stack development with the MEVN (MongoDB, Express.js,
                                        Vue.js, Node.js) stack. Delve into frontend and backend development,
                                        create dynamic web apps, and enhance your full-stack development
                                        expertise.
                                    </p>
                                    <Link to="/merv-dev" className="profile--button-outline button">
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
                        </span>
                    </div>
                </div>
            </section>


            {/* <TestimonialSection />
            <PartnershipSection /> */}
            <CtaSection  />
            <Footer />
        </>
    )
}

export default index
