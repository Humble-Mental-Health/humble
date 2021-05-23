import React from 'react'
import AboutUs from '../../Container/HomePage/AboutUs/AboutUs';
import Banner from '../../Container/HomePage/Banner/Banner';
import ContactUs from '../../Container/HomePage/ContactUs/ContactUs';
import Services from '../../Container/HomePage/Services/Services';
import Psychological from '../../Container/ServicesPage/Psychological/psychological'
import Community from '../../Container/ServicesPage/Community/Community'
import Footer from '../../Container/Footer/Footer';

function HomePage() {
  return (
    <div className="homepage">
        <Banner/>
        <AboutUs/>
        <Services/>
        <Psychological/>
        <ContactUs/>
        <Community/>        
        {/* <Suggested/> */}
        <Footer/>
    </div>
  );
}

export default HomePage;
