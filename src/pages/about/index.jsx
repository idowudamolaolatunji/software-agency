import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutSection from '../../components/AboutSection'
import CtaSection from '../../components/CtaSection'

function index() {
    return (
        <>
            <Header />
            <AboutSection page={true} />
            <CtaSection />
            <Footer />
        </>
    )
}

export default index