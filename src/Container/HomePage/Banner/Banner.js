import React from 'react'
import './Banner.css'
import banner from '../../../assets/HumbleBanner.png'
import Button from '../../../Components/Button/Button'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import linkedin from '../../../assets/linkedin.png'
import twitter from '../../../assets/twitter.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Banner() {
    return (
        <div className='banner'>
            <div className="banner__grid">
                <Fade bottom delay={1000} distance='100px'>
                    <div className="banner__img">
                        <img src={banner} alt=""/>
                    </div>
                </Fade>
                <Zoom delay={1500}>
                <div className="banner__text">
                    <h1>REJUVENATE</h1>
                    <h1>REVITALISE</h1>
                    <h1>FIND YOURSELF</h1>
                    <p>From career counselling to relationship counselling, we help you solve your life problems.</p>
                    <div className="banner__text__button">
                        <Button title='Join our Community' />
                    </div>

                    
                    <div className="banner__social">
                        <img src={facebook} alt=""/>
                        <img src={instagram} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={twitter} alt=""/>
                    </div>
                </div>
                </Zoom>
            </div>
           
        </div>
    )
}

export default Banner
