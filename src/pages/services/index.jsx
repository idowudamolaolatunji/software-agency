import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceSection from '../../components/ServiceSection'
import CtaSection from '../../components/CtaSection'

function index() {
    return (
        <>
            <Header />
            <ServiceSection page={true} />
            <CtaSection />
            <Footer />
        </>
    )
}

export default index