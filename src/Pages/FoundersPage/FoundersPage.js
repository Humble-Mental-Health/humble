import React from 'react'
<<<<<<< HEAD
import Founder from '../../Container/Founder/Founder'
import Footer from '../../Container/Footer/Footer'

function TeamPage() {
    return (
        <div>
            {/* <Team/>
            <Footer/> */}
            <Founder/>
            <Footer/>
        </div>
=======
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'
import Founder from '../../Container/Founder/Founder'
import {motion} from 'framer-motion'

function TeamPage() {
    return (
        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} exit={{ scaleX:0 }} transition={{ duration: 0.5}}>
            <div>
                <Nav />
                <Founder/>
                <Footer />
            </div>
        </motion.div>
>>>>>>> Krishna
    )
}

export default TeamPage
