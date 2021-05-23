import React from 'react'
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
// import SignIn from './Container/Auth/SignIn/SignIn';
// import SignOut from './Container/Auth/SignOut/SignOut';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import TeamPage from './Pages/TeamPage/TeamPage';
import Nav from './Components/Nav/Nav';

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
        <Route exact path="/team" component ={TeamPage}/>
        {/* <Route exact path="/signin" component ={SignIn}/>
        <Route exact path="/signout" component ={SignOut}/> */}
        {/* <Route component ={Error}/> */}
        <Redirect to="/"/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
