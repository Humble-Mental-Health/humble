import React from 'react'
import AboutUs from '../../Container/HomePage/AboutUs/AboutUs';
import Banner from '../../Container/HomePage/Banner/Banner';
import ContactUs from '../../Container/HomePage/ContactUs/ContactUs';
import Services from '../../Container/HomePage/Services/Services';
import Psychological from '../../Container/ServicesPage/Psychological/psychological'
import Community from '../../Container/ServicesPage/Community/Community'
<<<<<<< HEAD
import Footer from '../../Container/Footer/Footer';
=======
import Nav from '../../Components/Nav/Nav';
import {motion} from 'framer-motion'
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';
>>>>>>> Krishna

function HomePage() {
  return (
    <div className="homepage">
<<<<<<< HEAD
=======
    <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} exit={{ scaleX:0 }} transition={{ duration: 0.5}}>
        <Nav />
>>>>>>> Krishna
        <Banner/>
        <AboutUs/>
        <Services/>
        <Psychological/>
        <ContactUs/>
        <Community/>        
        {/* <Suggested/> */}
        <Footer/>
<<<<<<< HEAD
=======
    </motion.div>
>>>>>>> Krishna
    </div>
  );
}

export default HomePage;
