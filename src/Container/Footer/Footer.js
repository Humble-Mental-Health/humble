import React from 'react'
import './Footer.css'
import HumbleLogo from '../../assets/Humble-logo.png'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-new'>
            <img src={HumbleLogo} alt=''></img>
            <div className='footer-content'>
                <div className='footer-nav-container'>
                    <ul className='footer-nav-link'>
                    <NavLink style={{textDecoration: 'none'}} to='/aboutus'><li>About</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/services'><li>Services</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/founders'><li>Founders</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/contactus'><li>Contact</li></NavLink>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__social-links">
                        <a href="https://www.facebook.com/be.humble.1000469" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/Thehumbleindia" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/thehumbleindia/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer