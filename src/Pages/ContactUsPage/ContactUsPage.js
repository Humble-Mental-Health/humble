import React from 'react'
import ContactUs from '../../Container/HomePage/ContactUs/ContactUs'
import NavbarDesktop from '../../Container/NavbarDesktop/NavbarDesktop';
import NavbarMobile from '../../Container/NavebarMobile/NavbarMobile';
import Footer from '../../Container/Footer/Footer'

function ContactUsPage() {
    // function detectMob() {
    //     return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 800 ) );
    // }

    // console.log(detectMob())

    // function navbar() {
    // if (detectMob())
    //     return <NavbarMobile/>
    // else
    //     return <NavbarDesktop/>
    // }
    return (
        <div>
            {/* {navbar()} */}
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default ContactUsPage
