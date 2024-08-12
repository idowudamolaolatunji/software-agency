import React, { useEffect } from 'react'
import Header from '../../components/Header'
import ContactForm from '../../components/contactForm'
import Footer from '../../components/Footer'

function index() {

    useEffect(function () {
        document.title = 'Buildspire - Contact Us'
    }, []);

    return (
        <>
            <Header />
            <ContactForm />
            <Footer />
        </>
    )
}

export default index