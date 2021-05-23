import React from 'react'
// import Navbar from '../../Container/Navebar/Navbar'
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
import NavbarDesktop from '../../Container/NavbarDesktop/NavbarDesktop';
import NavbarMobile from '../../Container/NavebarMobile/NavbarMobile';
import Footer from '../../Container/Footer/Footer'

function ServicesPage() {

    // function detectMob() {
    //     return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 800 ) );
    //   }
    
    //   console.log(detectMob())
    
    //   function navbar() {
    //     if (detectMob())
    //       return <NavbarMobile/>
    //     else
    //       return <NavbarDesktop/>
    //   }

    return (
        <div className='servicesPage'>
            {/* <Navbar isVisible='True' colour='Green'/> */}
            {/* {navbar()} */}
            <Hero />
            <Psychological />
            <Yoga />
            <Meditation />
            <Message />
            <Nutrition />
            <Community />
            <Footer/>
        </div>
    )
}

export default ServicesPage
