import React from 'react'
import AboutUs from '../../Container/AboutPage/AboutUs'
import {motion} from 'framer-motion'

function AboutUsPage() {
    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration: 0.5}}>
            <div>
                {/* <Nav /> */}
                <AboutUs/>
                {/* <Footer /> */}
            </div>
        </motion.div>
    )
}

export default AboutUsPage
