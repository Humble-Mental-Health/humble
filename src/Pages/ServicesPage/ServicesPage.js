import React from 'react'
import Meditation from '../../Container/ServicesPage/Meditation/Meditation'
import Message from '../../Container/ServicesPage/Message/Message'
import Nutrition from '../../Container/ServicesPage/Nutrition/Nutrition'
import Community from '../../Container/ServicesPage/Community/Community'
import './ServicesPage.css'
import Hero from '../../Container/ServicesPage/Hero/hero'
import Psychological from '../../Container/ServicesPage/Psychological/psychological'
import Yoga from '../../Container/ServicesPage/Yoga/yoga'
// import Footer from '../../Container/Footer/Footer'

import {motion} from 'framer-motion'
// import Nav from '../../Components/Nav/Nav'

function ServicesPage() {
    return (
        <motion.div initial={{opacity:0}} animate={{ opacity:1}} exit={{ opacity:0 }} transition={{ duration: 0.5}}>
        <div className='servicesPage'>
            {/* <Nav /> */}
            <Hero />
            <Psychological />
            <Yoga />
            <Meditation />
            <Message />
            <Nutrition />
            <Community />
            {/* <Footer/> */}
        </div>
        </motion.div>
    )
}

export default ServicesPage
