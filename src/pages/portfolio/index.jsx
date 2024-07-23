import React, { useEffect } from 'react'
import Header from '../../components/Header'
import PortfolioSection from '../../components/PortfolioSection'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'

function index() {

    useEffect(function () {
        document.title = 'Buildspire - Portfolio'
    }, []);

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