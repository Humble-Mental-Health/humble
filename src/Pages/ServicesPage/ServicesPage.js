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
import Footer from '../../Container/Footer/Footer'

function ServicesPage() {
    return (
        <div className='servicesPage'>
            <Hero />
            <Psychological />
            <Yoga />
            <Meditation />
            <Message />
            <Nutrition />
            <Community />
        </div>
    )
}

export default ServicesPage
