import React from 'react'
import './Footer.css'
import HumbleLogo from '../../assets/Humble-logo.png'

const Footer = () => {
    return (
        <div className='footer-new'>
            <img src={HumbleLogo} alt=''></img>
            <div className='footer-content'>
                <div className='footer-nav-container'>
                    <ul className='footer-nav-link'>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Our Services</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Team</a></li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer