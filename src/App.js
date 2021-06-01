import React, { useEffect, useState } from 'react'
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import {BrowserRouter,Switch,Route,Redirect, useLocation, useHistory} from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
// import SignIn from './Container/Auth/SignIn/SignIn';
// import SignOut from './Container/Auth/SignOut/SignOut';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import FoundersPage from './Pages/FoundersPage/FoundersPage';
import { AnimatePresence } from "framer-motion";
import Nav from './Components/Nav/Nav';
import { motion } from "framer-motion"
// import Login from './Container/Auth/Login/Login';
import Log from './Auth/log/log';
import Loading from './Components/Loading/Loading';
import Footer from './Container/Footer/Footer'


const App = () => {

  const [loading, setLoading] = useState(false)
  let location = useLocation();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, getRandomInt(1000,4000))
  },[])


  return (
    <div className="app">
      {
      loading?<Loading />:null
    }
      <Nav/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname} >
          <Route exact path="/" component ={HomePage}/>
          <Route exact path="/aboutus" component ={AboutUsPage}/>
          <Route exact path="/services" component ={ServicesPage}/>
          <Route exact path="/contactus" component ={ContactUsPage}/>
          <Route exact path="/founders" component ={FoundersPage}/>
          <Route exact path="/login" component ={Log}/>
          {/* <Route exact path="/signin" component ={SignIn}/>
          <Route exact path="/signout" component ={SignOut}/> */}
          {/* <Route component ={Error}/> */}
          <Redirect to="/"/>
          </Switch>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;


// <Nav />
//         <AnimatePresence>
//           <motion.div exit={{ opacity: 1 }}>
//             <Switch location={location} key={location.pathname}>
//               <Route exact path="/" component ={HomePage}/>
//               <Route exact path="/aboutus" component ={AboutUsPage}/>
//               <Route exact path="/services" component ={ServicesPage}/>
//               <Route exact path="/contactus" component ={ContactUsPage}/>
//               <Route exact path="/founders" component ={FoundersPage}/>
//               <Route exact path="/login" component ={Log}/>
//             {/* <Route exact path="/signout" component ={SignOut}/> */}
//             {/* <Route component ={Error}/> */}
//           <Redirect to="/"/>
//           </Switch>
//         </motion.div> 
//         </AnimatePresence>