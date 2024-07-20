import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection'
import Header from '../../components/Header'
import AboutSection from '../../components/AboutSection'
import ServiceSection from '../../components/ServiceSection'
import HowSection from '../../components/HowSection'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'
import PortfolioSection from '../../components/PortfolioSection'

function index() {

    useEffect(function() {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <HowSection />
            <PortfolioSection />
            <CtaSection />
            <Footer />
        </>
    )
}

export default index