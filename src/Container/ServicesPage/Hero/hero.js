import React from 'react'
import './hero.css';
import Fade from 'react-reveal/Fade';

const hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <Fade left distance='150px' duration={1000}>
                    <div className='container-text'>
                        <h1 className='hero-heading'>Services</h1>
                        <p className='hero-para'>Our Services include, one click-away listeners, easy to get therapists for reasonable prices, Humble’s subscription program, Online course along with Mental health kit (to be launched very soon)</p>
                        <button>Join our Community</button>
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
