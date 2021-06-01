import React, { useState } from 'react'
import './nav.css'
import logo from '../../assets/Humble-logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Nav = () => {

    const[display,setDisplay] = useState(false);

    return (
        <div className='nav'> 
            <Fade left>
                <img src={logo} alt=''></img>
            </Fade>
            <Zoom delay={500}>
                <ul style={{transform: display?"translateX(0px)" :null }}>
                    <NavLink style={{textDecoration: 'none'}} to='/'><li>Home</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/aboutus'><li>About</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/services'><li>Services</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/founders'><li>Founders</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/contactus'><li>Contact</li></NavLink>
                </ul>
            </Zoom>
                {
                    display?<AiOutlineClose className='hamburger' onClick={() => setDisplay(false)} />
                    : <GiHamburgerMenu className='hamburger' onClick={() => setDisplay(true)} />
                }
                {/* <GiHamburgerMenu className='hamburger' onClick={() => setDisplay(!display)} /> */}
        </div>
    )
}

export default Nav
