import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'

function index() {

    useEffect(function () {
        document.title = 'Buildspire Ng- Terms of use'
    }, []);

    return (
        <>
            <Header />
            {/* <p>Terms</p> */}
            <CtaSection />
            <Footer />
        </>
    )
}

export default index