import React from 'react'
import AboutUs from '../../Container/HomePage/AboutUs/AboutUs';
import Banner from '../../Container/HomePage/Banner/Banner';
import ContactUs from '../../Container/HomePage/ContactUs/ContactUs';
import Services from '../../Container/HomePage/Services/Services';
import Psychological from '../../Container/ServicesPage/Psychological/psychological'
import Community from '../../Container/ServicesPage/Community/Community'
import {motion} from 'framer-motion';

function HomePage() {
  return (
    <div className="homepage">
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration: 0.5}}>
        {/* <Nav /> */}
        <Banner/>
        <AboutUs/>
        <Services/>
        <Psychological/>
        <ContactUs/>
        <Community/>        
        {/* <Footer/> */}
    </motion.div>
    </div>
  );
}
export default HomePage;
