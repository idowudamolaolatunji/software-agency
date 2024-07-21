import React from 'react'
import Header from '../../components/Header'
import PortfolioSection from '../../components/PortfolioSection'
import Footer from '../../components/Footer'

function index() {
    return (
        <>
            <Header />
            <PortfolioSection page={true} />
            <Footer />
        </>
    )
}

export default index