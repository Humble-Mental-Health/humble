import React, { useEffect, useState } from 'react'
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import {Switch,Route,Redirect,useLocation} from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
// import SignIn from './Container/Auth/SignIn/SignIn';
// import SignOut from './Container/Auth/SignOut/SignOut';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import FoundersPage from './Pages/FoundersPage/FoundersPage';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import {AnimatePresence} from 'framer-motion'
import Loading from './Components/Loading/Loading';

function App() {
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
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname} >
          <Route exact path="/" component ={HomePage}/>
          <Route exact path="/aboutus" component ={AboutUsPage}/>
          <Route exact path="/services" component ={ServicesPage}/>
          <Route exact path="/contactus" component ={ContactUsPage}/>
          <Route exact path="/founders" component ={FoundersPage}/>
          {/* <Route exact path="/signin" component ={SignIn}/>
          <Route exact path="/signout" component ={SignOut}/> */}
          {/* <Route component ={Error}/> */}
          <Redirect to="/"/>
        </Switch>
        {/* <Footer/> */}
      </AnimatePresence>
    </div>
  );
}

export default App;
