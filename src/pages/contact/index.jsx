import React, { useEffect } from 'react'
import Header from '../../components/Header'
import CtaSection from '../../components/CtaSection'
import Footer from '../../components/Footer'

function index() {

    useEffect(function () {
        document.title = 'Buildspire - Contact Us'
    }, []);

    return (
        <>
            <Header />
            {/* <div>index</div> */}
            <CtaSection />
            <Footer />
        </>
    )
}

export default index