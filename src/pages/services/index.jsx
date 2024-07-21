import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceSection from '../../components/ServiceSection'

function index() {
    return (
        <>
            <Header />
            <ServiceSection page={true} />
            <Footer />
        </>
    )
}

export default index