import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Humble-logo.png';
// import logoGreen from '../../assets/logo-green.png';
import Hamburger from '../../assets/hamburger.png';
import Discord from '../../assets/discord.png'
import "./NavbarMobile.css";

// const Navbar = ({isVisible, colour}) => {
    const Navbar = ({isVisible, colour}) => {

    // const [colorChange, setColorchange] = useState(false);

    // const changeNavbarColor = () =>{
    //     if (isVisible == 'True') {
    //         if(window.scrollY >= 80){
    //         setColorchange(true);
    //         }
    //         else{
    //         setColorchange(false);
    //         }
    //     }
    // }
    
    
    // window.addEventListener('scroll', changeNavbarColor);

    // function colourChangerClass() {

    // }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    function detectMob() {
        return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 800 ) );
    }

    console.log(detectMob());

    function hamburger() {
        if (detectMob())
            return (<div className='navbar__ham'>
                        <img src={Hamburger} alt="hamburger" onClick={showSidebar} />
                    </div>)
    }

    function discord() {
        if (detectMob())
            return (<div className='navbar__discord'>
                        <img src={Discord} alt="discord"/>
                    </div>)
    }

    console.log(sidebar)

    function dropdown() {
        if (sidebar)
            return(
                <div className='navbar__links' >
                    <li className='nav-item'>
                    <NavLink to='/'><b>Home</b></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/aboutus'><b>About</b></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/Services'><b>Services</b></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/team'><b>Team</b></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contactus'><b>Contact</b></NavLink>
                    </li>
                </div>
                
            )
    }
    


    return (
        // <div className={colorChange ? 'navbarScroll' : 'navbar' + colour}>
        <div className='navbarGreen'>
            <div className="navbar__main">
                {hamburger()}
                <div className="navbar__logo">
                    {/* <img src={colorChange ? logoGreen : logo} alt='logo' /> */}
                    <img src={logo} alt='logo' />
                </div>
                {dropdown()}
                {discord()}

                    {/* <li className='signin'>
                        <NavLink to='/signin'><b>Sign In</b></NavLink>
                    </li>
                    <li className='signout'>
                        <NavLink to='/signout'><b>Sign out</b></NavLink>
                    </li> */}
            </div>
        </div>
    )
}

export default Navbar

