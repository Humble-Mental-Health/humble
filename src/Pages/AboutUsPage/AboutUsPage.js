import React from 'react'
<<<<<<< HEAD
import AboutUs from '../../Container/AboutPage/AboutUs'
import Footer from '../../Container/Footer/Footer'

function AboutUsPage() {
    return (
        <div>
            <AboutUs/>
            <Footer/>
        </div>
=======
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'
import AboutUs from '../../Container/AboutPage/AboutUs'
import {motion} from 'framer-motion'

function AboutUsPage() {
    return (
        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} exit={{ scaleX:0 }} transition={{ duration: 0.5}}>
            <div>
                <Nav />
                <AboutUs/>
                <Footer />
            </div>
        </motion.div>
>>>>>>> Krishna
    )
}

export default AboutUsPage
