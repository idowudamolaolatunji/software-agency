import React from 'react'
import Header from '../../components/Header'
import PortfolioSection from '../../components/PortfolioSection'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'

function index() {
    return (
        <>
            <Header />
            <PortfolioSection page={true} />
            <CtaSection />
            <Footer />
        </>
    )
}

export default index