import React from 'react'
import NavbarDesktop from '../../Container/NavbarDesktop/NavbarDesktop';
import NavbarMobile from '../../Container/NavebarMobile/NavbarMobile';
import Team from '../../Container/Team/Team';
import Footer from '../../Container/Footer/Footer'

function TeamPage() {
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
            {/* {navbar()} */}
            <Team/>
            <Footer/>
        </div>
    )
}

export default TeamPage
