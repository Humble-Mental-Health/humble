import React from 'react'
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
// import SignIn from './Container/Auth/SignIn/SignIn';
// import SignOut from './Container/Auth/SignOut/SignOut';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import FoundersPage from './Pages/FoundersPage/FoundersPage';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Switch>
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
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
