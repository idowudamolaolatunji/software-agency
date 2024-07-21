import React from 'react'
import Header from '../../components/Header'
import HowSection from '../../components/HowSection'
import Footer from '../../components/Footer'

function index() {
    return (
        <>
            <Header />
            <HowSection page={true} />
            <Footer />
        </>
    )
}

export default index