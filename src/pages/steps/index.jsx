import React from 'react'
import Header from '../../components/Header'
import HowSection from '../../components/HowSection'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'

function index() {
    return (
        <>
            <Header />
            <HowSection page={true} />
            <CtaSection />
            <Footer />
        </>
    )
}

export default index