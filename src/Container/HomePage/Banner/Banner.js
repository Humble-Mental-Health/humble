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
                        <a href="https://discord.gg/59gn9tW98n" target="_blank">
                            <Button title='Join our Community' />
                        </a>
                            {/* <button onclick="window.location.href='http://www.google.com'">Join our Community</button> */}
                        </div>


                        
                        <div className="banner__social">
                            <a href="https://www.facebook.com/be.humble.1000469" target="_blank"><img src={facebook} alt=""/></a>
                            <a href="https://www.instagram.com/thehumbleindia/" target="_blank"><img src={instagram} alt=""/></a>
                            <a href="https://twitter.com/Thehumbleindia" target="_blank"><img src={twitter} alt=""/></a>
                        </div>
                    </div>
                </Zoom>
            </div>
           
        </div>
    )
}

export default Banner
