import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CtaSection from '../../components/CtaSection'

function index() {

    useEffect(function () {
        document.title = 'Buildspire - Career'
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