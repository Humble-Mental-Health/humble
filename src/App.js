import React from 'react'
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

const App = () => {

  const location = useLocation();

  return (
    <div className="app">
      {/* <BrowserRouter> */}
        <Nav />
        <AnimatePresence>
          <motion.div exit={{ opacity: 1 }}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component ={HomePage}/>
              <Route exact path="/aboutus" component ={AboutUsPage}/>
              <Route exact path="/services" component ={ServicesPage}/>
              <Route exact path="/contactus" component ={ContactUsPage}/>
              <Route exact path="/founders" component ={FoundersPage}/>
              <Route exact path="/login" component ={Log}/>
            {/* <Route exact path="/signout" component ={SignOut}/> */}
            {/* <Route component ={Error}/> */}
          <Redirect to="/"/>
          </Switch>
        </motion.div> 
        </AnimatePresence>
      {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
