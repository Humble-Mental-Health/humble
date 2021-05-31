import React from 'react'
import ContactUs from '../../Container/HomePage/ContactUs/ContactUs'
import {motion} from 'framer-motion'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

function ContactUsPage() {
    return (
        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} exit={{ scaleX:0 }} transition={{ duration: 0.5}}>
        <div>
            <Nav />
            <ContactUs/>
            <Footer />
        </div>
        </motion.div>
    )
}

export default ContactUsPage
