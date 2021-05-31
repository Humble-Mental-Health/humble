import React from 'react'
// import Pricing from '../../Container/Pricing/Pricing'
// import ServicesBanner from '../../Container/ServicesBanner/ServicesBanner'
// import ServicesGroup from '../../Container/ServicesGroup/ServicesGroup'
import Meditation from '../../Container/ServicesPage/Meditation/Meditation'
import Message from '../../Container/ServicesPage/Message/Message'
import Nutrition from '../../Container/ServicesPage/Nutrition/Nutrition'
import Community from '../../Container/ServicesPage/Community/Community'
import './ServicesPage.css'
import Hero from '../../Container/ServicesPage/Hero/hero'
import Psychological from '../../Container/ServicesPage/Psychological/psychological'
import Yoga from '../../Container/ServicesPage/Yoga/yoga'
import Footer from '../../Components/Footer/Footer'
import FooterO from '../../Container/Footer/Footer'

import {motion} from 'framer-motion'
import Nav from '../../Components/Nav/Nav'

function ServicesPage() {
    return (
        <motion.div initial={{scaleX:0}} animate={{ scaleX:1}} exit={{ scaleX:0 }} transition={{ duration: 0.5}}>
        <div className='servicesPage'>
            <Nav />
            <Hero />
            <Psychological />
            <Yoga />
            <Meditation />
            <Message />
            <Nutrition />
            <Community />
            <Footer />
        </div>
        </motion.div>
    )
}

export default ServicesPage
