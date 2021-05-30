import React from 'react'
import './footer.css'
import HumbleLogo from '../../assets/Humble-logo.png'

const Footer = () => {
    return (
        <div className='footer-new'>
            <img src={HumbleLogo} alt=''></img>
            <div className='footer-content'>
                <div className='footer-nav-container'>
                    <ul className='footer-nav-link'>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Contact Us</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
