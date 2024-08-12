import React, { useEffect } from 'react';

import { LuCalendarClock } from 'react-icons/lu';
import { TbUsersGroup } from 'react-icons/tb';
import { PiChair } from 'react-icons/pi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import LabHeroSection from '../../../../components/LabHeroSection';
import CtaSection from '../../../../components/CtaSection';


function index() {
    useEffect(function () {
        window.scrollTo(0, 0);
        document.title = 'CodeLab Africa | Mobile Lab'
    }, []);

    return (
        <>
            <Header />
            <section className='section'>
                <div className='container'>
                    <LabHeroSection title={'Mobile Lab'} welcome={`
                            Welcome to the Mobile Lab at CodeLab Africa, your launchpad into the dynamic realm of mobile app development. Are you ready to dive into the exciting world of mobile technology? Whether you're a novice eager to start building mobile apps or an experienced developer seeking to expand your skill set, our Mobile Lab is here to empower you.
                        `} description={`
                            In today's digital age, mobile apps are ubiquitous, and they play a crucial role in our daily lives. The Mobile Lab at CodeLab Africa is your gateway to mastering the skills needed to create innovative, user-friendly mobile applications. We understand the importance of mobile app development, and our lab is meticulously designed to equip you with the essential knowledge and hands-on experience to craft mobile solutions that resonate with users.
                        `} students={18} courses={3}>
                        <Marquee autoFill speed={30} className="mobile--skills labs--skills">
                            <span className="skill">
                                <img className="skill--image" src="../../../../svgs/dart.svg" alt="dart.svg" />
                                Dart
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../../../svgs/reactnative.svg"
                                    alt="reactnative.svg"
                                />
                                ReactNative
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../../../svgs/flutter.svg"
                                    alt="flutter.svg"
                                />
                                Flutter
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../../../svgs/c++.svg" alt="c++.svg" />
                                C++
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../../../svgs/kotlin.svg"
                                    alt="kotlin.svg"
                                />
                                Kotlin
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../../../svgs/swift.svg"
                                    alt="swift.svg"
                                />
                                Swift
                            </span>
                            <span className="skill">
                                <img
                                    className="skill--image"
                                    src="../../../../svgs/figma.svg"
                                    alt="Figma.svg"
                                />
                                Figma
                            </span>
                            <span className="skill">
                                <img className="skill--image" src="../../../../svgs/java.svg" alt="java.svg" />
                                Java
                            </span>
                        </Marquee>

                    </LabHeroSection>


                <div style={{ marginTop: '6rem' }}>
                    <div className="section__heading--box">
                        <p className="section__subtitle">Lab Courses</p>
                        <h3 className="section__heading">Mobile Lab Courses For You.</h3>
                        <p className="section__text">
                            Here are some of CodeLab Africa's transformative virtual courses awaiting
                            your enrollment in the Mobile Lab. Embark on your journey into the dynamic
                            realm of mobile app development and learn to build innovative and
                            user-friendly mobile applications.
                        </p>
                    </div>
                    <span className="courses__cards">
                        <div className="courses__figure">
                            <div className="course__image--box image--flex-md">
                                <img src="../../../../svgs/dart.svg" alt="mobile dev" />
                                <img src="../../../../svgs/flutter.svg" alt="mobile dev" />
                            </div>
                            <div className="course--content">
                                <p className="content--heading size--med">
                                    Mobile Development{" "}
                                    <span className="content--extra">Dart + Flutter</span>
                                </p>
                                <p className="content--text">
                                    Dive into the world of mobile app development with Dart and Flutter.
                                    Learn to create beautiful, cross-platform mobile applications with
                                    ease.
                                </p>
                                <Link to="/flutter-dev" className="profile--button-outline button">
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
                                <img src="../../../../svgs/reactnative.svg" alt="mobile dev" />
                            </div>
                            <div className="course--content">
                                <p className="content--heading size--med">
                                    The Ultimate <span className="content--extra">React Native</span>{" "}
                                    Mastery.
                                </p>
                                <p className="content--text">
                                    Embark on the journey of mobile app development with React Native.
                                    Master the art of building cross-platform mobile applications with
                                    the power of React.
                                </p>
                                <Link to="/react-native-dev" className="profile--button-outline button">
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
                                <img src="../../../../svgs/c++.svg" alt="mobile dev" />
                            </div>
                            <div className="course--content">
                                <p className="content--heading size--med">
                                    The Comprehensive <span className="content--extra">C++</span> For
                                    Mobile.
                                </p>
                                <p className="content--text">
                                    Explore the world of mobile app development using C++. Learn to
                                    build efficient and high-performance mobile applications across
                                    various platforms.
                                </p>
                                <Link to="/coming-soon" className="profile--button-outline button">
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


export default index;