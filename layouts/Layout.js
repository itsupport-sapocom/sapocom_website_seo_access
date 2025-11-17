import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos'

import 'aos/dist/aos.css';
import Loader from './Loader';
import ContactUsModal from '@/components/modals/ContactUsModal';

function Layout({ children }) {

    useEffect(() => {
        AOS.init({
            offset: 80,
            once: false,
        });
    }, [])

    return (
        <>
            <Loader />
            <ContactUsModal />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
