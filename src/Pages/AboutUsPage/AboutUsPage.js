import React from 'react'
import AboutUs from '../../Container/AboutPage/AboutUs'
import NavbarDesktop from '../../Container/NavbarDesktop/NavbarDesktop';
import NavbarMobile from '../../Container/NavebarMobile/NavbarMobile';
import Footer from '../../Container/Footer/Footer'
// import Navbar from '../../Container/Navebar/Navbar'

function AboutUsPage() {
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
        <div>
            {/* <Navbar isVisible='False' colour='White' /> */}
            {/* {navbar()} */}
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default AboutUsPage
