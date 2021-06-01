import React from 'react'
import './hero.css';
import Fade from 'react-reveal/Fade';
import Button from '../../../Components/Button/Button';

const hero = () => {
    return (
        <div className='service__hero'>
            <div className='container'>
                <Fade left distance='150px' duration={1000}>
                    <div className='container-text'>
                        <h1 className='hero-heading'>Services</h1>
                        <p className='hero-para'>Our Services include, one click-away listeners, easy to get therapists for reasonable prices, Humble’s subscription program, Online course along with Mental health kit (to be launched very soon)</p>
                        <a href="https://discord.gg/59gn9tW98n" target="_blank" ><Button title='Join our Community' /></a>
                    </div>
                </Fade>
                <Fade top distance='200px' duration={1000} delay={500}>
                    <div className='container-img'></div>
                </Fade>
            </div>
        </div>
    )
}

export default hero
