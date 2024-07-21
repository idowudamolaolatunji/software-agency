import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutSection from '../../components/AboutSection'

function index() {
    return (
        <>
            <Header />
            <AboutSection page={true} />
            <Footer />
        </>
    )
}

export default index